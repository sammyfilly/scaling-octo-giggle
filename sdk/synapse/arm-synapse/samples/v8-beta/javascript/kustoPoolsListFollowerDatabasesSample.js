/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool.
 *
 * @summary Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolFollowerDatabasesList.json
 */
async function kustoPoolListFollowerDatabases() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const workspaceName = "kustorptest";
  const kustoPoolName = "kustoclusterrptest4";
  const resourceGroupName = "kustorptest";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.kustoPools.listFollowerDatabases(
    workspaceName,
    kustoPoolName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

kustoPoolListFollowerDatabases().catch(console.error);
