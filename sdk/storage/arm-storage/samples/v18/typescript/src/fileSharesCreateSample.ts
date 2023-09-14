/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FileShare, StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 *
 * @summary Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-09-01/examples/FileSharesPut_NFS.json
 */
async function createNfsShares() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res346";
  const accountName = "sto666";
  const shareName = "share1235";
  const fileShare: FileShare = { enabledProtocols: "NFS" };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileShares.create(
    resourceGroupName,
    accountName,
    shareName,
    fileShare
  );
  console.log(result);
}

createNfsShares().catch(console.error);

/**
 * This sample demonstrates how to Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 *
 * @summary Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-09-01/examples/FileSharesPut.json
 */
async function putShares() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const shareName = "share6185";
  const fileShare: FileShare = {};
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileShares.create(
    resourceGroupName,
    accountName,
    shareName,
    fileShare
  );
  console.log(result);
}

putShares().catch(console.error);

/**
 * This sample demonstrates how to Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 *
 * @summary Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-09-01/examples/FileSharesPut_AccessTier.json
 */
async function putSharesWithAccessTier() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res346";
  const accountName = "sto666";
  const shareName = "share1235";
  const fileShare: FileShare = { accessTier: "Hot" };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileShares.create(
    resourceGroupName,
    accountName,
    shareName,
    fileShare
  );
  console.log(result);
}

putSharesWithAccessTier().catch(console.error);
