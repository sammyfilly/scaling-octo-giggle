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
 * This sample demonstrates how to Gets an existing attestation at resource scope.
 *
 * @summary Gets an existing attestation at resource scope.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-09-01/examples/Attestations_GetResourceScope.json
 */
async function getAttestationAtIndividualResourceScope() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/35ee058e-5fa0-414c-8145-3ebb8d09b6e2/resourcegroups/myrg/providers/microsoft.compute/virtualMachines/devVM";
  const attestationName = "790996e6-9871-4b1f-9cd9-ec42cd6ced1e";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.attestations.getAtResource(
    resourceId,
    attestationName
  );
  console.log(result);
}

async function main() {
  getAttestationAtIndividualResourceScope();
}

main().catch(console.error);
