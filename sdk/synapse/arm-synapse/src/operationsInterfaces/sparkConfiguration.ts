/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SparkConfigurationGetOptionalParams,
  SparkConfigurationGetResponse
} from "../models";

/** Interface representing a SparkConfiguration. */
export interface SparkConfiguration {
  /**
   * Get SparkConfiguration by name in a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sparkConfigurationName SparkConfiguration name
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sparkConfigurationName: string,
    workspaceName: string,
    options?: SparkConfigurationGetOptionalParams
  ): Promise<SparkConfigurationGetResponse>;
}
