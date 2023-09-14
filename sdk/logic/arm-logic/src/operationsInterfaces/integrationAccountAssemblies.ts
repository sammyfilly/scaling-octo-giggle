/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AssemblyDefinition,
  IntegrationAccountAssembliesListOptionalParams,
  IntegrationAccountAssembliesGetOptionalParams,
  IntegrationAccountAssembliesGetResponse,
  IntegrationAccountAssembliesCreateOrUpdateOptionalParams,
  IntegrationAccountAssembliesCreateOrUpdateResponse,
  IntegrationAccountAssembliesDeleteOptionalParams,
  IntegrationAccountAssembliesListContentCallbackUrlOptionalParams,
  IntegrationAccountAssembliesListContentCallbackUrlResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IntegrationAccountAssemblies. */
export interface IntegrationAccountAssemblies {
  /**
   * List the assemblies for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountAssembliesListOptionalParams
  ): PagedAsyncIterableIterator<AssemblyDefinition>;
  /**
   * Get an assembly for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param assemblyArtifactName The assembly artifact name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    integrationAccountName: string,
    assemblyArtifactName: string,
    options?: IntegrationAccountAssembliesGetOptionalParams
  ): Promise<IntegrationAccountAssembliesGetResponse>;
  /**
   * Create or update an assembly for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param assemblyArtifactName The assembly artifact name.
   * @param assemblyArtifact The assembly artifact.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    integrationAccountName: string,
    assemblyArtifactName: string,
    assemblyArtifact: AssemblyDefinition,
    options?: IntegrationAccountAssembliesCreateOrUpdateOptionalParams
  ): Promise<IntegrationAccountAssembliesCreateOrUpdateResponse>;
  /**
   * Delete an assembly for an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param assemblyArtifactName The assembly artifact name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    integrationAccountName: string,
    assemblyArtifactName: string,
    options?: IntegrationAccountAssembliesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get the content callback url for an integration account assembly.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param assemblyArtifactName The assembly artifact name.
   * @param options The options parameters.
   */
  listContentCallbackUrl(
    resourceGroupName: string,
    integrationAccountName: string,
    assemblyArtifactName: string,
    options?: IntegrationAccountAssembliesListContentCallbackUrlOptionalParams
  ): Promise<IntegrationAccountAssembliesListContentCallbackUrlResponse>;
}
