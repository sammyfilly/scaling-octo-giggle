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
  DigitalTwinsDescription,
  DigitalTwinsListOptionalParams,
  DigitalTwinsListByResourceGroupOptionalParams,
  DigitalTwinsGetOptionalParams,
  DigitalTwinsGetResponse,
  DigitalTwinsCreateOrUpdateOptionalParams,
  DigitalTwinsCreateOrUpdateResponse,
  DigitalTwinsPatchDescription,
  DigitalTwinsUpdateOptionalParams,
  DigitalTwinsUpdateResponse,
  DigitalTwinsDeleteOptionalParams,
  DigitalTwinsDeleteResponse,
  CheckNameRequest,
  DigitalTwinsCheckNameAvailabilityOptionalParams,
  DigitalTwinsCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DigitalTwins. */
export interface DigitalTwins {
  /**
   * Get all the DigitalTwinsInstances in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: DigitalTwinsListOptionalParams
  ): PagedAsyncIterableIterator<DigitalTwinsDescription>;
  /**
   * Get all the DigitalTwinsInstances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DigitalTwinsDescription>;
  /**
   * Get DigitalTwinsInstances resource.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsGetOptionalParams
  ): Promise<DigitalTwinsGetResponse>;
  /**
   * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is
   * to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified
   * values in a new body to update the DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsCreate The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsCreate: DigitalTwinsDescription,
    options?: DigitalTwinsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsCreateOrUpdateResponse>,
      DigitalTwinsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is
   * to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified
   * values in a new body to update the DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsCreate The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsCreate: DigitalTwinsDescription,
    options?: DigitalTwinsCreateOrUpdateOptionalParams
  ): Promise<DigitalTwinsCreateOrUpdateResponse>;
  /**
   * Update metadata of DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsPatchDescription The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsPatchDescription: DigitalTwinsPatchDescription,
    options?: DigitalTwinsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsUpdateResponse>,
      DigitalTwinsUpdateResponse
    >
  >;
  /**
   * Update metadata of DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsPatchDescription The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsPatchDescription: DigitalTwinsPatchDescription,
    options?: DigitalTwinsUpdateOptionalParams
  ): Promise<DigitalTwinsUpdateResponse>;
  /**
   * Delete a DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsDeleteResponse>,
      DigitalTwinsDeleteResponse
    >
  >;
  /**
   * Delete a DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsDeleteOptionalParams
  ): Promise<DigitalTwinsDeleteResponse>;
  /**
   * Check if a DigitalTwinsInstance name is available.
   * @param location Location of DigitalTwinsInstance.
   * @param digitalTwinsInstanceCheckName Set the name parameter in the DigitalTwinsInstanceCheckName
   *                                      structure to the name of the DigitalTwinsInstance to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    digitalTwinsInstanceCheckName: CheckNameRequest,
    options?: DigitalTwinsCheckNameAvailabilityOptionalParams
  ): Promise<DigitalTwinsCheckNameAvailabilityResponse>;
}
