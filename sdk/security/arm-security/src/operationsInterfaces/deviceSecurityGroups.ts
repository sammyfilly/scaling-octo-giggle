/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DeviceSecurityGroup,
  DeviceSecurityGroupsListOptionalParams,
  DeviceSecurityGroupsGetOptionalParams,
  DeviceSecurityGroupsGetResponse,
  DeviceSecurityGroupsCreateOrUpdateOptionalParams,
  DeviceSecurityGroupsCreateOrUpdateResponse,
  DeviceSecurityGroupsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeviceSecurityGroups. */
export interface DeviceSecurityGroups {
  /**
   * Use this method get the list of device security groups for the specified IoT Hub resource.
   * @param resourceId The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceId: string,
    options?: DeviceSecurityGroupsListOptionalParams
  ): PagedAsyncIterableIterator<DeviceSecurityGroup>;
  /**
   * Use this method to get the device security group for the specified IoT Hub resource.
   * @param resourceId The identifier of the resource.
   * @param deviceSecurityGroupName The name of the device security group. Note that the name of the
   *                                device security group is case insensitive.
   * @param options The options parameters.
   */
  get(
    resourceId: string,
    deviceSecurityGroupName: string,
    options?: DeviceSecurityGroupsGetOptionalParams
  ): Promise<DeviceSecurityGroupsGetResponse>;
  /**
   * Use this method to creates or updates the device security group on a specified IoT Hub resource.
   * @param resourceId The identifier of the resource.
   * @param deviceSecurityGroupName The name of the device security group. Note that the name of the
   *                                device security group is case insensitive.
   * @param deviceSecurityGroup Security group object.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceId: string,
    deviceSecurityGroupName: string,
    deviceSecurityGroup: DeviceSecurityGroup,
    options?: DeviceSecurityGroupsCreateOrUpdateOptionalParams
  ): Promise<DeviceSecurityGroupsCreateOrUpdateResponse>;
  /**
   * User this method to deletes the device security group.
   * @param resourceId The identifier of the resource.
   * @param deviceSecurityGroupName The name of the device security group. Note that the name of the
   *                                device security group is case insensitive.
   * @param options The options parameters.
   */
  delete(
    resourceId: string,
    deviceSecurityGroupName: string,
    options?: DeviceSecurityGroupsDeleteOptionalParams
  ): Promise<void>;
}
