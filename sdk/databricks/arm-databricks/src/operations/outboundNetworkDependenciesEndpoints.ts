/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OutboundNetworkDependenciesEndpoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDatabricksManagementClient } from "../azureDatabricksManagementClient";
import {
  OutboundNetworkDependenciesEndpointsListOptionalParams,
  OutboundNetworkDependenciesEndpointsListResponse
} from "../models";

/** Class containing OutboundNetworkDependenciesEndpoints operations. */
export class OutboundNetworkDependenciesEndpointsImpl
  implements OutboundNetworkDependenciesEndpoints {
  private readonly client: AzureDatabricksManagementClient;

  /**
   * Initialize a new instance of the class OutboundNetworkDependenciesEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDatabricksManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of endpoints that VNET Injected Workspace calls Azure Databricks Control Plane. You
   * must configure outbound access with these endpoints. For more information, see
   * https://docs.microsoft.com/azure/databricks/administration-guide/cloud-configurations/azure/udr
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: OutboundNetworkDependenciesEndpointsListOptionalParams
  ): Promise<OutboundNetworkDependenciesEndpointsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/outboundNetworkDependenciesEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OutboundEnvironmentEndpoint"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
