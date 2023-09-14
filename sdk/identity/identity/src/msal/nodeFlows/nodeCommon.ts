// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as msalNode from "@azure/msal-node";
import * as msalCommon from "@azure/msal-common";

import { AccessToken, GetTokenOptions } from "@azure/core-auth";
import { AbortSignalLike } from "@azure/abort-controller";

import { DeveloperSignOnClientId } from "../../constants";
import { IdentityClient, TokenCredentialOptions } from "../../client/identityClient";
import { resolveTenantId } from "../../util/resolveTenantId";
import { AuthenticationRequiredError } from "../../errors";
import { CredentialFlowGetTokenOptions } from "../credentials";
import { MsalFlow, MsalFlowOptions } from "../flows";
import { AuthenticationRecord } from "../types";
import {
  defaultLoggerCallback,
  getAuthority,
  getKnownAuthorities,
  MsalBaseUtilities,
  msalToPublic,
  publicToMsal
} from "../utils";
import { TokenCachePersistenceOptions } from "./tokenCachePersistenceOptions";
import { processMultiTenantRequest } from "../../util/validateMultiTenant";
import { RegionalAuthority } from "../../regionalAuthority";

/**
 * Union of the constructor parameters that all MSAL flow types for Node.
 * @internal
 */
export interface MsalNodeOptions extends MsalFlowOptions {
  tokenCachePersistenceOptions?: TokenCachePersistenceOptions;
  tokenCredentialOptions: TokenCredentialOptions;
  /**
   * Specifies a regional authority. Please refer to the {@link RegionalAuthority} type for the accepted values.
   * If {@link RegionalAuthority.AutoDiscoverRegion} is specified, we will try to discover the regional authority endpoint.
   * If the property is not specified, uses a non-regional authority endpoint.
   */
  regionalAuthority?: string;
}

/**
 * The current persistence provider, undefined by default.
 * @internal
 */
let persistenceProvider:
  | ((options?: TokenCachePersistenceOptions) => Promise<msalCommon.ICachePlugin>)
  | undefined = undefined;

/**
 * An object that allows setting the persistence provider.
 * @internal
 */
export const msalNodeFlowCacheControl = {
  setPersistence(pluginProvider: Exclude<typeof persistenceProvider, undefined>): void {
    persistenceProvider = pluginProvider;
  }
};

/**
 * MSAL partial base client for Node.js.
 *
 * It completes the input configuration with some default values.
 * It also provides with utility protected methods that can be used from any of the clients,
 * which includes handlers for successful responses and errors.
 *
 * @internal
 */
export abstract class MsalNode extends MsalBaseUtilities implements MsalFlow {
  protected publicApp: msalNode.PublicClientApplication | undefined;
  protected confidentialApp: msalNode.ConfidentialClientApplication | undefined;
  protected msalConfig: msalNode.Configuration;
  protected clientId: string;
  protected tenantId: string;
  protected authorityHost?: string;
  protected identityClient?: IdentityClient;
  protected requiresConfidential: boolean = false;
  protected azureRegion?: string;
  protected createCachePlugin: (() => Promise<msalCommon.ICachePlugin>) | undefined;

  constructor(options: MsalNodeOptions) {
    super(options);
    this.msalConfig = this.defaultNodeMsalConfig(options);
    this.tenantId = resolveTenantId(options.logger, options.tenantId, options.clientId);
    this.clientId = this.msalConfig.auth.clientId;

    // If persistence has been configured
    if (persistenceProvider !== undefined && options.tokenCachePersistenceOptions?.enabled) {
      this.createCachePlugin = () => persistenceProvider!(options.tokenCachePersistenceOptions);
    } else if (options.tokenCachePersistenceOptions?.enabled) {
      throw new Error(
        [
          "Persistent token caching was requested, but no persistence provider was configured.",
          "You must install the identity-cache-persistence plugin package (`npm install --save @azure/identity-cache-persistence`)",
          "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling",
          "`useIdentityPlugin(cachePersistencePlugin)` before using `tokenCachePersistenceOptions`."
        ].join(" ")
      );
    }

    this.azureRegion = options.regionalAuthority ?? process.env.AZURE_REGIONAL_AUTHORITY_NAME;
    if (this.azureRegion === RegionalAuthority.AutoDiscoverRegion) {
      this.azureRegion = "AUTO_DISCOVER";
    }
  }

  /**
   * Generates a MSAL configuration that generally works for Node.js
   */
  protected defaultNodeMsalConfig(options: MsalNodeOptions): msalNode.Configuration {
    const clientId = options.clientId || DeveloperSignOnClientId;
    const tenantId = resolveTenantId(options.logger, options.tenantId, options.clientId);

    this.authorityHost = options.authorityHost || process.env.AZURE_AUTHORITY_HOST;
    const authority = getAuthority(tenantId, this.authorityHost);

    this.identityClient = new IdentityClient({
      ...options.tokenCredentialOptions,
      authorityHost: authority
    });

    let clientCapabilities: string[] = ["CP1"];
    if (process.env.AZURE_IDENTITY_DISABLE_CP1) {
      clientCapabilities = [];
    }

    return {
      auth: {
        clientId,
        authority,
        knownAuthorities: getKnownAuthorities(tenantId, authority),
        clientCapabilities
      },
      // Cache is defined in this.prepare();
      system: {
        networkClient: this.identityClient,
        loggerOptions: {
          loggerCallback: defaultLoggerCallback(options.logger)
        }
      }
    };
  }

