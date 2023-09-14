/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usage, UsagesListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Usages. */
export interface Usages {
  /**
   * List network usages for a subscription.
   * @param location The location where resource usage is queried.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: UsagesListOptionalParams
  ): PagedAsyncIterableIterator<Usage>;
}
