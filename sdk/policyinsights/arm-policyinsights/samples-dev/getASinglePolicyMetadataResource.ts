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
 * This sample demonstrates how to Get policy metadata resource.
 *
 * @summary Get policy metadata resource.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyMetadata_GetResource.json
 */
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function getASinglePolicyMetadataResource() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceName = "NIST_SP_800-53_R4_AC-2";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.policyMetadataOperations.getResource(
    resourceName
  );
  console.log(result);
}

getASinglePolicyMetadataResource().catch(console.error);
