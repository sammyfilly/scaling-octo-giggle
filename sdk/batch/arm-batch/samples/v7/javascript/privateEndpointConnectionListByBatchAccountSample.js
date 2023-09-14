/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all of the private endpoint connections in the specified account.
 *
 * @summary Lists all of the private endpoint connections in the specified account.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-01-01/examples/PrivateEndpointConnectionsList.json
 */
async function listPrivateEndpointConnections() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpointConnectionOperations.listByBatchAccount(
    resourceGroupName,
    accountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPrivateEndpointConnections().catch(console.error);
