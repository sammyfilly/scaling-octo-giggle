/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ManagedInstancePrivateLink,
  ManagedInstancePrivateLinkResourcesListByManagedInstanceOptionalParams,
  ManagedInstancePrivateLinkResourcesGetOptionalParams,
  ManagedInstancePrivateLinkResourcesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstancePrivateLinkResources. */
export interface ManagedInstancePrivateLinkResources {
  /**
   * Gets the private link resources for SQL server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancePrivateLinkResourcesListByManagedInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstancePrivateLink>;
  /**
   * Gets a private link resource for SQL server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param groupName The name of the private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    groupName: string,
    options?: ManagedInstancePrivateLinkResourcesGetOptionalParams
  ): Promise<ManagedInstancePrivateLinkResourcesGetResponse>;
}
