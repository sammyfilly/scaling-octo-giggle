/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Subscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SubscriptionClient } from "../subscriptionClient";
import {
  Location,
  SubscriptionsListLocationsOptionalParams,
  Subscription,
  SubscriptionsListNextOptionalParams,
  SubscriptionsListOptionalParams,
  SubscriptionsListLocationsResponse,
  SubscriptionsGetOptionalParams,
  SubscriptionsGetResponse,
  SubscriptionsListResponse,
  SubscriptionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Subscriptions operations. */
export class SubscriptionsImpl implements Subscriptions {
  private readonly client: SubscriptionClient;

  /**
   * Initialize a new instance of the class Subscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: SubscriptionClient) {
    this.client = client;
  }

  /**
   * This operation provides all the locations that are available for resource providers; however, each
   * resource provider may support a subset of this list.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  public listLocations(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams
  ): PagedAsyncIterableIterator<Location> {
    const iter = this.listLocationsPagingAll(subscriptionId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listLocationsPagingPage(subscriptionId, options);
      }
    };
  }

  private async *listLocationsPagingPage(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams
  ): AsyncIterableIterator<Location[]> {
    let result = await this._listLocations(subscriptionId, options);
    yield result.value || [];
  }

  private async *listLocationsPagingAll(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams
  ): AsyncIterableIterator<Location> {
    for await (const page of this.listLocationsPagingPage(
      subscriptionId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all subscriptions for a tenant.
   * @param options The options parameters.
   */
  public list(
    options?: SubscriptionsListOptionalParams
  ): PagedAsyncIterableIterator<Subscription> {
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
    options?: SubscriptionsListOptionalParams
  ): AsyncIterableIterator<Subscription[]> {
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
    options?: SubscriptionsListOptionalParams
  ): AsyncIterableIterator<Subscription> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation provides all the locations that are available for resource providers; however, each
   * resource provider may support a subset of this list.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  private _listLocations(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams
  ): Promise<SubscriptionsListLocationsResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, options },
      listLocationsOperationSpec
    );
  }

  /**
   * Gets details about a specified subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  get(
    subscriptionId: string,
    options?: SubscriptionsGetOptionalParams
  ): Promise<SubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, options },
      getOperationSpec
    );
  }

  /**
   * Gets all subscriptions for a tenant.
   * @param options The options parameters.
   */
  private _list(
    options?: SubscriptionsListOptionalParams
  ): Promise<SubscriptionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SubscriptionsListNextOptionalParams
  ): Promise<SubscriptionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listLocationsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/locations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.includeExtendedLocations],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Subscription
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
