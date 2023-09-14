/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/providerOperationsMetadataOperationsMappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClientContext } from "../authorizationManagementClientContext";

/** Class representing a ProviderOperationsMetadataOperations. */
export class ProviderOperationsMetadataOperations {
  private readonly client: AuthorizationManagementClientContext;

  /**
   * Create a ProviderOperationsMetadataOperations.
   * @param {AuthorizationManagementClientContext} client Reference to the service client.
   */
  constructor(client: AuthorizationManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets provider operations metadata for the specified resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param apiVersion The API version to use for the operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderOperationsMetadataGetResponse>
   */
  get(resourceProviderNamespace: string, apiVersion: string, options?: Models.ProviderOperationsMetadataGetOptionalParams): Promise<Models.ProviderOperationsMetadataGetResponse>;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param apiVersion The API version to use for the operation.
   * @param callback The callback
   */
  get(resourceProviderNamespace: string, apiVersion: string, callback: msRest.ServiceCallback<Models.ProviderOperationsMetadata>): void;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param apiVersion The API version to use for the operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceProviderNamespace: string, apiVersion: string, options: Models.ProviderOperationsMetadataGetOptionalParams, callback: msRest.ServiceCallback<Models.ProviderOperationsMetadata>): void;
  get(resourceProviderNamespace: string, apiVersion: string, options?: Models.ProviderOperationsMetadataGetOptionalParams | msRest.ServiceCallback<Models.ProviderOperationsMetadata>, callback?: msRest.ServiceCallback<Models.ProviderOperationsMetadata>): Promise<Models.ProviderOperationsMetadataGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceProviderNamespace,
        apiVersion,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProviderOperationsMetadataGetResponse>;
  }

  /**
   * Gets provider operations metadata for all resource providers.
   * @param apiVersion The API version to use for this operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderOperationsMetadataListResponse>
   */
  list(apiVersion: string, options?: Models.ProviderOperationsMetadataListOptionalParams): Promise<Models.ProviderOperationsMetadataListResponse>;
  /**
   * @param apiVersion The API version to use for this operation.
   * @param callback The callback
   */
  list(apiVersion: string, callback: msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>): void;
  /**
   * @param apiVersion The API version to use for this operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(apiVersion: string, options: Models.ProviderOperationsMetadataListOptionalParams, callback: msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>): void;
  list(apiVersion: string, options?: Models.ProviderOperationsMetadataListOptionalParams | msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>, callback?: msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>): Promise<Models.ProviderOperationsMetadataListResponse> {
    return this.client.sendOperationRequest(
      {
        apiVersion,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ProviderOperationsMetadataListResponse>;
  }

  /**
   * Gets provider operations metadata for all resource providers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderOperationsMetadataListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderOperationsMetadataListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>, callback?: msRest.ServiceCallback<Models.ProviderOperationsMetadataListResult>): Promise<Models.ProviderOperationsMetadataListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ProviderOperationsMetadataListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/providerOperations/{resourceProviderNamespace}",
  urlParameters: [
    Parameters.resourceProviderNamespace
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProviderOperationsMetadata
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/providerOperations",
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProviderOperationsMetadataListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProviderOperationsMetadataListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
