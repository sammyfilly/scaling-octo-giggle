/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Identity, ManagedServiceIdentityClient } from "@azure/arm-msi";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an identity in the specified subscription and resource group.
 *
 * @summary Create or update an identity in the specified subscription and resource group.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/stable/2023-01-31/examples/IdentityCreate.json
 */
async function identityCreate() {
  const subscriptionId = process.env["MSI_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["MSI_RESOURCE_GROUP"] || "rgName";
  const resourceName = "resourceName";
  const parameters: Identity = {
    location: "eastus",
    tags: { key1: "value1", key2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential, subscriptionId);
  const result = await client.userAssignedIdentities.createOrUpdate(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

async function main() {
  identityCreate();
}

main().catch(console.error);
