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
  User,
  UsersListByLabOptionalParams,
  UsersGetOptionalParams,
  UsersGetResponse,
  UsersCreateOrUpdateOptionalParams,
  UsersCreateOrUpdateResponse,
  UserUpdate,
  UsersUpdateOptionalParams,
  UsersUpdateResponse,
  UsersDeleteOptionalParams,
  InviteBody,
  UsersInviteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Users. */
export interface Users {
  /**
   * Returns a list of all users for a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param options The options parameters.
   */
  listByLab(
    resourceGroupName: string,
    labName: string,
    options?: UsersListByLabOptionalParams
  ): PagedAsyncIterableIterator<User>;
  /**
   * Returns the properties of a lab user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: UsersGetOptionalParams
  ): Promise<UsersGetResponse>;
  /**
   * Operation to create or update a lab user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    body: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<UsersCreateOrUpdateResponse>,
      UsersCreateOrUpdateResponse
    >
  >;
  /**
   * Operation to create or update a lab user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    body: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<UsersCreateOrUpdateResponse>;
  /**
   * Operation to update a lab user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    body: UserUpdate,
    options?: UsersUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<UsersUpdateResponse>, UsersUpdateResponse>
  >;
  /**
   * Operation to update a lab user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    body: UserUpdate,
    options?: UsersUpdateOptionalParams
  ): Promise<UsersUpdateResponse>;
  /**
   * Operation to delete a user resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: UsersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Operation to delete a user resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: UsersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Operation to invite a user to a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  beginInvite(
    resourceGroupName: string,
    labName: string,
    userName: string,
    body: InviteBody,
    options?: UsersInviteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Operation to invite a user to a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab plan. Used in
   *                resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   *                 resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  beginInviteAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    body: InviteBody,
    options?: UsersInviteOptionalParams
  ): Promise<void>;
}
