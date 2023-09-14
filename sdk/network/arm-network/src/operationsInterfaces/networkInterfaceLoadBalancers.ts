/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LoadBalancer,
  NetworkInterfaceLoadBalancersListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkInterfaceLoadBalancers. */
export interface NetworkInterfaceLoadBalancers {
  /**
   * List all load balancers in a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: NetworkInterfaceLoadBalancersListOptionalParams
  ): PagedAsyncIterableIterator<LoadBalancer>;
}
