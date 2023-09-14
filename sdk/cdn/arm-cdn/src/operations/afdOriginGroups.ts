/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AfdOriginGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AFDOriginGroup,
  AfdOriginGroupsListByProfileNextOptionalParams,
  AfdOriginGroupsListByProfileOptionalParams,
  Usage,
  AfdOriginGroupsListResourceUsageNextOptionalParams,
  AfdOriginGroupsListResourceUsageOptionalParams,
  AfdOriginGroupsListByProfileResponse,
  AfdOriginGroupsGetOptionalParams,
  AfdOriginGroupsGetResponse,
  AfdOriginGroupsCreateOptionalParams,
  AfdOriginGroupsCreateResponse,
  AFDOriginGroupUpdateParameters,
  AfdOriginGroupsUpdateOptionalParams,
  AfdOriginGroupsUpdateResponse,
  AfdOriginGroupsDeleteOptionalParams,
  AfdOriginGroupsListResourceUsageResponse,
  AfdOriginGroupsListByProfileNextResponse,
  AfdOriginGroupsListResourceUsageNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AfdOriginGroups operations. */
export class AfdOriginGroupsImpl implements AfdOriginGroups {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class AfdOriginGroups class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the existing origin groups within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  public listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: AfdOriginGroupsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<AFDOriginGroup> {
    const iter = this.listByProfilePagingAll(
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
      byPage: () => {
        return this.listByProfilePagingPage(
          resourceGroupName,
          profileName,
          options
        );
      }
    };
  }

  private async *listByProfilePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: AfdOriginGroupsListByProfileOptionalParams
  ): AsyncIterableIterator<AFDOriginGroup[]> {
    let result = await this._listByProfile(
      resourceGroupName,
      profileName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByProfileNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByProfilePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: AfdOriginGroupsListByProfileOptionalParams
  ): AsyncIterableIterator<AFDOriginGroup> {
    for await (const page of this.listByProfilePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The options parameters.
   */
  public listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginGroupsListResourceUsageOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listResourceUsagePagingAll(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listResourceUsagePagingPage(
          resourceGroupName,
          profileName,
          originGroupName,
          options
        );
      }
    };
  }

  private async *listResourceUsagePagingPage(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginGroupsListResourceUsageOptionalParams
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listResourceUsage(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listResourceUsageNext(
        resourceGroupName,
        profileName,
        originGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listResourceUsagePagingAll(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginGroupsListResourceUsageOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listResourceUsagePagingPage(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the existing origin groups within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  private _listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: AfdOriginGroupsListByProfileOptionalParams
  ): Promise<AfdOriginGroupsListByProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listByProfileOperationSpec
    );
  }

  /**
   * Gets an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginGroupsGetOptionalParams
  ): Promise<AfdOriginGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new origin group within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroup Origin group properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originGroup: AFDOriginGroup,
    options?: AfdOriginGroupsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AfdOriginGroupsCreateResponse>,
      AfdOriginGroupsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AfdOriginGroupsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, originGroupName, originGroup, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new origin group within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroup Origin group properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originGroup: AFDOriginGroup,
    options?: AfdOriginGroupsCreateOptionalParams
  ): Promise<AfdOriginGroupsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      originGroupName,
      originGroup,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originGroupUpdateProperties Origin group properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originGroupUpdateProperties: AFDOriginGroupUpdateParameters,
    options?: AfdOriginGroupsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AfdOriginGroupsUpdateResponse>,
      AfdOriginGroupsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AfdOriginGroupsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originGroupUpdateProperties,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originGroupUpdateProperties Origin group properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originGroupUpdateProperties: AFDOriginGroupUpdateParameters,
    options?: AfdOriginGroupsUpdateOptionalParams
  ): Promise<AfdOriginGroupsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      originGroupName,
      originGroupUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginGroupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, originGroupName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The options parameters.
   */
  private _listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginGroupsListResourceUsageOptionalParams
  ): Promise<AfdOriginGroupsListResourceUsageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, options },
      listResourceUsageOperationSpec
    );
  }

  /**
   * ListByProfileNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByProfile method.
   * @param options The options parameters.
   */
  private _listByProfileNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: AfdOriginGroupsListByProfileNextOptionalParams
  ): Promise<AfdOriginGroupsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listByProfileNextOperationSpec
    );
  }

  /**
   * ListResourceUsageNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param nextLink The nextLink from the previous successful call to the ListResourceUsage method.
   * @param options The options parameters.
   */
  private _listResourceUsageNext(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    nextLink: string,
    options?: AfdOriginGroupsListResourceUsageNextOptionalParams
  ): Promise<AfdOriginGroupsListResourceUsageNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, nextLink, options },
      listResourceUsageNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginGroupListResult
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginGroup
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
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    201: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    202: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    204: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.originGroup,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    201: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    202: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    204: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.originGroupUpdateProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
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
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listResourceUsageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/usages",
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
    Parameters.profileName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginGroupListResult
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
    Parameters.nextLink,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
