/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB Gremlin database from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB Gremlin database from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBGremlinDatabaseMigrateToAutoscale.json
 */
async function cosmosDbGremlinDatabaseMigrateToAutoscale() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.gremlinResources.beginMigrateGremlinDatabaseToAutoscaleAndWait(
    resourceGroupName,
    accountName,
    databaseName
  );
  console.log(result);
}

async function main() {
  cosmosDbGremlinDatabaseMigrateToAutoscale();
}

main().catch(console.error);
