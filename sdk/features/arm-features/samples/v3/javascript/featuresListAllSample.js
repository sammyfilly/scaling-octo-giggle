/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { FeatureClient } = require("@azure/arm-features");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets all the preview features that are available through AFEC for the subscription.
 *
 * @summary Gets all the preview features that are available through AFEC for the subscription.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Features/stable/2021-07-01/examples/listSubscriptionFeatures.json
 */
async function listSubscriptionFeatures() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new FeatureClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.features.listAll()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSubscriptionFeatures().catch(console.error);
