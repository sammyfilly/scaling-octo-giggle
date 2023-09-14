/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SubscriptionClient } from "@azure/arm-resources-subscriptions";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets details about a specified subscription.
 *
 * @summary Gets details about a specified subscription.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-01-01/examples/GetSubscription.json
 */
async function getASingleSubscription() {
  const subscriptionId = "291bba3f-e0a5-47bc-a099-3bdcb2a50a05";
  const credential = new DefaultAzureCredential();
  const client = new SubscriptionClient(credential);
  const result = await client.subscriptions.get(subscriptionId);
  console.log(result);
}

getASingleSubscription().catch(console.error);
