/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Replicas } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementClient } from "../postgreSQLManagementClient";
import {
  Server,
  ReplicasListByServerOptionalParams,
  ReplicasListByServerResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Replicas operations. */
export class ReplicasImpl implements Replicas {
  private readonly client: PostgreSQLManagementClient;

  /**
   * Initialize a new instance of the class Replicas class.
   * @param client Reference to the service client
   */
  constructor(client: PostgreSQLManagementClient) {
    this.client = client;
  }

  /**
   * List all the replicas for a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ReplicasListByServerOptionalParams
  ): PagedAsyncIterableIterator<Server> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ReplicasListByServerOptionalParams
  ): AsyncIterableIterator<Server[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ReplicasListByServerOptionalParams
  ): AsyncIterableIterator<Server> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the replicas for a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ReplicasListByServerOptionalParams
  ): Promise<ReplicasListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/replicas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
