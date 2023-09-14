/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a Fleet.
 *
 * @summary Creates or updates a Fleet.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2022-09-02-preview/examples/Fleets_CreateOrUpdate.json
 */
async function createsOrUpdateAFleetResource() {
  const subscriptionId = process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName = process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet-1";
  const parameters = {
    hubProfile: { dnsPrefix: "dnsprefix1" },
    location: "East US",
    tags: { archv2: "", tier: "production" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fleetName,
    parameters
  );
  console.log(result);
}

async function main() {
  createsOrUpdateAFleetResource();
}

main().catch(console.error);
