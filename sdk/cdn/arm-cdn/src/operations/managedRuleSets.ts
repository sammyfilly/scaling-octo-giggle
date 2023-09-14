/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagedRuleSets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import {
  ManagedRuleSetDefinition,
  ManagedRuleSetsListNextOptionalParams,
  ManagedRuleSetsListOptionalParams,
  ManagedRuleSetsListResponse,
  ManagedRuleSetsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedRuleSets operations. */
export class ManagedRuleSetsImpl implements ManagedRuleSets {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class ManagedRuleSets class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all available managed rule sets.
   * @param options The options parameters.
   */
  public list(
    options?: ManagedRuleSetsListOptionalParams
  ): PagedAsyncIterableIterator<ManagedRuleSetDefinition> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ManagedRuleSetsListOptionalParams
  ): AsyncIterableIterator<ManagedRuleSetDefinition[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ManagedRuleSetsListOptionalParams
  ): AsyncIterableIterator<ManagedRuleSetDefinition> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all available managed rule sets.
   * @param options The options parameters.
   */
  private _list(
    options?: ManagedRuleSetsListOptionalParams
  ): Promise<ManagedRuleSetsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ManagedRuleSetsListNextOptionalParams
  ): Promise<ManagedRuleSetsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Cdn/cdnWebApplicationFirewallManagedRuleSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedRuleSetDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedRuleSetDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
