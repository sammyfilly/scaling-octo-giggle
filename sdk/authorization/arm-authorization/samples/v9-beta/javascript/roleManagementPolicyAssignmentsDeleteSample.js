/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AuthorizationManagementClient } = require("@azure/arm-authorization");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a role management policy assignment
 *
 * @summary Delete a role management policy assignment
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/DeleteRoleManagementPolicyAssignment.json
 */
async function getConfigurations() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const scope =
    "providers/Microsoft.Subscription/subscriptions/129ff972-28f8-46b8-a726-e497be039368";
  const roleManagementPolicyAssignmentName =
    "b959d571-f0b5-4042-88a7-01be6cb22db9_a1705bd2-3a8f-45a5-8683-466fcfd5cc24";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleManagementPolicyAssignments.delete(
    scope,
    roleManagementPolicyAssignmentName
  );
  console.log(result);
}

async function main() {
  getConfigurations();
}

main().catch(console.error);
