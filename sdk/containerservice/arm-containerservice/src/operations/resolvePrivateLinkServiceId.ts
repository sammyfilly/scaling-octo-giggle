/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ResolvePrivateLinkServiceId } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceClient } from "../containerServiceClient";
import {
  PrivateLinkResource,
  ResolvePrivateLinkServiceIdPostOptionalParams,
  ResolvePrivateLinkServiceIdPostResponse
} from "../models";

/** Class containing ResolvePrivateLinkServiceId operations. */
export class ResolvePrivateLinkServiceIdImpl
  implements ResolvePrivateLinkServiceId {
  private readonly client: ContainerServiceClient;

  /**
   * Initialize a new instance of the class ResolvePrivateLinkServiceId class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerServiceClient) {
    this.client = client;
  }

  /**
   * Gets the private link service ID for the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters required in order to resolve a private link service ID.
   * @param options The options parameters.
   */
  post(
    resourceGroupName: string,
    resourceName: string,
    parameters: PrivateLinkResource,
    options?: ResolvePrivateLinkServiceIdPostOptionalParams
  ): Promise<ResolvePrivateLinkServiceIdPostResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, parameters, options },
      postOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/resolvePrivateLinkServiceId",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
