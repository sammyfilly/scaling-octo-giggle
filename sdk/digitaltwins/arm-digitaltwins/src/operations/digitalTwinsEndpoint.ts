/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DigitalTwinsEndpoint } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDigitalTwinsManagementClient } from "../azureDigitalTwinsManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DigitalTwinsEndpointResource,
  DigitalTwinsEndpointListNextOptionalParams,
  DigitalTwinsEndpointListOptionalParams,
  DigitalTwinsEndpointListResponse,
  DigitalTwinsEndpointGetOptionalParams,
  DigitalTwinsEndpointGetResponse,
  DigitalTwinsEndpointCreateOrUpdateOptionalParams,
  DigitalTwinsEndpointCreateOrUpdateResponse,
  DigitalTwinsEndpointDeleteOptionalParams,
  DigitalTwinsEndpointDeleteResponse,
  DigitalTwinsEndpointListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DigitalTwinsEndpoint operations. */
export class DigitalTwinsEndpointImpl implements DigitalTwinsEndpoint {
  private readonly client: AzureDigitalTwinsManagementClient;

  /**
   * Initialize a new instance of the class DigitalTwinsEndpoint class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDigitalTwinsManagementClient) {
    this.client = client;
  }

  /**
   * Get DigitalTwinsInstance Endpoints.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsEndpointListOptionalParams
  ): PagedAsyncIterableIterator<DigitalTwinsEndpointResource> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsEndpointListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DigitalTwinsEndpointResource[]> {
    let result: DigitalTwinsEndpointListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, resourceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsEndpointListOptionalParams
  ): AsyncIterableIterator<DigitalTwinsEndpointResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get DigitalTwinsInstance Endpoints.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsEndpointListOptionalParams
  ): Promise<DigitalTwinsEndpointListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get DigitalTwinsInstances Endpoint.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param endpointName Name of Endpoint Resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    endpointName: string,
    options?: DigitalTwinsEndpointGetOptionalParams
  ): Promise<DigitalTwinsEndpointGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, endpointName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update DigitalTwinsInstance endpoint.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param endpointName Name of Endpoint Resource.
   * @param endpointDescription The DigitalTwinsInstance endpoint metadata and security metadata.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    endpointName: string,
    endpointDescription: DigitalTwinsEndpointResource,
    options?: DigitalTwinsEndpointCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsEndpointCreateOrUpdateResponse>,
      DigitalTwinsEndpointCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsEndpointCreateOrUpdateResponse> => {
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
        resourceName,
        endpointName,
        endpointDescription,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update DigitalTwinsInstance endpoint.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param endpointName Name of Endpoint Resource.
   * @param endpointDescription The DigitalTwinsInstance endpoint metadata and security metadata.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    endpointName: string,
    endpointDescription: DigitalTwinsEndpointResource,
    options?: DigitalTwinsEndpointCreateOrUpdateOptionalParams
  ): Promise<DigitalTwinsEndpointCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      endpointName,
      endpointDescription,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a DigitalTwinsInstance endpoint.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param endpointName Name of Endpoint Resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourceName: string,
    endpointName: string,
    options?: DigitalTwinsEndpointDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsEndpointDeleteResponse>,
      DigitalTwinsEndpointDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsEndpointDeleteResponse> => {
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
      { resourceGroupName, resourceName, endpointName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a DigitalTwinsInstance endpoint.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param endpointName Name of Endpoint Resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    endpointName: string,
    options?: DigitalTwinsEndpointDeleteOptionalParams
  ): Promise<DigitalTwinsEndpointDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourceName,
      endpointName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: DigitalTwinsEndpointListNextOptionalParams
  ): Promise<DigitalTwinsEndpointListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsEndpointResourceListResult
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
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
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
    Parameters.resourceName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.endpointDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsEndpointResource
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
    Parameters.resourceName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsEndpointResourceListResult
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
    Parameters.resourceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
