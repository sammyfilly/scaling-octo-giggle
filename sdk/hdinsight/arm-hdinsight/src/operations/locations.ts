/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Locations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClient } from "../hDInsightManagementClient";
import {
  LocationsGetCapabilitiesOptionalParams,
  LocationsGetCapabilitiesResponse,
  LocationsListUsagesOptionalParams,
  LocationsListUsagesResponse,
  LocationsListBillingSpecsOptionalParams,
  LocationsListBillingSpecsResponse,
  LocationsGetAzureAsyncOperationStatusOptionalParams,
  LocationsGetAzureAsyncOperationStatusResponse,
  NameAvailabilityCheckRequestParameters,
  LocationsCheckNameAvailabilityOptionalParams,
  LocationsCheckNameAvailabilityResponse,
  ClusterCreateRequestValidationParameters,
  LocationsValidateClusterCreateRequestOptionalParams,
  LocationsValidateClusterCreateRequestResponse
} from "../models";

/** Class containing Locations operations. */
export class LocationsImpl implements Locations {
  private readonly client: HDInsightManagementClient;

  /**
   * Initialize a new instance of the class Locations class.
   * @param client Reference to the service client
   */
  constructor(client: HDInsightManagementClient) {
    this.client = client;
  }

  /**
   * Gets the capabilities for the specified location.
   * @param location The Azure location (region) for which to make the request.
   * @param options The options parameters.
   */
  getCapabilities(
    location: string,
    options?: LocationsGetCapabilitiesOptionalParams
  ): Promise<LocationsGetCapabilitiesResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      getCapabilitiesOperationSpec
    );
  }

  /**
   * Lists the usages for the specified location.
   * @param location The Azure location (region) for which to make the request.
   * @param options The options parameters.
   */
  listUsages(
    location: string,
    options?: LocationsListUsagesOptionalParams
  ): Promise<LocationsListUsagesResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listUsagesOperationSpec
    );
  }

  /**
   * Lists the billingSpecs for the specified subscription and location.
   * @param location The Azure location (region) for which to make the request.
   * @param options The options parameters.
   */
  listBillingSpecs(
    location: string,
    options?: LocationsListBillingSpecsOptionalParams
  ): Promise<LocationsListBillingSpecsResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listBillingSpecsOperationSpec
    );
  }

  /**
   * Get the async operation status.
   * @param location The Azure location (region) for which to make the request.
   * @param operationId The long running operation id.
   * @param options The options parameters.
   */
  getAzureAsyncOperationStatus(
    location: string,
    operationId: string,
    options?: LocationsGetAzureAsyncOperationStatusOptionalParams
  ): Promise<LocationsGetAzureAsyncOperationStatusResponse> {
    return this.client.sendOperationRequest(
      { location, operationId, options },
      getAzureAsyncOperationStatusOperationSpec
    );
  }

  /**
   * Check the cluster name is available or not.
   * @param location The Azure location (region) for which to make the request.
   * @param parameters The request spec of checking name availability.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    parameters: NameAvailabilityCheckRequestParameters,
    options?: LocationsCheckNameAvailabilityOptionalParams
  ): Promise<LocationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, parameters, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Validate the cluster create request spec is valid or not.
   * @param location The Azure location (region) for which to make the request.
   * @param parameters The cluster create request specification.
   * @param options The options parameters.
   */
  validateClusterCreateRequest(
    location: string,
    parameters: ClusterCreateRequestValidationParameters,
    options?: LocationsValidateClusterCreateRequestOptionalParams
  ): Promise<LocationsValidateClusterCreateRequestResponse> {
    return this.client.sendOperationRequest(
      { location, parameters, options },
      validateClusterCreateRequestOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getCapabilitiesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/capabilities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapabilitiesResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUsagesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBillingSpecsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/billingSpecs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingResponseListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAzureAsyncOperationStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/azureasyncoperations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.operationId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityCheckResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const validateClusterCreateRequestOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/validateCreateRequest",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterCreateValidationResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
