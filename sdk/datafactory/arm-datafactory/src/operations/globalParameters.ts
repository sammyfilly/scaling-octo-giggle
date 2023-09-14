/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GlobalParameters } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClient } from "../dataFactoryManagementClient";
import {
  GlobalParameterResource,
  GlobalParametersListByFactoryNextOptionalParams,
  GlobalParametersListByFactoryOptionalParams,
  GlobalParametersListByFactoryResponse,
  GlobalParametersGetOptionalParams,
  GlobalParametersGetResponse,
  GlobalParametersCreateOrUpdateOptionalParams,
  GlobalParametersCreateOrUpdateResponse,
  GlobalParametersDeleteOptionalParams,
  GlobalParametersListByFactoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GlobalParameters operations. */
export class GlobalParametersImpl implements GlobalParameters {
  private readonly client: DataFactoryManagementClient;

  /**
   * Initialize a new instance of the class GlobalParameters class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryManagementClient) {
    this.client = client;
  }

  /**
   * Lists Global parameters
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: GlobalParametersListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<GlobalParameterResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
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
        return this.listByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          options,
          settings
        );
      }
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: GlobalParametersListByFactoryOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GlobalParameterResource[]> {
    let result: GlobalParametersListByFactoryResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByFactory(
        resourceGroupName,
        factoryName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    options?: GlobalParametersListByFactoryOptionalParams
  ): AsyncIterableIterator<GlobalParameterResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists Global parameters
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: GlobalParametersListByFactoryOptionalParams
  ): Promise<GlobalParametersListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      listByFactoryOperationSpec
    );
  }

  /**
   * Gets a Global parameter
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param globalParameterName The global parameter name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    globalParameterName: string,
    options?: GlobalParametersGetOptionalParams
  ): Promise<GlobalParametersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, globalParameterName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Global parameter
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param globalParameterName The global parameter name.
   * @param defaultParam Global parameter resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    globalParameterName: string,
    defaultParam: GlobalParameterResource,
    options?: GlobalParametersCreateOrUpdateOptionalParams
  ): Promise<GlobalParametersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        globalParameterName,
        defaultParam,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a Global parameter
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param globalParameterName The global parameter name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    globalParameterName: string,
    options?: GlobalParametersDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, globalParameterName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: GlobalParametersListByFactoryNextOptionalParams
  ): Promise<GlobalParametersListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      listByFactoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GlobalParameterListResponse
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
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters/{globalParameterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GlobalParameterResource
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
    Parameters.factoryName,
    Parameters.globalParameterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters/{globalParameterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GlobalParameterResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.defaultParam,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.globalParameterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters/{globalParameterName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.globalParameterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GlobalParameterListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
