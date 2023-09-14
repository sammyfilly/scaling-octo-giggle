/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LoadTests } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LoadTestClient } from "../loadTestClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LoadTestResource,
  LoadTestsListBySubscriptionNextOptionalParams,
  LoadTestsListBySubscriptionOptionalParams,
  LoadTestsListByResourceGroupNextOptionalParams,
  LoadTestsListByResourceGroupOptionalParams,
  LoadTestsListBySubscriptionResponse,
  LoadTestsListByResourceGroupResponse,
  LoadTestsGetOptionalParams,
  LoadTestsGetResponse,
  LoadTestsCreateOrUpdateOptionalParams,
  LoadTestsCreateOrUpdateResponse,
  LoadTestResourcePatchRequestBody,
  LoadTestsUpdateOptionalParams,
  LoadTestsUpdateResponse,
  LoadTestsDeleteOptionalParams,
  LoadTestsListBySubscriptionNextResponse,
  LoadTestsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LoadTests operations. */
export class LoadTestsImpl implements LoadTests {
  private readonly client: LoadTestClient;

  /**
   * Initialize a new instance of the class LoadTests class.
   * @param client Reference to the service client
   */
  constructor(client: LoadTestClient) {
    this.client = client;
  }

  /**
   * Lists loadtests resources in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: LoadTestsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<LoadTestResource> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: LoadTestsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<LoadTestResource[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: LoadTestsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<LoadTestResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists loadtest resources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: LoadTestsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<LoadTestResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: LoadTestsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<LoadTestResource[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: LoadTestsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<LoadTestResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists loadtests resources in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: LoadTestsListBySubscriptionOptionalParams
  ): Promise<LoadTestsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists loadtest resources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: LoadTestsListByResourceGroupOptionalParams
  ): Promise<LoadTestsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get a LoadTest resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsGetOptionalParams
  ): Promise<LoadTestsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadTestName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update LoadTest resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name.
   * @param loadTestResource LoadTest resource data
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    loadTestName: string,
    loadTestResource: LoadTestResource,
    options?: LoadTestsCreateOrUpdateOptionalParams
  ): Promise<LoadTestsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadTestName, loadTestResource, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update a loadtest resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name.
   * @param loadTestResourcePatchRequestBody LoadTest resource update data
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    loadTestName: string,
    loadTestResourcePatchRequestBody: LoadTestResourcePatchRequestBody,
    options?: LoadTestsUpdateOptionalParams
  ): Promise<LoadTestsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadTestName,
        loadTestResourcePatchRequestBody,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Delete a LoadTest resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsDeleteOptionalParams
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
      { resourceGroupName, loadTestName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete a LoadTest resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      loadTestName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: LoadTestsListBySubscriptionNextOptionalParams
  ): Promise<LoadTestsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: LoadTestsListByResourceGroupNextOptionalParams
  ): Promise<LoadTestsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/loadTests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResourcePageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResourcePageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.loadTestName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.loadTestResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.loadTestName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.loadTestResourcePatchRequestBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.loadTestName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.loadTestName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResourcePageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResourcePageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
