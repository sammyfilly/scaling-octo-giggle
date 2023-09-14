/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GeographicHierarchies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { TrafficManagerManagementClient } from "../trafficManagerManagementClient";
import {
  GeographicHierarchiesGetDefaultOptionalParams,
  GeographicHierarchiesGetDefaultResponse
} from "../models";

/** Class containing GeographicHierarchies operations. */
export class GeographicHierarchiesImpl implements GeographicHierarchies {
  private readonly client: TrafficManagerManagementClient;

  /**
   * Initialize a new instance of the class GeographicHierarchies class.
   * @param client Reference to the service client
   */
  constructor(client: TrafficManagerManagementClient) {
    this.client = client;
  }

  /**
   * Gets the default Geographic Hierarchy used by the Geographic traffic routing method.
   * @param options The options parameters.
   */
  getDefault(
    options?: GeographicHierarchiesGetDefaultOptionalParams
  ): Promise<GeographicHierarchiesGetDefaultResponse> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getDefaultOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Network/trafficManagerGeographicHierarchies/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TrafficManagerGeographicHierarchy
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
