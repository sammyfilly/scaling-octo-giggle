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
  DataCenterResource,
  CassandraDataCentersListOptionalParams,
  CassandraDataCentersGetOptionalParams,
  CassandraDataCentersGetResponse,
  CassandraDataCentersDeleteOptionalParams,
  CassandraDataCentersCreateUpdateOptionalParams,
  CassandraDataCentersCreateUpdateResponse,
  CassandraDataCentersUpdateOptionalParams,
  CassandraDataCentersUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CassandraDataCenters. */
export interface CassandraDataCenters {
  /**
   * List all data centers in a particular managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraDataCentersListOptionalParams
  ): PagedAsyncIterableIterator<DataCenterResource>;
  /**
   * Get the properties of a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    options?: CassandraDataCentersGetOptionalParams
  ): Promise<CassandraDataCentersGetResponse>;
  /**
   * Delete a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    options?: CassandraDataCentersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    options?: CassandraDataCentersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Create or update a managed Cassandra data center. When updating, overwrite all properties. To update
   * only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  beginCreateUpdate(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersCreateUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CassandraDataCentersCreateUpdateResponse>,
      CassandraDataCentersCreateUpdateResponse
    >
  >;
  /**
   * Create or update a managed Cassandra data center. When updating, overwrite all properties. To update
   * only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  beginCreateUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersCreateUpdateOptionalParams
  ): Promise<CassandraDataCentersCreateUpdateResponse>;
  /**
   * Update some of the properties of a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters to provide for specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CassandraDataCentersUpdateResponse>,
      CassandraDataCentersUpdateResponse
    >
  >;
  /**
   * Update some of the properties of a managed Cassandra data center.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param dataCenterName Data center name in a managed Cassandra cluster.
   * @param body Parameters to provide for specifying the managed Cassandra data center.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    dataCenterName: string,
    body: DataCenterResource,
    options?: CassandraDataCentersUpdateOptionalParams
  ): Promise<CassandraDataCentersUpdateResponse>;
}
