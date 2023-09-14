/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all the security connectors in the specified subscription. Use the 'nextLink' property in the response to get the next page of security connectors for the specified subscription.
 *
 * @summary Lists all the security connectors in the specified subscription. Use the 'nextLink' property in the response to get the next page of security connectors for the specified subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-08-01-preview/examples/SecurityConnectors/GetSecurityConnectorsSubscription_example.json
 */
async function listAllSecurityConnectorsOfASpecifiedSubscription() {
  const subscriptionId = "a5caac9c-5c04-49af-b3d0-e204f40345d5";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.securityConnectors.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllSecurityConnectorsOfASpecifiedSubscription().catch(console.error);
