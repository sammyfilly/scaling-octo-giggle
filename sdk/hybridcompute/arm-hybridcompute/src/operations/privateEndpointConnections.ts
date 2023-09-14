/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateEndpointConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClient } from "../hybridComputeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByPrivateLinkScopeNextOptionalParams,
  PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsListByPrivateLinkScopeResponse,
  PrivateEndpointConnectionsListByPrivateLinkScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: HybridComputeManagementClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: HybridComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets all private endpoint connections on a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  public listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
    const iter = this.listByPrivateLinkScopePagingAll(
      resourceGroupName,
      scopeName,
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
        return this.listByPrivateLinkScopePagingPage(
          resourceGroupName,
          scopeName,
          options
        );
      }
    };
  }

  private async *listByPrivateLinkScopePagingPage(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result = await this._listByPrivateLinkScope(
      resourceGroupName,
      scopeName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByPrivateLinkScopeNext(
        resourceGroupName,
        scopeName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByPrivateLinkScopePagingAll(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listByPrivateLinkScopePagingPage(
      resourceGroupName,
      scopeName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a private endpoint connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, privateEndpointConnectionName, options },
      getOperationSpec
    );
  }

  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>,
      PrivateEndpointConnectionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> => {
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
        scopeName,
        privateEndpointConnectionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      scopeName,
      privateEndpointConnectionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
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
      { resourceGroupName, scopeName, privateEndpointConnectionName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    scopeName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      scopeName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all private endpoint connections on a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  private _listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: PrivateEndpointConnectionsListByPrivateLinkScopeOptionalParams
  ): Promise<PrivateEndpointConnectionsListByPrivateLinkScopeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, options },
      listByPrivateLinkScopeOperationSpec
    );
  }

  /**
   * ListByPrivateLinkScopeNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param nextLink The nextLink from the previous successful call to the ListByPrivateLinkScope method.
   * @param options The options parameters.
   */
  private _listByPrivateLinkScopeNext(
    resourceGroupName: string,
    scopeName: string,
    nextLink: string,
    options?: PrivateEndpointConnectionsListByPrivateLinkScopeNextOptionalParams
  ): Promise<PrivateEndpointConnectionsListByPrivateLinkScopeNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, nextLink, options },
      listByPrivateLinkScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
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
    Parameters.scopeName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
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
    Parameters.scopeName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByPrivateLinkScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
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
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByPrivateLinkScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
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
    Parameters.nextLink,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
