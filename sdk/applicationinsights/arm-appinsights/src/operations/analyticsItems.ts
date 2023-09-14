/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AnalyticsItems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient";
import {
  ItemScopePath,
  AnalyticsItemsListOptionalParams,
  AnalyticsItemsListResponse,
  AnalyticsItemsGetOptionalParams,
  AnalyticsItemsGetResponse,
  ApplicationInsightsComponentAnalyticsItem,
  AnalyticsItemsPutOptionalParams,
  AnalyticsItemsPutResponse,
  AnalyticsItemsDeleteOptionalParams
} from "../models";

/** Class containing AnalyticsItems operations. */
export class AnalyticsItemsImpl implements AnalyticsItems {
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class AnalyticsItems class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of Analytics Items defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is shared
   *                  between all users with access to the Application Insights component.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    scopePath: ItemScopePath,
    options?: AnalyticsItemsListOptionalParams
  ): Promise<AnalyticsItemsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, scopePath, options },
      listOperationSpec
    );
  }

  /**
   * Gets a specific Analytics Items defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is shared
   *                  between all users with access to the Application Insights component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    scopePath: ItemScopePath,
    options?: AnalyticsItemsGetOptionalParams
  ): Promise<AnalyticsItemsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, scopePath, options },
      getOperationSpec
    );
  }

  /**
   * Adds or Updates a specific Analytics Item within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is shared
   *                  between all users with access to the Application Insights component.
   * @param itemProperties Properties that need to be specified to create a new item and add it to an
   *                       Application Insights component.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    resourceName: string,
    scopePath: ItemScopePath,
    itemProperties: ApplicationInsightsComponentAnalyticsItem,
    options?: AnalyticsItemsPutOptionalParams
  ): Promise<AnalyticsItemsPutResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, scopePath, itemProperties, options },
      putOperationSpec
    );
  }

  /**
   * Deletes a specific Analytics Items defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is shared
   *                  between all users with access to the Application Insights component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    scopePath: ItemScopePath,
    options?: AnalyticsItemsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, scopePath, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationInsightsComponentAnalyticsItem"
            }
          }
        }
      }
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.scope,
    Parameters.typeParam,
    Parameters.includeContent
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAnalyticsItem
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.id, Parameters.name],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const putOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAnalyticsItem
    }
  },
  requestBody: Parameters.itemProperties,
  queryParameters: [Parameters.apiVersion, Parameters.overrideItem],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion, Parameters.id, Parameters.name],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  serializer
};
