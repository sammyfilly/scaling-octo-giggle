/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LocationGetResult,
  LocationsListOptionalParams,
  LocationsGetOptionalParams,
  LocationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Locations. */
export interface Locations {
  /**
   * List Cosmos DB locations and their properties
   * @param options The options parameters.
   */
  list(
    options?: LocationsListOptionalParams
  ): PagedAsyncIterableIterator<LocationGetResult>;
  /**
   * Get the properties of an existing Cosmos DB location
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param options The options parameters.
   */
  get(
    location: string,
    options?: LocationsGetOptionalParams
  ): Promise<LocationsGetResponse>;
}
