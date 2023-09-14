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
import { HDInsightManagementClient } from "../hDInsightManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByClusterNextOptionalParams,
  PrivateEndpointConnectionsListByClusterOptionalParams,
  PrivateEndpointConnectionsListByClusterResponse,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsListByClusterNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: HDInsightManagementClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: HDInsightManagementClient) {
    this.client = client;
  }

  /**
   * Lists the private endpoint connections for a HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointConnectionsListByClusterOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
    const iter = this.listByClusterPagingAll(
      resourceGroupName,
      clusterName,
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
        return this.listByClusterPagingPage(
          resourceGroupName,
          clusterName,
          options
        );
      }
    };
  }

  private async *listByClusterPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointConnectionsListByClusterOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result = await this._listByCluster(
      resourceGroupName,
      clusterName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByClusterNext(
        resourceGroupName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByClusterPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointConnectionsListByClusterOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listByClusterPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the private endpoint connections for a HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointConnectionsListByClusterOptionalParams
  ): Promise<PrivateEndpointConnectionsListByClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listByClusterOperationSpec
    );
  }

  /**
   * Approve or reject a private endpoint connection manually.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters The private endpoint connection create or update request.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
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
        clusterName,
        privateEndpointConnectionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
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
   * Approve or reject a private endpoint connection manually.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters The private endpoint connection create or update request.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      privateEndpointConnectionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the specific private endpoint connection.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Deletes the specific private endpoint connection.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
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
      {
        resourceGroupName,
        clusterName,
        privateEndpointConnectionName,
        options
      },
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
   * Deletes the specific private endpoint connection.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByClusterNext
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByCluster method.
   * @param options The options parameters.
   */
  private _listByClusterNext(
    resourceGroupName: string,
    clusterName: string,
    nextLink: string,
    options?: PrivateEndpointConnectionsListByClusterNextOptionalParams
  ): Promise<PrivateEndpointConnectionsListByClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, nextLink, options },
      listByClusterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByClusterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections",
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
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
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
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
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
    Parameters.clusterName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
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
    Parameters.clusterName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByClusterNextOperationSpec: coreClient.OperationSpec = {
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
    Parameters.clusterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