  /**
   * Prepares the MSAL applications.
   */
  async init(options?: CredentialFlowGetTokenOptions): Promise<void> {
    if (options?.abortSignal) {
      options.abortSignal.addEventListener("abort", () => {
        // This will abort any pending request in the IdentityClient,
        // based on the received or generated correlationId
        this.identityClient!.abortRequests(options.correlationId);
      });
    }

    if (this.publicApp || this.confidentialApp) {
      return;
    }

    if (this.createCachePlugin !== undefined) {
      this.msalConfig.cache = {
        cachePlugin: await this.createCachePlugin()
      };
    }

    this.publicApp = new msalNode.PublicClientApplication(this.msalConfig);
    // The confidential client requires either a secret, assertion or certificate.
    if (
      this.msalConfig.auth.clientSecret ||
      this.msalConfig.auth.clientAssertion ||
      this.msalConfig.auth.clientCertificate
    ) {
      this.confidentialApp = new msalNode.ConfidentialClientApplication(this.msalConfig);
    } else {
      if (this.requiresConfidential) {
        throw new Error(
          "Unable to generate the MSAL confidential client. Missing either the client's secret, certificate or assertion."
        );
      }
    }
  }

  /**
   * Allows the cancellation of a MSAL request.
   */
  protected withCancellation(
    promise: Promise<msalCommon.AuthenticationResult | null>,
    abortSignal?: AbortSignalLike,
    onCancel?: () => void
  ): Promise<msalCommon.AuthenticationResult | null> {
    return new Promise((resolve, reject) => {
      promise
        .then((msalToken) => {
          return resolve(msalToken!);
        })
        .catch(reject);
      if (abortSignal) {
        abortSignal.addEventListener("abort", () => {
          onCancel?.();
        });
      }
    });
  }

  /**
   * Returns the existing account, attempts to load the account from MSAL.
   */
  async getActiveAccount(): Promise<AuthenticationRecord | undefined> {
    if (this.account) {
      return this.account;
    }
    const cache = this.confidentialApp?.getTokenCache() ?? this.publicApp?.getTokenCache();
    const accountsByTenant = await cache?.getAllAccounts();

    if (!accountsByTenant) {
      return;
    }

    if (accountsByTenant.length === 1) {
      this.account = msalToPublic(this.clientId, accountsByTenant[0]);
    } else {
      this.logger
        .info(`More than one account was found authenticated for this Client ID and Tenant ID.
However, no "authenticationRecord" has been provided for this credential,
therefore we're unable to pick between these accounts.
A new login attempt will be requested, to ensure the correct account is picked.
To work with multiple accounts for the same Client ID and Tenant ID, please provide an "authenticationRecord" when initializing a credential to prevent this from happening.`);
      return;
    }

    return this.account;
  }

  /**
   * Attempts to retrieve a token from cache.
   */
  async getTokenSilent(
    scopes: string[],
    options?: CredentialFlowGetTokenOptions
  ): Promise<AccessToken> {
    await this.getActiveAccount();
    if (!this.account) {
      throw new AuthenticationRequiredError({
        scopes,
        getTokenOptions: options,
        message:
          "Silent authentication failed. We couldn't retrieve an active account from the cache."
      });
    }

    const silentRequest: msalNode.SilentFlowRequest = {
      // To be able to re-use the account, the Token Cache must also have been provided.
      account: publicToMsal(this.account),
      correlationId: options?.correlationId,
      scopes,
      authority: options?.authority
    };

    try {
      this.logger.info("Attempting to acquire token silently");
      const response =
        (await this.confidentialApp?.acquireTokenSilent(silentRequest)) ??
        (await this.publicApp!.acquireTokenSilent(silentRequest));
      return this.handleResult(scopes, this.clientId, response || undefined);
    } catch (err) {
      throw this.handleError(scopes, err, options);
    }
  }

  /**
   * Attempts to retrieve an authenticated token from MSAL.
   */
  protected abstract doGetToken(scopes: string[], options?: GetTokenOptions): Promise<AccessToken>;

  /**
   * Wrapper around each MSAL flow get token operation: doGetToken.
   * If disableAutomaticAuthentication is sent through the constructor, it will prevent MSAL from requesting the user input.
   */
  public async getToken(
    scopes: string[],
    options: CredentialFlowGetTokenOptions = {}
  ): Promise<AccessToken> {
    const tenantId = processMultiTenantRequest(this.tenantId, options) || this.tenantId;

    options.authority = getAuthority(tenantId, this.authorityHost);

    options.correlationId = options?.correlationId || this.generateUuid();
    await this.init(options);

    try {
      return await this.getTokenSilent(scopes, options);
    } catch (err) {
      if (err.name !== "AuthenticationRequiredError") {
        throw err;
      }
      if (options?.disableAutomaticAuthentication) {
        throw new AuthenticationRequiredError({
          scopes,
          getTokenOptions: options,
          message:
            "Automatic authentication has been disabled. You may call the authentication() method."
        });
      }
      this.logger.info(`Silent authentication failed, falling back to interactive method.`);
      return this.doGetToken(scopes, options);
    }
  }
}