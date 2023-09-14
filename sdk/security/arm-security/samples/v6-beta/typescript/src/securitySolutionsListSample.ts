/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of Security Solutions for the subscription.
 *
 * @summary Gets a list of Security Solutions for the subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/SecuritySolutions/GetSecuritySolutionsSubscription_example.json
 */
async function getSecuritySolutions() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.securitySolutions.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSecuritySolutions().catch(console.error);
