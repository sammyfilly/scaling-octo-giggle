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
 * This sample demonstrates how to Summarizes policy states for the resources under the subscription.
 *
 * @summary Summarizes policy states for the resources under the subscription.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_SummarizeSubscriptionScope.json
 */
const { PolicyInsightsClient } = require("@azure/arm-policyinsights");
const { DefaultAzureCredential } = require("@azure/identity");

async function summarizeAtSubscriptionScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const top = 5;
  const options = { top: top };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.policyStates.summarizeForSubscription(subscriptionId, options);
  console.log(result);
}

summarizeAtSubscriptionScope().catch(console.error);
