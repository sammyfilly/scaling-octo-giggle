/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MetadataModel,
  MetadataListOptionalParams,
  MetadataGetOptionalParams,
  MetadataGetResponse,
  MetadataDeleteOptionalParams,
  MetadataCreateOptionalParams,
  MetadataCreateResponse,
  MetadataPatch,
  MetadataUpdateOptionalParams,
  MetadataUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Metadata. */
export interface Metadata {
  /**
   * List of all metadata
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: MetadataListOptionalParams
  ): PagedAsyncIterableIterator<MetadataModel>;
  /**
   * Get a Metadata.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param metadataName The Metadata name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    metadataName: string,
    options?: MetadataGetOptionalParams
  ): Promise<MetadataGetResponse>;
  /**
   * Delete a Metadata.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param metadataName The Metadata name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    metadataName: string,
    options?: MetadataDeleteOptionalParams
  ): Promise<void>;
  /**
   * Create a Metadata.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param metadataName The Metadata name.
   * @param metadata Metadata resource.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    metadataName: string,
    metadata: MetadataModel,
    options?: MetadataCreateOptionalParams
  ): Promise<MetadataCreateResponse>;
  /**
   * Update an existing Metadata.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param metadataName The Metadata name.
   * @param metadataPatch Partial metadata request.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    metadataName: string,
    metadataPatch: MetadataPatch,
    options?: MetadataUpdateOptionalParams
  ): Promise<MetadataUpdateResponse>;
}
