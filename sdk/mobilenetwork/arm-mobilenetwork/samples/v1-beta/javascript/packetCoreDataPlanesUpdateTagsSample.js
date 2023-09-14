/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates packet core data planes tags.
 *
 * @summary Updates packet core data planes tags.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/PacketCoreDataPlaneUpdateTags.json
 */
async function updatePacketCoreDataPlaneTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const packetCoreControlPlaneName = "testPacketCoreCP";
  const packetCoreDataPlaneName = "testPacketCoreDP";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.packetCoreDataPlanes.updateTags(
    resourceGroupName,
    packetCoreControlPlaneName,
    packetCoreDataPlaneName,
    parameters
  );
  console.log(result);
}

updatePacketCoreDataPlaneTags().catch(console.error);
