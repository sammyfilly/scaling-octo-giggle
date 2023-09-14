/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Provisions the specified auto scale v-core based on the configuration specified in the request.
 *
 * @summary Provisions the specified auto scale v-core based on the configuration specified in the request.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/createAutoScaleVCore.json
 */
import { AutoScaleVCore, PowerBIDedicated } from "@azure/arm-powerbidedicated";
import { DefaultAzureCredential } from "@azure/identity";

async function createAutoScaleVCore() {
  const subscriptionId = "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName = "TestRG";
  const vcoreName = "testvcore";
  const vCoreParameters: AutoScaleVCore = {
    capacityLimit: 10,
    capacityObjectId: "a28f00bd-5330-4572-88f1-fa883e074785",
    location: "West US",
    sku: { name: "AutoScale", capacity: 0, tier: "AutoScale" },
    tags: { testKey: "testValue" }
  };
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const result = await client.autoScaleVCores.create(
    resourceGroupName,
    vcoreName,
    vCoreParameters
  );
  console.log(result);
}

createAutoScaleVCore().catch(console.error);
