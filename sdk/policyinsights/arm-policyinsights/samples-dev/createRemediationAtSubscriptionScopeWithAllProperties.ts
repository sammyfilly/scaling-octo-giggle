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
 * This sample demonstrates how to Creates or updates a remediation at subscription scope.
 *
 * @summary Creates or updates a remediation at subscription scope.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2021-10-01/examples/Remediations_CreateSubscriptionScope_AllProperties.json
 */
import { Remediation, PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function createRemediationAtSubscriptionScopeWithAllProperties() {
  const subscriptionId = "35ee058e-5fa0-414c-8145-3ebb8d09b6e2";
  const remediationName = "storageRemediation";
  const parameters: Remediation = {
    failureThreshold: { percentage: 0.1 },
    filters: { locations: ["eastus", "westus"] },
    parallelDeployments: 6,
    policyAssignmentId:
      "/subscriptions/35ee058e-5fa0-414c-8145-3ebb8d09b6e2/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5",
    policyDefinitionReferenceId: "8c8fa9e4",
    resourceCount: 42,
    resourceDiscoveryMode: "ReEvaluateCompliance"
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.remediations.createOrUpdateAtSubscription(
    remediationName,
    parameters
  );
  console.log(result);
}

createRemediationAtSubscriptionScopeWithAllProperties().catch(console.error);
