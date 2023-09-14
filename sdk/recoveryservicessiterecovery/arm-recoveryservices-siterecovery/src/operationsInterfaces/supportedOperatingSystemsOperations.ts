/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SupportedOperatingSystemsGetOptionalParams,
  SupportedOperatingSystemsGetResponse
} from "../models";

/** Interface representing a SupportedOperatingSystemsOperations. */
export interface SupportedOperatingSystemsOperations {
  /**
   * Gets the data of supported operating systems by SRS.
   * @param options The options parameters.
   */
  get(
    options?: SupportedOperatingSystemsGetOptionalParams
  ): Promise<SupportedOperatingSystemsGetResponse>;
}
