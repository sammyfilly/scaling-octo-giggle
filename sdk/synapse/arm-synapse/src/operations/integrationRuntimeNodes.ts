/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IntegrationRuntimeNodes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  IntegrationRuntimeNodesGetOptionalParams,
  IntegrationRuntimeNodesGetResponse,
  UpdateIntegrationRuntimeNodeRequest,
  IntegrationRuntimeNodesUpdateOptionalParams,
  IntegrationRuntimeNodesUpdateResponse,
  IntegrationRuntimeNodesDeleteOptionalParams
} from "../models";

/** Class containing IntegrationRuntimeNodes operations. */
export class IntegrationRuntimeNodesImpl implements IntegrationRuntimeNodes {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class IntegrationRuntimeNodes class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get an integration runtime node
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param nodeName Integration runtime node name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesGetOptionalParams
  ): Promise<IntegrationRuntimeNodesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        nodeName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create an integration runtime node
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param nodeName Integration runtime node name
   * @param updateIntegrationRuntimeNodeRequest The parameters for updating an integration runtime node.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    nodeName: string,
    updateIntegrationRuntimeNodeRequest: UpdateIntegrationRuntimeNodeRequest,
    options?: IntegrationRuntimeNodesUpdateOptionalParams
  ): Promise<IntegrationRuntimeNodesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        nodeName,
        updateIntegrationRuntimeNodeRequest,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Delete an integration runtime node
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param nodeName Integration runtime node name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        nodeName,
        options
      },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SelfHostedIntegrationRuntimeNode
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
    Parameters.integrationRuntimeName,
    Parameters.nodeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SelfHostedIntegrationRuntimeNode
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.updateIntegrationRuntimeNodeRequest,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName,
    Parameters.nodeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
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
    Parameters.integrationRuntimeName,
    Parameters.nodeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
