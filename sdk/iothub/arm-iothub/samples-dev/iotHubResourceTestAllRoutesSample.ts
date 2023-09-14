/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TestAllRoutesInput, IotHubClient } from "@azure/arm-iothub";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Test all routes configured in this Iot Hub
 *
 * @summary Test all routes configured in this Iot Hub
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_testallroutes.json
 */
async function iotHubResourceTestAllRoutes() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const iotHubName = "testHub";
  const resourceGroupName = "myResourceGroup";
  const input: TestAllRoutesInput = {
    message: {
      appProperties: { key1: "value1" },
      body: "Body of message",
      systemProperties: { key1: "value1" }
    },
    routingSource: "DeviceMessages"
  };
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.testAllRoutes(
    iotHubName,
    resourceGroupName,
    input
  );
  console.log(result);
}

iotHubResourceTestAllRoutes().catch(console.error);
