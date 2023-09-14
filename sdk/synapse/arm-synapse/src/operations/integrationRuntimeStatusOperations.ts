/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IntegrationRuntimeStatusOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  IntegrationRuntimeStatusGetOptionalParams,
  IntegrationRuntimeStatusGetResponse
} from "../models";

/** Class containing IntegrationRuntimeStatusOperations operations. */
export class IntegrationRuntimeStatusOperationsImpl
  implements IntegrationRuntimeStatusOperations {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class IntegrationRuntimeStatusOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get the integration runtime status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeStatusGetOptionalParams
  ): Promise<IntegrationRuntimeStatusGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, integrationRuntimeName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/getStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeStatusResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
