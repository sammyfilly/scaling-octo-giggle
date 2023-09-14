/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AuthConfig,
  ContainerAppsAuthConfigsListByContainerAppOptionalParams,
  ContainerAppsAuthConfigsGetOptionalParams,
  ContainerAppsAuthConfigsGetResponse,
  ContainerAppsAuthConfigsCreateOrUpdateOptionalParams,
  ContainerAppsAuthConfigsCreateOrUpdateResponse,
  ContainerAppsAuthConfigsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ContainerAppsAuthConfigs. */
export interface ContainerAppsAuthConfigs {
  /**
   * Get the Container App AuthConfigs in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  listByContainerApp(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsAuthConfigsListByContainerAppOptionalParams
  ): PagedAsyncIterableIterator<AuthConfig>;
  /**
   * Get a AuthConfig of a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param authConfigName Name of the Container App AuthConfig.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    containerAppName: string,
    authConfigName: string,
    options?: ContainerAppsAuthConfigsGetOptionalParams
  ): Promise<ContainerAppsAuthConfigsGetResponse>;
  /**
   * Create or update the AuthConfig for a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param authConfigName Name of the Container App AuthConfig.
   * @param authConfigEnvelope Properties used to create a Container App AuthConfig
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    containerAppName: string,
    authConfigName: string,
    authConfigEnvelope: AuthConfig,
    options?: ContainerAppsAuthConfigsCreateOrUpdateOptionalParams
  ): Promise<ContainerAppsAuthConfigsCreateOrUpdateResponse>;
  /**
   * Delete a Container App AuthConfig.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param authConfigName Name of the Container App AuthConfig.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    containerAppName: string,
    authConfigName: string,
    options?: ContainerAppsAuthConfigsDeleteOptionalParams
  ): Promise<void>;
}
