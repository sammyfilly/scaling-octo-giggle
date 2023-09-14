/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ResourceSku, SkusListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Skus. */
export interface Skus {
  /**
   * Lists all of the available skus of the Microsoft.AppPlatform provider.
   * @param options The options parameters.
   */
  list(
    options?: SkusListOptionalParams
  ): PagedAsyncIterableIterator<ResourceSku>;
}
