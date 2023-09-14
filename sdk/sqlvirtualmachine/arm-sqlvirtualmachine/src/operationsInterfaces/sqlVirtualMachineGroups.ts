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
  SqlVirtualMachineGroup,
  SqlVirtualMachineGroupsListByResourceGroupOptionalParams,
  SqlVirtualMachineGroupsListOptionalParams,
  SqlVirtualMachineGroupsGetOptionalParams,
  SqlVirtualMachineGroupsGetResponse,
  SqlVirtualMachineGroupsCreateOrUpdateOptionalParams,
  SqlVirtualMachineGroupsCreateOrUpdateResponse,
  SqlVirtualMachineGroupsDeleteOptionalParams,
  SqlVirtualMachineGroupUpdate,
  SqlVirtualMachineGroupsUpdateOptionalParams,
  SqlVirtualMachineGroupsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlVirtualMachineGroups. */
export interface SqlVirtualMachineGroups {
  /**
   * Gets all SQL virtual machine groups in a resource group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SqlVirtualMachineGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SqlVirtualMachineGroup>;
  /**
   * Gets all SQL virtual machine groups in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: SqlVirtualMachineGroupsListOptionalParams
  ): PagedAsyncIterableIterator<SqlVirtualMachineGroup>;
  /**
   * Gets a SQL virtual machine group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineGroupName Name of the SQL virtual machine group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sqlVirtualMachineGroupName: string,
    options?: SqlVirtualMachineGroupsGetOptionalParams
  ): Promise<SqlVirtualMachineGroupsGetResponse>;
  /**
   * Creates or updates a SQL virtual machine group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineGroupName Name of the SQL virtual machine group.
   * @param parameters The SQL virtual machine group.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    sqlVirtualMachineGroupName: string,
    parameters: SqlVirtualMachineGroup,
    options?: SqlVirtualMachineGroupsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlVirtualMachineGroupsCreateOrUpdateResponse>,
      SqlVirtualMachineGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a SQL virtual machine group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineGroupName Name of the SQL virtual machine group.
   * @param parameters The SQL virtual machine group.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    sqlVirtualMachineGroupName: string,
    parameters: SqlVirtualMachineGroup,
    options?: SqlVirtualMachineGroupsCreateOrUpdateOptionalParams
  ): Promise<SqlVirtualMachineGroupsCreateOrUpdateResponse>;
  /**
   * Deletes a SQL virtual machine group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineGroupName Name of the SQL virtual machine group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    sqlVirtualMachineGroupName: string,
    options?: SqlVirtualMachineGroupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a SQL virtual machine group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineGroupName Name of the SQL virtual machine group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    sqlVirtualMachineGroupName: string,
    options?: SqlVirtualMachineGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates SQL virtual machine group tags.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineGroupName Name of the SQL virtual machine group.
   * @param parameters The SQL virtual machine group.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    sqlVirtualMachineGroupName: string,
    parameters: SqlVirtualMachineGroupUpdate,
    options?: SqlVirtualMachineGroupsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlVirtualMachineGroupsUpdateResponse>,
      SqlVirtualMachineGroupsUpdateResponse
    >
  >;
  /**
   * Updates SQL virtual machine group tags.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineGroupName Name of the SQL virtual machine group.
   * @param parameters The SQL virtual machine group.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    sqlVirtualMachineGroupName: string,
    parameters: SqlVirtualMachineGroupUpdate,
    options?: SqlVirtualMachineGroupsUpdateOptionalParams
  ): Promise<SqlVirtualMachineGroupsUpdateResponse>;
}
