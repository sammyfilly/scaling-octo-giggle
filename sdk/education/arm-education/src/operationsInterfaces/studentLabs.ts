/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  StudentLabDetails,
  StudentLabsListAllOptionalParams,
  StudentLabsGetOptionalParams,
  StudentLabsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a StudentLabs. */
export interface StudentLabs {
  /**
   * Get a list of all labs associated with the caller of the API.
   * @param options The options parameters.
   */
  listAll(
    options?: StudentLabsListAllOptionalParams
  ): PagedAsyncIterableIterator<StudentLabDetails>;
  /**
   * Get the details for a specified lab associated with the student lab.
   * @param studentLabName Student lab name.
   * @param options The options parameters.
   */
  get(
    studentLabName: string,
    options?: StudentLabsGetOptionalParams
  ): Promise<StudentLabsGetResponse>;
}
