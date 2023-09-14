/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Costs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import {
  CostsGetOptionalParams,
  CostsGetResponse,
  LabCost,
  CostsCreateOrUpdateOptionalParams,
  CostsCreateOrUpdateResponse
} from "../models";

/** Class containing Costs operations. */
export class CostsImpl implements Costs {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class Costs class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * Get cost.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the cost.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: CostsGetOptionalParams
  ): Promise<CostsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing cost.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the cost.
   * @param labCost A cost item.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    labCost: LabCost,
    options?: CostsCreateOrUpdateOptionalParams
  ): Promise<CostsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, labCost, options },
      createOrUpdateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabCost
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LabCost
    },
    201: {
      bodyMapper: Mappers.LabCost
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.labCost,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
