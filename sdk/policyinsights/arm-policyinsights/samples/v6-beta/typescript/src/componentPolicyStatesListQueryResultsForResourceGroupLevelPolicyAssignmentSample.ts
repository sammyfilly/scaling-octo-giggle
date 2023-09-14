/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Queries component policy states for the resource group level policy assignment.
 *
 * @summary Queries component policy states for the resource group level policy assignment.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-04-01/examples/ComponentPolicyStates_QueryResourceGroupLevelPolicyAssignmentScope.json
 */
async function queryLatestAtResourceGroupLevelPolicyAssignmentScope() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["POLICYINSIGHTS_RESOURCE_GROUP"] || "myResourceGroup";
  const policyAssignmentName = "myPolicyAssignment";
  const componentPolicyStatesResource = "latest";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.componentPolicyStates.listQueryResultsForResourceGroupLevelPolicyAssignment(
    subscriptionId,
    resourceGroupName,
    policyAssignmentName,
    componentPolicyStatesResource
  );
  console.log(result);
}

async function main() {
  queryLatestAtResourceGroupLevelPolicyAssignmentScope();
}

main().catch(console.error);
