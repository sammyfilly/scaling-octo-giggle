/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Sets a database's long term retention policy.
 *
 * @summary Sets a database's long term retention policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/LongTermRetentionPolicyCreateOrUpdate.json
 */
async function createOrUpdateTheLongTermRetentionPolicyForTheDatabase() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "resourceGroup";
  const serverName = "testserver";
  const databaseName = "testDatabase";
  const policyName = "default";
  const parameters = {
    monthlyRetention: "P1Y",
    weekOfYear: 5,
    weeklyRetention: "P1M",
    yearlyRetention: "P5Y",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.longTermRetentionPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    policyName,
    parameters
  );
  console.log(result);
}

createOrUpdateTheLongTermRetentionPolicyForTheDatabase().catch(console.error);
