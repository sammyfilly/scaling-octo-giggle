/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VirtualNetwork,
  VirtualNetworksListOptionalParams,
  VirtualNetworksGetOptionalParams,
  VirtualNetworksGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualNetworks. */
export interface VirtualNetworks {
  /**
   * Return list of virtual networks in location for private cloud
   * @param regionId The region Id (westus, eastus)
   * @param pcName The private cloud name
   * @param resourcePoolName Resource pool used to derive vSphere cluster which contains virtual networks
   * @param options The options parameters.
   */
  list(
    regionId: string,
    pcName: string,
    resourcePoolName: string,
    options?: VirtualNetworksListOptionalParams
  ): PagedAsyncIterableIterator<VirtualNetwork>;
  /**
   * Return virtual network by its name
   * @param regionId The region Id (westus, eastus)
   * @param pcName The private cloud name
   * @param virtualNetworkName virtual network id (vsphereId)
   * @param options The options parameters.
   */
  get(
    regionId: string,
    pcName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksGetOptionalParams
  ): Promise<VirtualNetworksGetResponse>;
}
