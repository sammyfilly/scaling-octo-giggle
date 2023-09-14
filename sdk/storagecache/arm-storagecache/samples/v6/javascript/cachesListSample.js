/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Returns all Caches the user has access to under a subscription.
 *
 * @summary Returns all Caches the user has access to under a subscription.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2023-01-01/examples/Caches_List.json
 */
async function cachesList() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.caches.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  cachesList();
}

main().catch(console.error);
