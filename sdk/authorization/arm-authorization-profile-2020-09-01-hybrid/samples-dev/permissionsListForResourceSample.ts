/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AuthorizationManagementClient } from "@azure/arm-authorization-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all permissions the caller has for a resource.
 *
 * @summary Gets all permissions the caller has for a resource.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2015-07-01/examples/GetResourcePermissions.json
 */
async function listPermissionsForResource() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName =
    process.env["AUTHORIZATION_RESOURCE_GROUP"] || "rgname";
  const resourceProviderNamespace = "rpnamespace";
  const parentResourcePath = "parentResourcePath";
  const resourceType = "resourceType";
  const resourceName = "resourceName";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.permissions.listForResource(
    resourceGroupName,
    resourceProviderNamespace,
    parentResourcePath,
    resourceType,
    resourceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listPermissionsForResource();
}

main().catch(console.error);
