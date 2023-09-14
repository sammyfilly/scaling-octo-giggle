/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates or updates a remediation at management group scope.
 *
 * @summary Creates or updates a remediation at management group scope.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2021-10-01/examples/Remediations_CreateManagementGroupScope.json
 */
import { Remediation, PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function createRemediationAtManagementGroupScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const managementGroupId = "financeMg";
  const remediationName = "storageRemediation";
  const parameters: Remediation = {
    policyAssignmentId:
      "/providers/microsoft.management/managementGroups/financeMg/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5"
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.remediations.createOrUpdateAtManagementGroup(
    managementGroupId,
    remediationName,
    parameters
  );
  console.log(result);
}

createRemediationAtManagementGroupScope().catch(console.error);
