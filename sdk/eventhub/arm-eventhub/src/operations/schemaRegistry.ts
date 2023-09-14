/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SchemaRegistry } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventHubManagementClient } from "../eventHubManagementClient";
import {
  SchemaGroup,
  SchemaRegistryListByNamespaceNextOptionalParams,
  SchemaRegistryListByNamespaceOptionalParams,
  SchemaRegistryListByNamespaceResponse,
  SchemaRegistryCreateOrUpdateOptionalParams,
  SchemaRegistryCreateOrUpdateResponse,
  SchemaRegistryDeleteOptionalParams,
  SchemaRegistryGetOptionalParams,
  SchemaRegistryGetResponse,
  SchemaRegistryListByNamespaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SchemaRegistry operations. */
export class SchemaRegistryImpl implements SchemaRegistry {
  private readonly client: EventHubManagementClient;

  /**
   * Initialize a new instance of the class SchemaRegistry class.
   * @param client Reference to the service client
   */
  constructor(client: EventHubManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the Schema Groups in a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  public listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams
  ): PagedAsyncIterableIterator<SchemaGroup> {
    const iter = this.listByNamespacePagingAll(
      resourceGroupName,
      namespaceName,
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
        return this.listByNamespacePagingPage(
          resourceGroupName,
          namespaceName,
          options
        );
      }
    };
  }

  private async *listByNamespacePagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams
  ): AsyncIterableIterator<SchemaGroup[]> {
    let result = await this._listByNamespace(
      resourceGroupName,
      namespaceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByNamespaceNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByNamespacePagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams
  ): AsyncIterableIterator<SchemaGroup> {
    for await (const page of this.listByNamespacePagingPage(
      resourceGroupName,
      namespaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the Schema Groups in a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  private _listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: SchemaRegistryListByNamespaceOptionalParams
  ): Promise<SchemaRegistryListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listByNamespaceOperationSpec
    );
  }

  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param schemaGroupName The Schema Group name
   * @param parameters Parameters supplied to create an Event Hub resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    schemaGroupName: string,
    parameters: SchemaGroup,
    options?: SchemaRegistryCreateOrUpdateOptionalParams
  ): Promise<SchemaRegistryCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        schemaGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param schemaGroupName The Schema Group name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    schemaGroupName: string,
    options?: SchemaRegistryDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, schemaGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param schemaGroupName The Schema Group name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    schemaGroupName: string,
    options?: SchemaRegistryGetOptionalParams
  ): Promise<SchemaRegistryGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, schemaGroupName, options },
      getOperationSpec
    );
  }

  /**
   * ListByNamespaceNext
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param nextLink The nextLink from the previous successful call to the ListByNamespace method.
   * @param options The options parameters.
   */
  private _listByNamespaceNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: SchemaRegistryListByNamespaceNextOptionalParams
  ): Promise<SchemaRegistryListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listByNamespaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNamespaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.schemaGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.namespaceName,
    Parameters.schemaGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroup
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
    Parameters.namespaceName,
    Parameters.schemaGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByNamespaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.namespaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
