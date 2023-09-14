/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MaintenanceConfiguration,
  MaintenanceConfigurationsListByManagedClusterOptionalParams,
  MaintenanceConfigurationsGetOptionalParams,
  MaintenanceConfigurationsGetResponse,
  MaintenanceConfigurationsCreateOrUpdateOptionalParams,
  MaintenanceConfigurationsCreateOrUpdateResponse,
  MaintenanceConfigurationsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MaintenanceConfigurations. */
export interface MaintenanceConfigurations {
  /**
   * Gets a list of maintenance configurations in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  listByManagedCluster(
    resourceGroupName: string,
    resourceName: string,
    options?: MaintenanceConfigurationsListByManagedClusterOptionalParams
  ): PagedAsyncIterableIterator<MaintenanceConfiguration>;
  /**
   * Gets the specified maintenance configuration of a managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param configName The name of the maintenance configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    configName: string,
    options?: MaintenanceConfigurationsGetOptionalParams
  ): Promise<MaintenanceConfigurationsGetResponse>;
  /**
   * Creates or updates a maintenance configuration in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param configName The name of the maintenance configuration.
   * @param parameters The maintenance configuration to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    configName: string,
    parameters: MaintenanceConfiguration,
    options?: MaintenanceConfigurationsCreateOrUpdateOptionalParams
  ): Promise<MaintenanceConfigurationsCreateOrUpdateResponse>;
  /**
   * Deletes a maintenance configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param configName The name of the maintenance configuration.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    configName: string,
    options?: MaintenanceConfigurationsDeleteOptionalParams
  ): Promise<void>;
}
