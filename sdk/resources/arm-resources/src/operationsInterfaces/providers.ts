/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Provider,
  ProvidersListOptionalParams,
  ProvidersListAtTenantScopeOptionalParams,
  ProvidersUnregisterOptionalParams,
  ProvidersUnregisterResponse,
  ProvidersRegisterAtManagementGroupScopeOptionalParams,
  ProvidersProviderPermissionsOptionalParams,
  ProvidersProviderPermissionsResponse,
  ProvidersRegisterOptionalParams,
  ProvidersRegisterResponse,
  ProvidersGetOptionalParams,
  ProvidersGetResponse,
  ProvidersGetAtTenantScopeOptionalParams,
  ProvidersGetAtTenantScopeResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Providers. */
export interface Providers {
  /**
   * Gets all resource providers for a subscription.
   * @param options The options parameters.
   */
  list(
    options?: ProvidersListOptionalParams
  ): PagedAsyncIterableIterator<Provider>;
  /**
   * Gets all resource providers for the tenant.
   * @param options The options parameters.
   */
  listAtTenantScope(
    options?: ProvidersListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<Provider>;
  /**
   * Unregisters a subscription from a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to unregister.
   * @param options The options parameters.
   */
  unregister(
    resourceProviderNamespace: string,
    options?: ProvidersUnregisterOptionalParams
  ): Promise<ProvidersUnregisterResponse>;
  /**
   * Registers a management group with a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to register.
   * @param groupId The management group ID.
   * @param options The options parameters.
   */
  registerAtManagementGroupScope(
    resourceProviderNamespace: string,
    groupId: string,
    options?: ProvidersRegisterAtManagementGroupScopeOptionalParams
  ): Promise<void>;
  /**
   * Get the provider permissions.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  providerPermissions(
    resourceProviderNamespace: string,
    options?: ProvidersProviderPermissionsOptionalParams
  ): Promise<ProvidersProviderPermissionsResponse>;
  /**
   * Registers a subscription with a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to register.
   * @param options The options parameters.
   */
  register(
    resourceProviderNamespace: string,
    options?: ProvidersRegisterOptionalParams
  ): Promise<ProvidersRegisterResponse>;
  /**
   * Gets the specified resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  get(
    resourceProviderNamespace: string,
    options?: ProvidersGetOptionalParams
  ): Promise<ProvidersGetResponse>;
  /**
   * Gets the specified resource provider at the tenant level.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  getAtTenantScope(
    resourceProviderNamespace: string,
    options?: ProvidersGetAtTenantScopeOptionalParams
  ): Promise<ProvidersGetAtTenantScopeResponse>;
}
