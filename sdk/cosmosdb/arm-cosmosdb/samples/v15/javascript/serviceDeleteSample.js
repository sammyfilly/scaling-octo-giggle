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
 * This sample demonstrates how to Deletes service with the given serviceName.
 *
 * @summary Deletes service with the given serviceName.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBDataTransferServiceDelete.json
 */
async function dataTransferServiceDelete() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "DataTransfer";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    serviceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes service with the given serviceName.
 *
 * @summary Deletes service with the given serviceName.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBGraphAPIComputeServiceDelete.json
 */
async function graphApiComputeServiceDelete() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "GraphAPICompute";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    serviceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes service with the given serviceName.
 *
 * @summary Deletes service with the given serviceName.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBMaterializedViewsBuilderServiceDelete.json
 */
async function materializedViewsBuilderServiceDelete() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "MaterializedViewsBuilder";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    serviceName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes service with the given serviceName.
 *
 * @summary Deletes service with the given serviceName.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBSqlDedicatedGatewayServiceDelete.json
 */
async function sqlDedicatedGatewayServiceDelete() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "SqlDedicatedGateway";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    serviceName
  );
  console.log(result);
}

async function main() {
  dataTransferServiceDelete();
  graphApiComputeServiceDelete();
  materializedViewsBuilderServiceDelete();
  sqlDedicatedGatewayServiceDelete();
}

main().catch(console.error);
