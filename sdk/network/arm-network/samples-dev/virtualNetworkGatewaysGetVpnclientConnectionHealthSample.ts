/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group.
 *
 * @summary Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualNetworkGatewayGetVpnclientConnectionHealth.json
 */
async function getVirtualNetworkGatewayVpnclientConnectionHealth() {
  const subscriptionId = "subid";
  const resourceGroupName = "p2s-vnet-test";
  const virtualNetworkGatewayName = "vpnp2sgw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginGetVpnclientConnectionHealthAndWait(
    resourceGroupName,
    virtualNetworkGatewayName
  );
  console.log(result);
}

getVirtualNetworkGatewayVpnclientConnectionHealth().catch(console.error);
