/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  AzureDevOpsConnector,
  AzureDevOpsConnectorListByResourceGroupOptionalParams,
  AzureDevOpsConnectorListBySubscriptionOptionalParams,
  AzureDevOpsConnectorGetOptionalParams,
  AzureDevOpsConnectorGetResponse,
  AzureDevOpsConnectorCreateOrUpdateOptionalParams,
  AzureDevOpsConnectorCreateOrUpdateResponse,
  AzureDevOpsConnectorUpdateOptionalParams,
  AzureDevOpsConnectorUpdateResponse,
  AzureDevOpsConnectorDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureDevOpsConnectorOperations. */
export interface AzureDevOpsConnectorOperations {
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AzureDevOpsConnectorListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AzureDevOpsConnector>;
  /**
   * Returns a list of monitored AzureDevOps Connectors.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AzureDevOpsConnectorListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AzureDevOpsConnector>;
  /**
   * Returns a monitored AzureDevOps Connector resource for a given ID.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    options?: AzureDevOpsConnectorGetOptionalParams
  ): Promise<AzureDevOpsConnectorGetResponse>;
  /**
   * Creates or updates an Azure DevOps Connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsConnector Connector resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsConnector: AzureDevOpsConnector,
    options?: AzureDevOpsConnectorCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsConnectorCreateOrUpdateResponse>,
      AzureDevOpsConnectorCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an Azure DevOps Connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsConnector Connector resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsConnector: AzureDevOpsConnector,
    options?: AzureDevOpsConnectorCreateOrUpdateOptionalParams
  ): Promise<AzureDevOpsConnectorCreateOrUpdateResponse>;
  /**
   * Update monitored AzureDevOps Connector details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    options?: AzureDevOpsConnectorUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsConnectorUpdateResponse>,
      AzureDevOpsConnectorUpdateResponse
    >
  >;
  /**
   * Update monitored AzureDevOps Connector details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    options?: AzureDevOpsConnectorUpdateOptionalParams
  ): Promise<AzureDevOpsConnectorUpdateResponse>;
  /**
   * Delete monitored AzureDevOps Connector details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    options?: AzureDevOpsConnectorDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete monitored AzureDevOps Connector details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    options?: AzureDevOpsConnectorDeleteOptionalParams
  ): Promise<void>;
}
