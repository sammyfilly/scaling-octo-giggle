/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Pool, BatchManagementClient } from "@azure/arm-batch";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the properties of an existing pool.
 *
 * @summary Updates the properties of an existing pool.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-10-01/examples/PoolUpdate_EnableAutoScale.json
 */
async function updatePoolEnableAutoscale() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const poolName = "testpool";
  const parameters: Pool = {
    scaleSettings: { autoScale: { formula: "$TargetDedicatedNodes=34" } }
  };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.poolOperations.update(
    resourceGroupName,
    accountName,
    poolName,
    parameters
  );
  console.log(result);
}

updatePoolEnableAutoscale().catch(console.error);

/**
 * This sample demonstrates how to Updates the properties of an existing pool.
 *
 * @summary Updates the properties of an existing pool.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-10-01/examples/PoolUpdate_OtherProperties.json
 */
async function updatePoolOtherProperties() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const poolName = "testpool";
  const parameters: Pool = {
    applicationPackages: [
      {
        id:
          "/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/sampleacct/pools/testpool/applications/app_1234"
      },
      {
        id:
          "/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/sampleacct/pools/testpool/applications/app_5678",
        version: "1.0"
      }
    ],
    certificates: [
      {
        id:
          "/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/sampleacct/pools/testpool/certificates/sha1-1234567",
        storeLocation: "LocalMachine",
        storeName: "MY"
      }
    ],
    metadata: [{ name: "key1", value: "value1" }],
    targetNodeCommunicationMode: "Simplified"
  };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.poolOperations.update(
    resourceGroupName,
    accountName,
    poolName,
    parameters
  );
  console.log(result);
}

updatePoolOtherProperties().catch(console.error);

/**
 * This sample demonstrates how to Updates the properties of an existing pool.
 *
 * @summary Updates the properties of an existing pool.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-10-01/examples/PoolUpdate_RemoveStartTask.json
 */
async function updatePoolRemoveStartTask() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const poolName = "testpool";
  const parameters: Pool = { startTask: {} };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.poolOperations.update(
    resourceGroupName,
    accountName,
    poolName,
    parameters
  );
  console.log(result);
}

updatePoolRemoveStartTask().catch(console.error);

/**
 * This sample demonstrates how to Updates the properties of an existing pool.
 *
 * @summary Updates the properties of an existing pool.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-10-01/examples/PoolUpdate_ResizePool.json
 */
async function updatePoolResizePool() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const poolName = "testpool";
  const parameters: Pool = {
    scaleSettings: {
      fixedScale: {
        nodeDeallocationOption: "TaskCompletion",
        resizeTimeout: "PT8M",
        targetDedicatedNodes: 5,
        targetLowPriorityNodes: 0
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.poolOperations.update(
    resourceGroupName,
    accountName,
    poolName,
    parameters
  );
  console.log(result);
}

updatePoolResizePool().catch(console.error);
