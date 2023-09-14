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

/**
 * This sample demonstrates how to Gets an existing attestation at resource group scope.
 *
 * @summary Gets an existing attestation at resource group scope.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2021-01-01/examples/Attestations_GetResourceGroupScope.json
 */
async function getAttestationAtResourceGroupScope() {
  const subscriptionId = "35ee058e-5fa0-414c-8145-3ebb8d09b6e2";
  const resourceGroupName = "myRg";
  const attestationName = "790996e6-9871-4b1f-9cd9-ec42cd6ced1e";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.attestations.getAtResourceGroup(
    resourceGroupName,
    attestationName
  );
  console.log(result);
}

getAttestationAtResourceGroupScope().catch(console.error);
