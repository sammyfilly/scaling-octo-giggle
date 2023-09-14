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
  EHNamespace,
  NamespacesListOptionalParams,
  NamespacesListByResourceGroupOptionalParams,
  AuthorizationRule,
  NamespacesListAuthorizationRulesOptionalParams,
  NamespacesCreateOrUpdateOptionalParams,
  NamespacesCreateOrUpdateResponse,
  NamespacesDeleteOptionalParams,
  NamespacesGetOptionalParams,
  NamespacesGetResponse,
  NamespacesUpdateOptionalParams,
  NamespacesUpdateResponse,
  NamespacesCreateOrUpdateAuthorizationRuleOptionalParams,
  NamespacesCreateOrUpdateAuthorizationRuleResponse,
  NamespacesDeleteAuthorizationRuleOptionalParams,
  NamespacesGetAuthorizationRuleOptionalParams,
  NamespacesGetAuthorizationRuleResponse,
  NamespacesListKeysOptionalParams,
  NamespacesListKeysResponse,
  RegenerateAccessKeyParameters,
  NamespacesRegenerateKeysOptionalParams,
  NamespacesRegenerateKeysResponse,
  CheckNameAvailabilityParameter,
  NamespacesCheckNameAvailabilityOptionalParams,
  NamespacesCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Namespaces. */
export interface Namespaces {
  /**
   * Lists all the available Namespaces within a subscription, irrespective of the resource groups.
   * @param options The options parameters.
   */
  list(
    options?: NamespacesListOptionalParams
  ): PagedAsyncIterableIterator<EHNamespace>;
  /**
   * Lists the available Namespaces within a resource group.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: NamespacesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<EHNamespace>;
  /**
   * Gets a list of authorization rules for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesListAuthorizationRulesOptionalParams
  ): PagedAsyncIterableIterator<AuthorizationRule>;
  /**
   * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This
   * operation is idempotent.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param parameters Parameters for creating a namespace resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    parameters: EHNamespace,
    options?: NamespacesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<NamespacesCreateOrUpdateResponse>,
      NamespacesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This
   * operation is idempotent.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param parameters Parameters for creating a namespace resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    parameters: EHNamespace,
    options?: NamespacesCreateOrUpdateOptionalParams
  ): Promise<NamespacesCreateOrUpdateResponse>;
  /**
   * Deletes an existing namespace. This operation also removes all associated resources under the
   * namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing namespace. This operation also removes all associated resources under the
   * namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the description of the specified namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesGetOptionalParams
  ): Promise<NamespacesGetResponse>;
  /**
   * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This
   * operation is idempotent.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param parameters Parameters for updating a namespace resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    namespaceName: string,
    parameters: EHNamespace,
    options?: NamespacesUpdateOptionalParams
  ): Promise<NamespacesUpdateResponse>;
  /**
   * Creates or updates an AuthorizationRule for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param authorizationRuleName The authorization rule name.
   * @param parameters The shared access AuthorizationRule.
   * @param options The options parameters.
   */
  createOrUpdateAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    parameters: AuthorizationRule,
    options?: NamespacesCreateOrUpdateAuthorizationRuleOptionalParams
  ): Promise<NamespacesCreateOrUpdateAuthorizationRuleResponse>;
  /**
   * Deletes an AuthorizationRule for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  deleteAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    options?: NamespacesDeleteAuthorizationRuleOptionalParams
  ): Promise<void>;
  /**
   * Gets an AuthorizationRule for a Namespace by rule name.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    options?: NamespacesGetAuthorizationRuleOptionalParams
  ): Promise<NamespacesGetAuthorizationRuleResponse>;
  /**
   * Gets the primary and secondary connection strings for the Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    options?: NamespacesListKeysOptionalParams
  ): Promise<NamespacesListKeysResponse>;
  /**
   * Regenerates the primary or secondary connection strings for the specified Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param authorizationRuleName The authorization rule name.
   * @param parameters Parameters required to regenerate the connection string.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    parameters: RegenerateAccessKeyParameters,
    options?: NamespacesRegenerateKeysOptionalParams
  ): Promise<NamespacesRegenerateKeysResponse>;
  /**
   * Check the give Namespace name availability.
   * @param parameters Parameters to check availability of the given Namespace name
   * @param options The options parameters.
   */
  checkNameAvailability(
    parameters: CheckNameAvailabilityParameter,
    options?: NamespacesCheckNameAvailabilityOptionalParams
  ): Promise<NamespacesCheckNameAvailabilityResponse>;
}
