/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AfdProfiles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import {
  Usage,
  AfdProfilesListResourceUsageNextOptionalParams,
  AfdProfilesListResourceUsageOptionalParams,
  AfdProfilesListResourceUsageResponse,
  CheckHostNameAvailabilityInput,
  AfdProfilesCheckHostNameAvailabilityOptionalParams,
  AfdProfilesCheckHostNameAvailabilityResponse,
  AfdProfilesListResourceUsageNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AfdProfiles operations. */
export class AfdProfilesImpl implements AfdProfiles {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class AfdProfiles class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Checks the quota and actual usage of AzureFrontDoor endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile
   *                    which is unique within the resource group.
   * @param options The options parameters.
   */
  public listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    options?: AfdProfilesListResourceUsageOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listResourceUsagePagingAll(
      resourceGroupName,
      profileName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listResourceUsagePagingPage(
          resourceGroupName,
          profileName,
          options,
          settings
        );
      }
    };
  }

  private async *listResourceUsagePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: AfdProfilesListResourceUsageOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Usage[]> {
    let result: AfdProfilesListResourceUsageResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listResourceUsage(
        resourceGroupName,
        profileName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listResourceUsageNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listResourceUsagePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: AfdProfilesListResourceUsageOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listResourceUsagePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks the quota and actual usage of AzureFrontDoor endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile
   *                    which is unique within the resource group.
   * @param options The options parameters.
   */
  private _listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    options?: AfdProfilesListResourceUsageOptionalParams
  ): Promise<AfdProfilesListResourceUsageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listResourceUsageOperationSpec
    );
  }

  /**
   * Check the name availability of a host name.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile
   *                    which is unique within the resource group.
   * @param checkHostNameAvailabilityInput Custom domain to be validated.
   * @param options The options parameters.
   */
  checkHostNameAvailability(
    resourceGroupName: string,
    profileName: string,
    checkHostNameAvailabilityInput: CheckHostNameAvailabilityInput,
    options?: AfdProfilesCheckHostNameAvailabilityOptionalParams
  ): Promise<AfdProfilesCheckHostNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        checkHostNameAvailabilityInput,
        options
      },
      checkHostNameAvailabilityOperationSpec
    );
  }

  /**
   * ListResourceUsageNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile
   *                    which is unique within the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListResourceUsage method.
   * @param options The options parameters.
   */
  private _listResourceUsageNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: AfdProfilesListResourceUsageNextOptionalParams
  ): Promise<AfdProfilesListResourceUsageNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listResourceUsageNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listResourceUsageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/usages",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkHostNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/checkHostNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.checkHostNameAvailabilityInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listResourceUsageNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
