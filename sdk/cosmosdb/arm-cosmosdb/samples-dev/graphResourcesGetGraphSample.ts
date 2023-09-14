/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the Graph resource under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the Graph resource under an existing Azure Cosmos DB database account with the provided name.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBGraphResourceGet.json
 */
async function cosmosDbSqlDatabaseGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const graphName = "graphName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.graphResources.getGraph(
    resourceGroupName,
    accountName,
    graphName
  );
  console.log(result);
}

cosmosDbSqlDatabaseGet().catch(console.error);
