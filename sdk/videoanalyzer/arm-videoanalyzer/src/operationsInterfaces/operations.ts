/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationsListOptionalParams,
  OperationsListResponse
} from "../models";

/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists all the Media operations.
   * @param options The options parameters.
   */
  list(options?: OperationsListOptionalParams): Promise<OperationsListResponse>;
}
