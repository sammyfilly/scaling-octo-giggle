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
  Server,
  PostgreSQLManagementFlexibleServerClient
} from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a new server.
 *
 * @summary Creates a new server.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/examples/ServerCreatePointInTimeRestore.json
 */
async function createADatabaseAsAPointInTimeRestore() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "testrg";
  const serverName = "pgtestsvc5";
  const parameters: Server = {
    createMode: "PointInTimeRestore",
    location: "westus",
    pointInTimeUTC: new Date("2021-06-27T00:04:59.4078005+00:00"),
    sourceServerResourceId:
      "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.DBforPostgreSQL/flexibleServers/sourcepgservername"
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginCreateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

createADatabaseAsAPointInTimeRestore().catch(console.error);

/**
 * This sample demonstrates how to Creates a new server.
 *
 * @summary Creates a new server.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/examples/ServerCreate.json
 */
async function createANewServer() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "testrg";
  const serverName = "pgtestsvc4";
  const parameters: Server = {
    administratorLogin: "cloudsa",
    administratorLoginPassword: "password",
    availabilityZone: "1",
    backup: { backupRetentionDays: 7, geoRedundantBackup: "Disabled" },
    createMode: "Create",
    highAvailability: { mode: "ZoneRedundant" },
    location: "westus",
    network: {
      delegatedSubnetResourceId:
        "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-vnet-subnet",
      privateDnsZoneArmResourceId:
        "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/testrg/providers/Microsoft.Network/privateDnsZones/test-private-dns-zone.postgres.database.azure.com"
    },
    sku: { name: "Standard_D4s_v3", tier: "GeneralPurpose" },
    storage: { storageSizeGB: 512 },
    tags: { elasticServer: "1" },
    version: "12"
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginCreateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

createANewServer().catch(console.error);
