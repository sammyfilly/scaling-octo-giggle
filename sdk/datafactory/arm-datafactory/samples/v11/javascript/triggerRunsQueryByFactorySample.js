/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataFactoryManagementClient } = require("@azure/arm-datafactory");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Query trigger runs.
 *
 * @summary Query trigger runs.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/TriggerRuns_QueryByFactory.json
 */
async function triggerRunsQueryByFactory() {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const filterParameters = {
    filters: [{ operand: "TriggerName", operator: "Equals", values: ["exampleTrigger"] }],
    lastUpdatedAfter: new Date("2018-06-16T00:36:44.3345758Z"),
    lastUpdatedBefore: new Date("2018-06-16T00:49:48.3686473Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.triggerRuns.queryByFactory(
    resourceGroupName,
    factoryName,
    filterParameters
  );
  console.log(result);
}

async function main() {
  triggerRunsQueryByFactory();
}

main().catch(console.error);
