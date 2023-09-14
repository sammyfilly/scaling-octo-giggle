/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GraphResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  GraphResourceGetResults,
  GraphResourcesListGraphsOptionalParams,
  GraphResourcesListGraphsResponse,
  GraphResourcesGetGraphOptionalParams,
  GraphResourcesGetGraphResponse,
  GraphResourceCreateUpdateParameters,
  GraphResourcesCreateUpdateGraphOptionalParams,
  GraphResourcesCreateUpdateGraphResponse,
  GraphResourcesDeleteGraphResourceOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GraphResources operations. */
export class GraphResourcesImpl implements GraphResources {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class GraphResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Lists the graphs under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listGraphs(
    resourceGroupName: string,
    accountName: string,
    options?: GraphResourcesListGraphsOptionalParams
  ): PagedAsyncIterableIterator<GraphResourceGetResults> {
    const iter = this.listGraphsPagingAll(
      resourceGroupName,
      accountName,
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
        return this.listGraphsPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listGraphsPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: GraphResourcesListGraphsOptionalParams
  ): AsyncIterableIterator<GraphResourceGetResults[]> {
    let result = await this._listGraphs(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
  }

  private async *listGraphsPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: GraphResourcesListGraphsOptionalParams
  ): AsyncIterableIterator<GraphResourceGetResults> {
    for await (const page of this.listGraphsPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the graphs under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listGraphs(
    resourceGroupName: string,
    accountName: string,
    options?: GraphResourcesListGraphsOptionalParams
  ): Promise<GraphResourcesListGraphsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listGraphsOperationSpec
    );
  }

  /**
   * Gets the Graph resource under an existing Azure Cosmos DB database account with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param graphName Cosmos DB graph resource name.
   * @param options The options parameters.
   */
  getGraph(
    resourceGroupName: string,
    accountName: string,
    graphName: string,
    options?: GraphResourcesGetGraphOptionalParams
  ): Promise<GraphResourcesGetGraphResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, graphName, options },
      getGraphOperationSpec
    );
  }

  /**
   * Create or update an Azure Cosmos DB Graph.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param graphName Cosmos DB graph resource name.
   * @param createUpdateGraphParameters The parameters to provide for the current graph.
   * @param options The options parameters.
   */
  async beginCreateUpdateGraph(
    resourceGroupName: string,
    accountName: string,
    graphName: string,
    createUpdateGraphParameters: GraphResourceCreateUpdateParameters,
    options?: GraphResourcesCreateUpdateGraphOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GraphResourcesCreateUpdateGraphResponse>,
      GraphResourcesCreateUpdateGraphResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GraphResourcesCreateUpdateGraphResponse> => {
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
        accountName,
        graphName,
        createUpdateGraphParameters,
        options
      },
      createUpdateGraphOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update an Azure Cosmos DB Graph.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param graphName Cosmos DB graph resource name.
   * @param createUpdateGraphParameters The parameters to provide for the current graph.
   * @param options The options parameters.
   */
  async beginCreateUpdateGraphAndWait(
    resourceGroupName: string,
    accountName: string,
    graphName: string,
    createUpdateGraphParameters: GraphResourceCreateUpdateParameters,
    options?: GraphResourcesCreateUpdateGraphOptionalParams
  ): Promise<GraphResourcesCreateUpdateGraphResponse> {
    const poller = await this.beginCreateUpdateGraph(
      resourceGroupName,
      accountName,
      graphName,
      createUpdateGraphParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Azure Cosmos DB Graph Resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param graphName Cosmos DB graph resource name.
   * @param options The options parameters.
   */
  async beginDeleteGraphResource(
    resourceGroupName: string,
    accountName: string,
    graphName: string,
    options?: GraphResourcesDeleteGraphResourceOptionalParams
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
      { resourceGroupName, accountName, graphName, options },
      deleteGraphResourceOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes an existing Azure Cosmos DB Graph Resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param graphName Cosmos DB graph resource name.
   * @param options The options parameters.
   */
  async beginDeleteGraphResourceAndWait(
    resourceGroupName: string,
    accountName: string,
    graphName: string,
    options?: GraphResourcesDeleteGraphResourceOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteGraphResource(
      resourceGroupName,
      accountName,
      graphName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listGraphsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/graphs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GraphResourcesListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getGraphOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/graphs/{graphName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GraphResourceGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.graphName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createUpdateGraphOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/graphs/{graphName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GraphResourceGetResults
    },
    201: {
      bodyMapper: Mappers.GraphResourceGetResults
    },
    202: {
      bodyMapper: Mappers.GraphResourceGetResults
    },
    204: {
      bodyMapper: Mappers.GraphResourceGetResults
    }
  },
  requestBody: Parameters.createUpdateGraphParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.graphName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteGraphResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/graphs/{graphName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.graphName
  ],
  serializer
};
