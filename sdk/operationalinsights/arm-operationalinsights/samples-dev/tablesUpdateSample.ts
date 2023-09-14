/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Table,
  OperationalInsightsManagementClient
} from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update a Log Analytics workspace table.
 *
 * @summary Update a Log Analytics workspace table.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/preview/2021-12-01-preview/examples/TablesUpsert.json
 */
async function tablesUpsert() {
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const resourceGroupName = "oiautorest6685";
  const workspaceName = "oiautorest6685";
  const tableName = "AzureNetworkFlow";
  const parameters: Table = {
    schema: {
      name: "AzureNetworkFlow",
      columns: [{ name: "MyNewColumn", type: "guid" }]
    },
    retentionInDays: 45,
    totalRetentionInDays: 70
  };
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.tables.beginUpdateAndWait(
    resourceGroupName,
    workspaceName,
    tableName,
    parameters
  );
  console.log(result);
}

tablesUpsert().catch(console.error);
