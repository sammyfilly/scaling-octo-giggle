/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CognitiveServicesManagementClient } = require("@azure/arm-cognitiveservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns all the resources of a particular type belonging to a subscription.
 *
 * @summary Returns all the resources of a particular type belonging to a subscription.
 * x-ms-original-file: specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/stable/2022-03-01/examples/ListAccountsBySubscription.json
 */
async function listAccountsBySubscription() {
  const subscriptionId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const credential = new DefaultAzureCredential();
  const client = new CognitiveServicesManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.accounts.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAccountsBySubscription().catch(console.error);
