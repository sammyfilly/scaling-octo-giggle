/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsObject, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates a local network gateway tags.
 *
 * @summary Updates a local network gateway tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/LocalNetworkGatewayUpdateTags.json
 */
async function updateLocalNetworkGatewayTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const localNetworkGatewayName = "lgw";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.localNetworkGateways.updateTags(
    resourceGroupName,
    localNetworkGatewayName,
    parameters
  );
  console.log(result);
}

updateLocalNetworkGatewayTags().catch(console.error);
