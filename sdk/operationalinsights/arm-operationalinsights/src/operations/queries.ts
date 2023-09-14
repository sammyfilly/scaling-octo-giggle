/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Queries } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClient } from "../operationalInsightsManagementClient";
import {
  LogAnalyticsQueryPackQuery,
  QueriesListNextOptionalParams,
  QueriesListOptionalParams,
  QueriesListResponse,
  LogAnalyticsQueryPackQuerySearchProperties,
  QueriesSearchNextOptionalParams,
  QueriesSearchOptionalParams,
  QueriesSearchResponse,
  QueriesGetOptionalParams,
  QueriesGetResponse,
  QueriesPutOptionalParams,
  QueriesPutResponse,
  QueriesUpdateOptionalParams,
  QueriesUpdateResponse,
  QueriesDeleteOptionalParams,
  QueriesListNextResponse,
  QueriesSearchNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Queries operations. */
export class QueriesImpl implements Queries {
  private readonly client: OperationalInsightsManagementClient;

  /**
   * Initialize a new instance of the class Queries class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of Queries defined within a Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    queryPackName: string,
    options?: QueriesListOptionalParams
  ): PagedAsyncIterableIterator<LogAnalyticsQueryPackQuery> {
    const iter = this.listPagingAll(resourceGroupName, queryPackName, options);
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
          queryPackName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    queryPackName: string,
    options?: QueriesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LogAnalyticsQueryPackQuery[]> {
    let result: QueriesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, queryPackName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        queryPackName,
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
    queryPackName: string,
    options?: QueriesListOptionalParams
  ): AsyncIterableIterator<LogAnalyticsQueryPackQuery> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      queryPackName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Search a list of Queries defined within a Log Analytics QueryPack according to given search
   * properties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param querySearchProperties Properties by which to search queries in the given Log Analytics
   *                              QueryPack.
   * @param options The options parameters.
   */
  public listSearch(
    resourceGroupName: string,
    queryPackName: string,
    querySearchProperties: LogAnalyticsQueryPackQuerySearchProperties,
    options?: QueriesSearchOptionalParams
  ): PagedAsyncIterableIterator<LogAnalyticsQueryPackQuery> {
    const iter = this.searchPagingAll(
      resourceGroupName,
      queryPackName,
      querySearchProperties,
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
        return this.searchPagingPage(
          resourceGroupName,
          queryPackName,
          querySearchProperties,
          options,
          settings
        );
      }
    };
  }

  private async *searchPagingPage(
    resourceGroupName: string,
    queryPackName: string,
    querySearchProperties: LogAnalyticsQueryPackQuerySearchProperties,
    options?: QueriesSearchOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LogAnalyticsQueryPackQuery[]> {
    let result: QueriesSearchResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._search(
        resourceGroupName,
        queryPackName,
        querySearchProperties,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._searchNext(
        resourceGroupName,
        queryPackName,
        querySearchProperties,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *searchPagingAll(
    resourceGroupName: string,
    queryPackName: string,
    querySearchProperties: LogAnalyticsQueryPackQuerySearchProperties,
    options?: QueriesSearchOptionalParams
  ): AsyncIterableIterator<LogAnalyticsQueryPackQuery> {
    for await (const page of this.searchPagingPage(
      resourceGroupName,
      queryPackName,
      querySearchProperties,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of Queries defined within a Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    queryPackName: string,
    options?: QueriesListOptionalParams
  ): Promise<QueriesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, options },
      listOperationSpec
    );
  }

  /**
   * Search a list of Queries defined within a Log Analytics QueryPack according to given search
   * properties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param querySearchProperties Properties by which to search queries in the given Log Analytics
   *                              QueryPack.
   * @param options The options parameters.
   */
  private _search(
    resourceGroupName: string,
    queryPackName: string,
    querySearchProperties: LogAnalyticsQueryPackQuerySearchProperties,
    options?: QueriesSearchOptionalParams
  ): Promise<QueriesSearchResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, querySearchProperties, options },
      searchOperationSpec
    );
  }

  /**
   * Gets a specific Log Analytics Query defined within a Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param id The id of a specific query defined in the Log Analytics QueryPack
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    queryPackName: string,
    id: string,
    options?: QueriesGetOptionalParams
  ): Promise<QueriesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, id, options },
      getOperationSpec
    );
  }

  /**
   * Adds or Updates a specific Query within a Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param id The id of a specific query defined in the Log Analytics QueryPack
   * @param queryPayload Properties that need to be specified to create a new query and add it to a Log
   *                     Analytics QueryPack.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    queryPackName: string,
    id: string,
    queryPayload: LogAnalyticsQueryPackQuery,
    options?: QueriesPutOptionalParams
  ): Promise<QueriesPutResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, id, queryPayload, options },
      putOperationSpec
    );
  }

  /**
   * Adds or Updates a specific Query within a Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param id The id of a specific query defined in the Log Analytics QueryPack
   * @param queryPayload Properties that need to be specified to create a new query and add it to a Log
   *                     Analytics QueryPack.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    queryPackName: string,
    id: string,
    queryPayload: LogAnalyticsQueryPackQuery,
    options?: QueriesUpdateOptionalParams
  ): Promise<QueriesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, id, queryPayload, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes a specific Query defined within an Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param id The id of a specific query defined in the Log Analytics QueryPack
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    queryPackName: string,
    id: string,
    options?: QueriesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, id, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    queryPackName: string,
    nextLink: string,
    options?: QueriesListNextOptionalParams
  ): Promise<QueriesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * SearchNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param querySearchProperties Properties by which to search queries in the given Log Analytics
   *                              QueryPack.
   * @param nextLink The nextLink from the previous successful call to the Search method.
   * @param options The options parameters.
   */
  private _searchNext(
    resourceGroupName: string,
    queryPackName: string,
    querySearchProperties: LogAnalyticsQueryPackQuerySearchProperties,
    nextLink: string,
    options?: QueriesSearchNextOptionalParams
  ): Promise<QueriesSearchNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        queryPackName,
        querySearchProperties,
        nextLink,
        options
      },
      searchNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackQueryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.includeBody,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const searchOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/search",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackQueryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.querySearchProperties,
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.includeBody,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackQuery
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
    Parameters.queryPackName,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const putOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackQuery
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.queryPayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName,
    Parameters.id
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackQuery
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.queryPayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName,
    Parameters.id
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
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
    Parameters.queryPackName,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackQueryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const searchNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackQueryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
