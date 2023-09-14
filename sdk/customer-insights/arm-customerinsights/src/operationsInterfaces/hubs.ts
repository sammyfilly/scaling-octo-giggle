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
  Hub,
  HubsListByResourceGroupOptionalParams,
  HubsListOptionalParams,
  HubsCreateOrUpdateOptionalParams,
  HubsCreateOrUpdateResponse,
  HubsUpdateOptionalParams,
  HubsUpdateResponse,
  HubsDeleteOptionalParams,
  HubsGetOptionalParams,
  HubsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Hubs. */
export interface Hubs {
  /**
   * Gets all the hubs in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: HubsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Hub>;
  /**
   * Gets all hubs in the specified subscription.
   * @param options The options parameters.
   */
  list(options?: HubsListOptionalParams): PagedAsyncIterableIterator<Hub>;
  /**
   * Creates a hub, or updates an existing hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the CreateOrUpdate Hub operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hubName: string,
    parameters: Hub,
    options?: HubsCreateOrUpdateOptionalParams
  ): Promise<HubsCreateOrUpdateResponse>;
  /**
   * Updates a Hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the Update Hub operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hubName: string,
    parameters: Hub,
    options?: HubsUpdateOptionalParams
  ): Promise<HubsUpdateResponse>;
  /**
   * Deletes the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    hubName: string,
    options?: HubsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    hubName: string,
    options?: HubsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hubName: string,
    options?: HubsGetOptionalParams
  ): Promise<HubsGetResponse>;
}
