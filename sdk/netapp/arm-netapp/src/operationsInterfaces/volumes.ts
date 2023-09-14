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
  Volume,
  VolumesListOptionalParams,
  VolumesGetOptionalParams,
  VolumesGetResponse,
  VolumesCreateOrUpdateOptionalParams,
  VolumesCreateOrUpdateResponse,
  VolumePatch,
  VolumesUpdateOptionalParams,
  VolumesUpdateResponse,
  VolumesDeleteOptionalParams,
  VolumeRevert,
  VolumesRevertOptionalParams,
  VolumesBreakReplicationOptionalParams,
  VolumesReplicationStatusOptionalParams,
  VolumesReplicationStatusResponse,
  VolumesResyncReplicationOptionalParams,
  VolumesDeleteReplicationOptionalParams,
  AuthorizeRequest,
  VolumesAuthorizeReplicationOptionalParams,
  VolumesReInitializeReplicationOptionalParams,
  PoolChangeRequest,
  VolumesPoolChangeOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Volumes. */
export interface Volumes {
  /**
   * List all volumes within the capacity pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    options?: VolumesListOptionalParams
  ): PagedAsyncIterableIterator<Volume>;
  /**
   * Get the details of the specified volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesGetOptionalParams
  ): Promise<VolumesGetResponse>;
  /**
   * Create or update the specified volume within the capacity pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: Volume,
    options?: VolumesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VolumesCreateOrUpdateResponse>,
      VolumesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the specified volume within the capacity pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: Volume,
    options?: VolumesCreateOrUpdateOptionalParams
  ): Promise<VolumesCreateOrUpdateResponse>;
  /**
   * Patch the specified volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumePatch,
    options?: VolumesUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<VolumesUpdateResponse>, VolumesUpdateResponse>
  >;
  /**
   * Patch the specified volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Volume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumePatch,
    options?: VolumesUpdateOptionalParams
  ): Promise<VolumesUpdateResponse>;
  /**
   * Delete the specified volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete the specified volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Revert a volume to the snapshot specified in the body
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Object for snapshot to revert supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRevert(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumeRevert,
    options?: VolumesRevertOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Revert a volume to the snapshot specified in the body
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Object for snapshot to revert supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRevertAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: VolumeRevert,
    options?: VolumesRevertOptionalParams
  ): Promise<void>;
  /**
   * Break the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginBreakReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesBreakReplicationOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Break the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginBreakReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesBreakReplicationOptionalParams
  ): Promise<void>;
  /**
   * Get the status of the replication
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  replicationStatus(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesReplicationStatusOptionalParams
  ): Promise<VolumesReplicationStatusResponse>;
  /**
   * Resync the connection on the destination volume. If the operation is ran on the source volume it
   * will reverse-resync the connection and sync from destination to source.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginResyncReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesResyncReplicationOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Resync the connection on the destination volume. If the operation is ran on the source volume it
   * will reverse-resync the connection and sync from destination to source.
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginResyncReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesResyncReplicationOptionalParams
  ): Promise<void>;
  /**
   * Delete the replication connection on the destination volume, and send release to the source
   * replication
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDeleteReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteReplicationOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete the replication connection on the destination volume, and send release to the source
   * replication
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginDeleteReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesDeleteReplicationOptionalParams
  ): Promise<void>;
  /**
   * Authorize the replication connection on the source volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Authorize request object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginAuthorizeReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: AuthorizeRequest,
    options?: VolumesAuthorizeReplicationOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Authorize the replication connection on the source volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Authorize request object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginAuthorizeReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: AuthorizeRequest,
    options?: VolumesAuthorizeReplicationOptionalParams
  ): Promise<void>;
  /**
   * Re-Initializes the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginReInitializeReplication(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesReInitializeReplicationOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Re-Initializes the replication connection on the destination volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  beginReInitializeReplicationAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumesReInitializeReplicationOptionalParams
  ): Promise<void>;
  /**
   * Moves volume to another pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Move volume to the pool supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginPoolChange(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: PoolChangeRequest,
    options?: VolumesPoolChangeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Moves volume to another pool
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param body Move volume to the pool supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginPoolChangeAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    body: PoolChangeRequest,
    options?: VolumesPoolChangeOptionalParams
  ): Promise<void>;
}
