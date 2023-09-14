/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  SystemAssignedIdentitiesImpl,
  OperationsImpl,
  UserAssignedIdentitiesImpl
} from "./operations";
import {
  SystemAssignedIdentities,
  Operations,
  UserAssignedIdentities
} from "./operationsInterfaces";
import { ManagedServiceIdentityClientOptionalParams } from "./models";

export class ManagedServiceIdentityClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the ManagedServiceIdentityClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Id of the Subscription to which the identity belongs.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ManagedServiceIdentityClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ManagedServiceIdentityClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-msi/2.1.0-beta.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-09-30-preview";
    this.systemAssignedIdentities = new SystemAssignedIdentitiesImpl(this);
    this.operations = new OperationsImpl(this);
    this.userAssignedIdentities = new UserAssignedIdentitiesImpl(this);
  }

  systemAssignedIdentities: SystemAssignedIdentities;
  operations: Operations;
  userAssignedIdentities: UserAssignedIdentities;
}
