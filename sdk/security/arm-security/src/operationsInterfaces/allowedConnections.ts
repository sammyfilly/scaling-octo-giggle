/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AllowedConnectionsResource,
  AllowedConnectionsListOptionalParams,
  AllowedConnectionsListByHomeRegionOptionalParams,
  ConnectionType,
  AllowedConnectionsGetOptionalParams,
  AllowedConnectionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AllowedConnections. */
export interface AllowedConnections {
  /**
   * Gets the list of all possible traffic between resources for the subscription
   * @param options The options parameters.
   */
  list(
    options?: AllowedConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<AllowedConnectionsResource>;
  /**
   * Gets the list of all possible traffic between resources for the subscription and location.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  listByHomeRegion(
    ascLocation: string,
    options?: AllowedConnectionsListByHomeRegionOptionalParams
  ): PagedAsyncIterableIterator<AllowedConnectionsResource>;
  /**
   * Gets the list of all possible traffic between resources for the subscription and location, based on
   * connection type.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param connectionType The type of allowed connections (Internal, External)
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ascLocation: string,
    connectionType: ConnectionType,
    options?: AllowedConnectionsGetOptionalParams
  ): Promise<AllowedConnectionsGetResponse>;
}
