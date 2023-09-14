/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationResults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthcareApisManagementClient } from "../healthcareApisManagementClient";
import {
  OperationResultsGetOptionalParams,
  OperationResultsGetResponse
} from "../models";

/** Class containing OperationResults operations. */
export class OperationResultsImpl implements OperationResults {
  private readonly client: HealthcareApisManagementClient;

  /**
   * Initialize a new instance of the class OperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: HealthcareApisManagementClient) {
    this.client = client;
  }

  /**
   * Get the operation result for a long running operation.
   * @param locationName The location of the operation.
   * @param operationResultId The ID of the operation result to get.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    operationResultId: string,
    options?: OperationResultsGetOptionalParams
  ): Promise<OperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, operationResultId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/locations/{locationName}/operationresults/{operationResultId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResultsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.operationResultId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
