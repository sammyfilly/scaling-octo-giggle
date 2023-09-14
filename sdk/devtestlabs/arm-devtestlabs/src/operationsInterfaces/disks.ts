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
  Disk,
  DisksListOptionalParams,
  DisksGetOptionalParams,
  DisksGetResponse,
  DisksCreateOrUpdateOptionalParams,
  DisksCreateOrUpdateResponse,
  DisksDeleteOptionalParams,
  DiskFragment,
  DisksUpdateOptionalParams,
  DisksUpdateResponse,
  AttachDiskProperties,
  DisksAttachOptionalParams,
  DetachDiskProperties,
  DisksDetachOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Disks. */
export interface Disks {
  /**
   * List disks in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: DisksListOptionalParams
  ): PagedAsyncIterableIterator<Disk>;
  /**
   * Get disk.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: DisksGetOptionalParams
  ): Promise<DisksGetResponse>;
  /**
   * Create or replace an existing disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    disk: Disk,
    options?: DisksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DisksCreateOrUpdateResponse>,
      DisksCreateOrUpdateResponse
    >
  >;
  /**
   * Create or replace an existing disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    disk: Disk,
    options?: DisksCreateOrUpdateOptionalParams
  ): Promise<DisksCreateOrUpdateResponse>;
  /**
   * Delete disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: DisksDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: DisksDeleteOptionalParams
  ): Promise<void>;
  /**
   * Allows modifying tags of disks. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    disk: DiskFragment,
    options?: DisksUpdateOptionalParams
  ): Promise<DisksUpdateResponse>;
  /**
   * Attach and create the lease of the disk to the virtual machine. This operation can take a while to
   * complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param attachDiskProperties Properties of the disk to attach.
   * @param options The options parameters.
   */
  beginAttach(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    attachDiskProperties: AttachDiskProperties,
    options?: DisksAttachOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Attach and create the lease of the disk to the virtual machine. This operation can take a while to
   * complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param attachDiskProperties Properties of the disk to attach.
   * @param options The options parameters.
   */
  beginAttachAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    attachDiskProperties: AttachDiskProperties,
    options?: DisksAttachOptionalParams
  ): Promise<void>;
  /**
   * Detach and break the lease of the disk attached to the virtual machine. This operation can take a
   * while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param detachDiskProperties Properties of the disk to detach.
   * @param options The options parameters.
   */
  beginDetach(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    detachDiskProperties: DetachDiskProperties,
    options?: DisksDetachOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Detach and break the lease of the disk attached to the virtual machine. This operation can take a
   * while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param detachDiskProperties Properties of the disk to detach.
   * @param options The options parameters.
   */
  beginDetachAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    detachDiskProperties: DetachDiskProperties,
    options?: DisksDetachOptionalParams
  ): Promise<void>;
}
