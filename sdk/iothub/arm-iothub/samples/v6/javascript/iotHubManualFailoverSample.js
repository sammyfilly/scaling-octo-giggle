/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IotHubClient } = require("@azure/arm-iothub");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover
 *
 * @summary Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/IotHub_ManualFailover.json
 */
async function iotHubManualFailover() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const iotHubName = "testHub";
  const resourceGroupName = "myResourceGroup";
  const failoverInput = { failoverRegion: "testHub" };
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHub.beginManualFailoverAndWait(
    iotHubName,
    resourceGroupName,
    failoverInput
  );
  console.log(result);
}

iotHubManualFailover().catch(console.error);
