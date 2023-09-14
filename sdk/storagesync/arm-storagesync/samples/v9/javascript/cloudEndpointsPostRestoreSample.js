/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftStorageSync } = require("@azure/arm-storagesync");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Post Restore a given CloudEndpoint.
 *
 * @summary Post Restore a given CloudEndpoint.
 * x-ms-original-file: specification/storagesync/resource-manager/Microsoft.StorageSync/stable/2020-09-01/examples/CloudEndpoints_PostRestore.json
 */
async function cloudEndpointsPostRestore() {
  const subscriptionId = "52b8da2f-61e0-4a1f-8dde-336911f367fb";
  const resourceGroupName = "SampleResourceGroup_1";
  const storageSyncServiceName = "SampleStorageSyncService_1";
  const syncGroupName = "SampleSyncGroup_1";
  const cloudEndpointName = "SampleCloudEndpoint_1";
  const parameters = {
    azureFileShareUri:
      "https://hfsazbackupdevintncus2.file.core.test-cint.azure-test.net/sampleFileShare",
    restoreFileSpec: [
      { path: "text1.txt", isdir: false },
      { path: "MyDir", isdir: true },
      { path: "MyDir/SubDir", isdir: false },
      { path: "MyDir/SubDir/File1.pdf", isdir: false },
    ],
    sourceAzureFileShareUri:
      "https://hfsazbackupdevintncus2.file.core.test-cint.azure-test.net/sampleFileShare",
    status: "Succeeded",
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftStorageSync(credential, subscriptionId);
  const result = await client.cloudEndpoints.beginPostRestoreAndWait(
    resourceGroupName,
    storageSyncServiceName,
    syncGroupName,
    cloudEndpointName,
    parameters
  );
  console.log(result);
}

cloudEndpointsPostRestore().catch(console.error);
