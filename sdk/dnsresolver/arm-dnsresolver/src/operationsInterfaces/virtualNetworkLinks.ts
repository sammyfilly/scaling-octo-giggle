/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualNetworkLink,
  VirtualNetworkLinksListOptionalParams,
  VirtualNetworkLinksCreateOrUpdateOptionalParams,
  VirtualNetworkLinksCreateOrUpdateResponse,
  VirtualNetworkLinkPatch,
  VirtualNetworkLinksUpdateOptionalParams,
  VirtualNetworkLinksUpdateResponse,
  VirtualNetworkLinksDeleteOptionalParams,
  VirtualNetworkLinksGetOptionalParams,
  VirtualNetworkLinksGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualNetworkLinks. */
export interface VirtualNetworkLinks {
  /**
   * Lists virtual network links to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: VirtualNetworkLinksListOptionalParams
  ): PagedAsyncIterableIterator<VirtualNetworkLink>;
  /**
   * Creates or updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualNetworkLinksCreateOrUpdateResponse>,
      VirtualNetworkLinksCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksCreateOrUpdateOptionalParams
  ): Promise<VirtualNetworkLinksCreateOrUpdateResponse>;
  /**
   * Updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLinkPatch,
    options?: VirtualNetworkLinksUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualNetworkLinksUpdateResponse>,
      VirtualNetworkLinksUpdateResponse
    >
  >;
  /**
   * Updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLinkPatch,
    options?: VirtualNetworkLinksUpdateOptionalParams
  ): Promise<VirtualNetworkLinksUpdateResponse>;
  /**
   * Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be
   * undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be
   * undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets properties of a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksGetOptionalParams
  ): Promise<VirtualNetworkLinksGetResponse>;
}
