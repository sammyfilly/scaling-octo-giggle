/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PostgreSQLManagementFlexibleServerClient } from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets information about a server.
 *
 * @summary Gets information about a server.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/examples/ServerGet.json
 */
async function serverGet() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "testrg";
  const serverName = "pgtestsvc1";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.get(resourceGroupName, serverName);
  console.log(result);
}

serverGet().catch(console.error);

/**
 * This sample demonstrates how to Gets information about a server.
 *
 * @summary Gets information about a server.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/examples/ServerGetWithVnet.json
 */
async function serverGetWithVnet() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "testrg";
  const serverName = "pgtestsvc4";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.get(resourceGroupName, serverName);
  console.log(result);
}

serverGetWithVnet().catch(console.error);
