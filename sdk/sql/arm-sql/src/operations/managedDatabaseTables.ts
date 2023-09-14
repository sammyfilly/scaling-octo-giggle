/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedDatabaseTables } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DatabaseTable,
  ManagedDatabaseTablesListBySchemaNextOptionalParams,
  ManagedDatabaseTablesListBySchemaOptionalParams,
  ManagedDatabaseTablesListBySchemaResponse,
  ManagedDatabaseTablesGetOptionalParams,
  ManagedDatabaseTablesGetResponse,
  ManagedDatabaseTablesListBySchemaNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedDatabaseTables operations. */
export class ManagedDatabaseTablesImpl implements ManagedDatabaseTables {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabaseTables class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * List managed database tables
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param options The options parameters.
   */
  public listBySchema(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    options?: ManagedDatabaseTablesListBySchemaOptionalParams
  ): PagedAsyncIterableIterator<DatabaseTable> {
    const iter = this.listBySchemaPagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      schemaName,
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
        return this.listBySchemaPagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          schemaName,
          options,
          settings
        );
      }
    };
  }

  private async *listBySchemaPagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    options?: ManagedDatabaseTablesListBySchemaOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DatabaseTable[]> {
    let result: ManagedDatabaseTablesListBySchemaResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySchema(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySchemaNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySchemaPagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    options?: ManagedDatabaseTablesListBySchemaOptionalParams
  ): AsyncIterableIterator<DatabaseTable> {
    for await (const page of this.listBySchemaPagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      schemaName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List managed database tables
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param options The options parameters.
   */
  private _listBySchema(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    options?: ManagedDatabaseTablesListBySchemaOptionalParams
  ): Promise<ManagedDatabaseTablesListBySchemaResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        options
      },
      listBySchemaOperationSpec
    );
  }

  /**
   * Get managed database table
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: ManagedDatabaseTablesGetOptionalParams
  ): Promise<ManagedDatabaseTablesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListBySchemaNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param nextLink The nextLink from the previous successful call to the ListBySchema method.
   * @param options The options parameters.
   */
  private _listBySchemaNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    nextLink: string,
    options?: ManagedDatabaseTablesListBySchemaNextOptionalParams
  ): Promise<ManagedDatabaseTablesListBySchemaNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        nextLink,
        options
      },
      listBySchemaNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySchemaOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseTableListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseTable
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySchemaNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseTableListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.schemaName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
