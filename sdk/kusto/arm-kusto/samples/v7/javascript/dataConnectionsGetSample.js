/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns a data connection.
 *
 * @summary Returns a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-02-01/examples/KustoDataConnectionsEventGridGet.json
 */
async function kustoDataConnectionsEventGridGet() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const dataConnectionName = "dataConnectionTest";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.get(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName
  );
  console.log(result);
}

kustoDataConnectionsEventGridGet().catch(console.error);

/**
 * This sample demonstrates how to Returns a data connection.
 *
 * @summary Returns a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-02-01/examples/KustoDataConnectionsGet.json
 */
async function kustoDataConnectionsGet() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const dataConnectionName = "dataConnectionTest";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.get(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName
  );
  console.log(result);
}

kustoDataConnectionsGet().catch(console.error);
