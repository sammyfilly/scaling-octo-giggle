/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SiteRecoveryManagementClient } = require("@azure/arm-recoveryservices-siterecovery");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The operation to change the recovery point of a failed over replication protected item.
 *
 * @summary The operation to change the recovery point of a failed over replication protected item.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationProtectedItems_ApplyRecoveryPoint.json
 */
async function changeOrApplyRecoveryPoint() {
  const subscriptionId = "c183865e-6077-46f2-a3b1-deb0f4f4650a";
  const resourceName = "vault1";
  const resourceGroupName = "resourceGroupPS1";
  const fabricName = "cloud1";
  const protectionContainerName = "cloud_6d224fc6-f326-5d35-96de-fbf51efb3179";
  const replicatedProtectedItemName = "f8491e4f-817a-40dd-a90c-af773978c75b";
  const applyRecoveryPointInput = {
    properties: {
      providerSpecificDetails: { instanceType: "HyperVReplicaAzure" },
      recoveryPointId:
        "/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationFabrics/cloud1/replicationProtectionContainers/cloud_6d224fc6-f326-5d35-96de-fbf51efb3179/replicationProtectedItems/f8491e4f-817a-40dd-a90c-af773978c75b/recoveryPoints/e4d05fe9-5dfd-47be-b50b-aad306b2802d",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationProtectedItems.beginApplyRecoveryPointAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    replicatedProtectedItemName,
    applyRecoveryPointInput
  );
  console.log(result);
}

changeOrApplyRecoveryPoint().catch(console.error);
