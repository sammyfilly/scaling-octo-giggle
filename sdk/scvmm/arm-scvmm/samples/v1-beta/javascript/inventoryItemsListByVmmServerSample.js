/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { Scvmm } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns the list of inventoryItems in the given VMMServer.
 *
 * @summary Returns the list of inventoryItems in the given VMMServer.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/preview/2020-06-05-preview/examples/ListInventoryItemsByVMMServer.json
 */
async function inventoryItemsListByVmmServer() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vmmServerName = "ContosoVMMServer";
  const credential = new DefaultAzureCredential();
  const client = new Scvmm(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.inventoryItems.listByVMMServer(resourceGroupName, vmmServerName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

inventoryItemsListByVmmServer().catch(console.error);
