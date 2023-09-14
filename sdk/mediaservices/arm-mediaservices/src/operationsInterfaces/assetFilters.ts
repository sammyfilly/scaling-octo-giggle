/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AssetFilter,
  AssetFiltersListOptionalParams,
  AssetFiltersGetOptionalParams,
  AssetFiltersGetResponse,
  AssetFiltersCreateOrUpdateOptionalParams,
  AssetFiltersCreateOrUpdateResponse,
  AssetFiltersDeleteOptionalParams,
  AssetFiltersUpdateOptionalParams,
  AssetFiltersUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AssetFilters. */
export interface AssetFilters {
  /**
   * List Asset Filters associated with the specified Asset.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: AssetFiltersListOptionalParams
  ): PagedAsyncIterableIterator<AssetFilter>;
  /**
   * Get the details of an Asset Filter associated with the specified Asset.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    filterName: string,
    options?: AssetFiltersGetOptionalParams
  ): Promise<AssetFiltersGetResponse>;
  /**
   * Creates or updates an Asset Filter associated with the specified Asset.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    filterName: string,
    parameters: AssetFilter,
    options?: AssetFiltersCreateOrUpdateOptionalParams
  ): Promise<AssetFiltersCreateOrUpdateResponse>;
  /**
   * Deletes an Asset Filter associated with the specified Asset.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    filterName: string,
    options?: AssetFiltersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an existing Asset Filter associated with the specified Asset.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    filterName: string,
    parameters: AssetFilter,
    options?: AssetFiltersUpdateOptionalParams
  ): Promise<AssetFiltersUpdateResponse>;
}
