/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Provider } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClient } from "../webSiteManagementClient";
import {
  ApplicationStack,
  ProviderGetAvailableStacksNextOptionalParams,
  ProviderGetAvailableStacksOptionalParams,
  CsmOperationDescription,
  ProviderListOperationsNextOptionalParams,
  ProviderListOperationsOptionalParams,
  ProviderGetAvailableStacksOnPremNextOptionalParams,
  ProviderGetAvailableStacksOnPremOptionalParams,
  ProviderGetAvailableStacksResponse,
  ProviderListOperationsResponse,
  ProviderGetAvailableStacksOnPremResponse,
  ProviderGetAvailableStacksNextResponse,
  ProviderListOperationsNextResponse,
  ProviderGetAvailableStacksOnPremNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Provider operations. */
export class ProviderImpl implements Provider {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class Provider class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Get available application frameworks and their versions
   * @param options The options parameters.
   */
  public listAvailableStacks(
    options?: ProviderGetAvailableStacksOptionalParams
  ): PagedAsyncIterableIterator<ApplicationStack> {
    const iter = this.getAvailableStacksPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getAvailableStacksPagingPage(options);
      }
    };
  }

  private async *getAvailableStacksPagingPage(
    options?: ProviderGetAvailableStacksOptionalParams
  ): AsyncIterableIterator<ApplicationStack[]> {
    let result = await this._getAvailableStacks(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getAvailableStacksNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getAvailableStacksPagingAll(
    options?: ProviderGetAvailableStacksOptionalParams
  ): AsyncIterableIterator<ApplicationStack> {
    for await (const page of this.getAvailableStacksPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric
   * definitions
   * @param options The options parameters.
   */
  public listOperations(
    options?: ProviderListOperationsOptionalParams
  ): PagedAsyncIterableIterator<CsmOperationDescription> {
    const iter = this.listOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsPagingPage(options);
      }
    };
  }

  private async *listOperationsPagingPage(
    options?: ProviderListOperationsOptionalParams
  ): AsyncIterableIterator<CsmOperationDescription[]> {
    let result = await this._listOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOperationsPagingAll(
    options?: ProviderListOperationsOptionalParams
  ): AsyncIterableIterator<CsmOperationDescription> {
    for await (const page of this.listOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get available application frameworks and their versions
   * @param options The options parameters.
   */
  public listAvailableStacksOnPrem(
    options?: ProviderGetAvailableStacksOnPremOptionalParams
  ): PagedAsyncIterableIterator<ApplicationStack> {
    const iter = this.getAvailableStacksOnPremPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getAvailableStacksOnPremPagingPage(options);
      }
    };
  }

  private async *getAvailableStacksOnPremPagingPage(
    options?: ProviderGetAvailableStacksOnPremOptionalParams
  ): AsyncIterableIterator<ApplicationStack[]> {
    let result = await this._getAvailableStacksOnPrem(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getAvailableStacksOnPremNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getAvailableStacksOnPremPagingAll(
    options?: ProviderGetAvailableStacksOnPremOptionalParams
  ): AsyncIterableIterator<ApplicationStack> {
    for await (const page of this.getAvailableStacksOnPremPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get available application frameworks and their versions
   * @param options The options parameters.
   */
  private _getAvailableStacks(
    options?: ProviderGetAvailableStacksOptionalParams
  ): Promise<ProviderGetAvailableStacksResponse> {
    return this.client.sendOperationRequest(
      { options },
      getAvailableStacksOperationSpec
    );
  }

  /**
   * Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric
   * definitions
   * @param options The options parameters.
   */
  private _listOperations(
    options?: ProviderListOperationsOptionalParams
  ): Promise<ProviderListOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listOperationsOperationSpec
    );
  }

  /**
   * Get available application frameworks and their versions
   * @param options The options parameters.
   */
  private _getAvailableStacksOnPrem(
    options?: ProviderGetAvailableStacksOnPremOptionalParams
  ): Promise<ProviderGetAvailableStacksOnPremResponse> {
    return this.client.sendOperationRequest(
      { options },
      getAvailableStacksOnPremOperationSpec
    );
  }

  /**
   * GetAvailableStacksNext
   * @param nextLink The nextLink from the previous successful call to the GetAvailableStacks method.
   * @param options The options parameters.
   */
  private _getAvailableStacksNext(
    nextLink: string,
    options?: ProviderGetAvailableStacksNextOptionalParams
  ): Promise<ProviderGetAvailableStacksNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getAvailableStacksNextOperationSpec
    );
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  private _listOperationsNext(
    nextLink: string,
    options?: ProviderListOperationsNextOptionalParams
  ): Promise<ProviderListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listOperationsNextOperationSpec
    );
  }

  /**
   * GetAvailableStacksOnPremNext
   * @param nextLink The nextLink from the previous successful call to the GetAvailableStacksOnPrem
   *                 method.
   * @param options The options parameters.
   */
  private _getAvailableStacksOnPremNext(
    nextLink: string,
    options?: ProviderGetAvailableStacksOnPremNextOptionalParams
  ): Promise<ProviderGetAvailableStacksOnPremNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getAvailableStacksOnPremNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAvailableStacksOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Web/availableStacks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.osTypeSelected],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Web/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getAvailableStacksOnPremOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/availableStacks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.osTypeSelected1],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getAvailableStacksNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.osTypeSelected],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getAvailableStacksOnPremNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.osTypeSelected1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
