/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SubscriptionFeatureRegistrations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { FeatureClient } from "../featureClient";
import {
  SubscriptionFeatureRegistration,
  SubscriptionFeatureRegistrationsListBySubscriptionNextOptionalParams,
  SubscriptionFeatureRegistrationsListBySubscriptionOptionalParams,
  SubscriptionFeatureRegistrationsListAllBySubscriptionNextOptionalParams,
  SubscriptionFeatureRegistrationsListAllBySubscriptionOptionalParams,
  SubscriptionFeatureRegistrationsGetOptionalParams,
  SubscriptionFeatureRegistrationsGetResponse,
  SubscriptionFeatureRegistrationsCreateOrUpdateOptionalParams,
  SubscriptionFeatureRegistrationsCreateOrUpdateResponse,
  SubscriptionFeatureRegistrationsDeleteOptionalParams,
  SubscriptionFeatureRegistrationsListBySubscriptionResponse,
  SubscriptionFeatureRegistrationsListAllBySubscriptionResponse,
  SubscriptionFeatureRegistrationsListBySubscriptionNextResponse,
  SubscriptionFeatureRegistrationsListAllBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SubscriptionFeatureRegistrations operations. */
export class SubscriptionFeatureRegistrationsImpl
  implements SubscriptionFeatureRegistrations {
  private readonly client: FeatureClient;

  /**
   * Initialize a new instance of the class SubscriptionFeatureRegistrations class.
   * @param client Reference to the service client
   */
  constructor(client: FeatureClient) {
    this.client = client;
  }

  /**
   * Returns subscription feature registrations for given subscription and provider namespace.
   * @param providerNamespace The provider namespace.
   * @param options The options parameters.
   */
  public listBySubscription(
    providerNamespace: string,
    options?: SubscriptionFeatureRegistrationsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SubscriptionFeatureRegistration> {
    const iter = this.listBySubscriptionPagingAll(providerNamespace, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(providerNamespace, options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    providerNamespace: string,
    options?: SubscriptionFeatureRegistrationsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SubscriptionFeatureRegistration[]> {
    let result = await this._listBySubscription(providerNamespace, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(
        providerNamespace,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    providerNamespace: string,
    options?: SubscriptionFeatureRegistrationsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SubscriptionFeatureRegistration> {
    for await (const page of this.listBySubscriptionPagingPage(
      providerNamespace,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns subscription feature registrations for given subscription.
   * @param options The options parameters.
   */
  public listAllBySubscription(
    options?: SubscriptionFeatureRegistrationsListAllBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SubscriptionFeatureRegistration> {
    const iter = this.listAllBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listAllBySubscriptionPagingPage(
    options?: SubscriptionFeatureRegistrationsListAllBySubscriptionOptionalParams
  ): AsyncIterableIterator<SubscriptionFeatureRegistration[]> {
    let result = await this._listAllBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllBySubscriptionNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllBySubscriptionPagingAll(
    options?: SubscriptionFeatureRegistrationsListAllBySubscriptionOptionalParams
  ): AsyncIterableIterator<SubscriptionFeatureRegistration> {
    for await (const page of this.listAllBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns a feature registration
   * @param providerNamespace The provider namespace.
   * @param featureName The feature name.
   * @param options The options parameters.
   */
  get(
    providerNamespace: string,
    featureName: string,
    options?: SubscriptionFeatureRegistrationsGetOptionalParams
  ): Promise<SubscriptionFeatureRegistrationsGetResponse> {
    return this.client.sendOperationRequest(
      { providerNamespace, featureName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a feature registration.
   * @param providerNamespace The provider namespace.
   * @param featureName The feature name.
   * @param options The options parameters.
   */
  createOrUpdate(
    providerNamespace: string,
    featureName: string,
    options?: SubscriptionFeatureRegistrationsCreateOrUpdateOptionalParams
  ): Promise<SubscriptionFeatureRegistrationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { providerNamespace, featureName, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a feature registration
   * @param providerNamespace The provider namespace.
   * @param featureName The feature name.
   * @param options The options parameters.
   */
  delete(
    providerNamespace: string,
    featureName: string,
    options?: SubscriptionFeatureRegistrationsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { providerNamespace, featureName, options },
      deleteOperationSpec
    );
  }

  /**
   * Returns subscription feature registrations for given subscription and provider namespace.
   * @param providerNamespace The provider namespace.
   * @param options The options parameters.
   */
  private _listBySubscription(
    providerNamespace: string,
    options?: SubscriptionFeatureRegistrationsListBySubscriptionOptionalParams
  ): Promise<SubscriptionFeatureRegistrationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { providerNamespace, options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Returns subscription feature registrations for given subscription.
   * @param options The options parameters.
   */
  private _listAllBySubscription(
    options?: SubscriptionFeatureRegistrationsListAllBySubscriptionOptionalParams
  ): Promise<SubscriptionFeatureRegistrationsListAllBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAllBySubscriptionOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param providerNamespace The provider namespace.
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    providerNamespace: string,
    nextLink: string,
    options?: SubscriptionFeatureRegistrationsListBySubscriptionNextOptionalParams
  ): Promise<SubscriptionFeatureRegistrationsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { providerNamespace, nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListAllBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListAllBySubscription method.
   * @param options The options parameters.
   */
  private _listAllBySubscriptionNext(
    nextLink: string,
    options?: SubscriptionFeatureRegistrationsListAllBySubscriptionNextOptionalParams
  ): Promise<
    SubscriptionFeatureRegistrationsListAllBySubscriptionNextResponse
  > {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/featureProviders/{providerNamespace}/subscriptionFeatureRegistrations/{featureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionFeatureRegistration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.featureName,
    Parameters.providerNamespace
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/featureProviders/{providerNamespace}/subscriptionFeatureRegistrations/{featureName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionFeatureRegistration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.subscriptionFeatureRegistrationType,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.featureName,
    Parameters.providerNamespace
  ],
  headerParameters: [Parameters.accept1, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/featureProviders/{providerNamespace}/subscriptionFeatureRegistrations/{featureName}",
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
    Parameters.featureName,
    Parameters.providerNamespace
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/featureProviders/{providerNamespace}/subscriptionFeatureRegistrations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionFeatureRegistrationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.providerNamespace
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listAllBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/subscriptionFeatureRegistrations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionFeatureRegistrationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept1],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionFeatureRegistrationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.providerNamespace
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listAllBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionFeatureRegistrationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
