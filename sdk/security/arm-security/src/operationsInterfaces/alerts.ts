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
  Alert,
  AlertsListOptionalParams,
  AlertsListByResourceGroupOptionalParams,
  AlertsListSubscriptionLevelByRegionOptionalParams,
  AlertsListResourceGroupLevelByRegionOptionalParams,
  AlertsGetSubscriptionLevelOptionalParams,
  AlertsGetSubscriptionLevelResponse,
  AlertsGetResourceGroupLevelOptionalParams,
  AlertsGetResourceGroupLevelResponse,
  AlertsUpdateSubscriptionLevelStateToDismissOptionalParams,
  AlertsUpdateSubscriptionLevelStateToResolveOptionalParams,
  AlertsUpdateSubscriptionLevelStateToActivateOptionalParams,
  AlertsUpdateSubscriptionLevelStateToInProgressOptionalParams,
  AlertsUpdateResourceGroupLevelStateToResolveOptionalParams,
  AlertsUpdateResourceGroupLevelStateToDismissOptionalParams,
  AlertsUpdateResourceGroupLevelStateToActivateOptionalParams,
  AlertsUpdateResourceGroupLevelStateToInProgressOptionalParams,
  AlertSimulatorRequestBody,
  AlertsSimulateOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Alerts. */
export interface Alerts {
  /**
   * List all the alerts that are associated with the subscription
   * @param options The options parameters.
   */
  list(options?: AlertsListOptionalParams): PagedAsyncIterableIterator<Alert>;
  /**
   * List all the alerts that are associated with the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AlertsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Alert>;
  /**
   * List all the alerts that are associated with the subscription that are stored in a specific location
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  listSubscriptionLevelByRegion(
    ascLocation: string,
    options?: AlertsListSubscriptionLevelByRegionOptionalParams
  ): PagedAsyncIterableIterator<Alert>;
  /**
   * List all the alerts that are associated with the resource group that are stored in a specific
   * location
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listResourceGroupLevelByRegion(
    ascLocation: string,
    resourceGroupName: string,
    options?: AlertsListResourceGroupLevelByRegionOptionalParams
  ): PagedAsyncIterableIterator<Alert>;
  /**
   * Get an alert that is associated with a subscription
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  getSubscriptionLevel(
    ascLocation: string,
    alertName: string,
    options?: AlertsGetSubscriptionLevelOptionalParams
  ): Promise<AlertsGetSubscriptionLevelResponse>;
  /**
   * Get an alert that is associated a resource group or a resource in a resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  getResourceGroupLevel(
    resourceGroupName: string,
    ascLocation: string,
    alertName: string,
    options?: AlertsGetResourceGroupLevelOptionalParams
  ): Promise<AlertsGetResourceGroupLevelResponse>;
  /**
   * Update the alert's state
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateSubscriptionLevelStateToDismiss(
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateSubscriptionLevelStateToDismissOptionalParams
  ): Promise<void>;
  /**
   * Update the alert's state
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateSubscriptionLevelStateToResolve(
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateSubscriptionLevelStateToResolveOptionalParams
  ): Promise<void>;
  /**
   * Update the alert's state
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateSubscriptionLevelStateToActivate(
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateSubscriptionLevelStateToActivateOptionalParams
  ): Promise<void>;
  /**
   * Update the alert's state
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateSubscriptionLevelStateToInProgress(
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateSubscriptionLevelStateToInProgressOptionalParams
  ): Promise<void>;
  /**
   * Update the alert's state
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateResourceGroupLevelStateToResolve(
    resourceGroupName: string,
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateResourceGroupLevelStateToResolveOptionalParams
  ): Promise<void>;
  /**
   * Update the alert's state
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateResourceGroupLevelStateToDismiss(
    resourceGroupName: string,
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateResourceGroupLevelStateToDismissOptionalParams
  ): Promise<void>;
  /**
   * Update the alert's state
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateResourceGroupLevelStateToActivate(
    resourceGroupName: string,
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateResourceGroupLevelStateToActivateOptionalParams
  ): Promise<void>;
  /**
   * Update the alert's state
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateResourceGroupLevelStateToInProgress(
    resourceGroupName: string,
    ascLocation: string,
    alertName: string,
    options?: AlertsUpdateResourceGroupLevelStateToInProgressOptionalParams
  ): Promise<void>;
  /**
   * Simulate security alerts
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertSimulatorRequestBody Alert Simulator Request Properties
   * @param options The options parameters.
   */
  beginSimulate(
    ascLocation: string,
    alertSimulatorRequestBody: AlertSimulatorRequestBody,
    options?: AlertsSimulateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Simulate security alerts
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param alertSimulatorRequestBody Alert Simulator Request Properties
   * @param options The options parameters.
   */
  beginSimulateAndWait(
    ascLocation: string,
    alertSimulatorRequestBody: AlertSimulatorRequestBody,
    options?: AlertsSimulateOptionalParams
  ): Promise<void>;
}
