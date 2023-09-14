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
 * This sample demonstrates how to Lists the Private DNS zones in all resource groups in a subscription.
 *
 * @summary Lists the Private DNS zones in all resource groups in a subscription.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2020-06-01/examples/PrivateZoneListInSubscription.json
 */
import { PrivateDnsManagementClient } from "@azure/arm-privatedns";
import { DefaultAzureCredential } from "@azure/identity";

async function getPrivateDnsZoneBySubscription() {
  const subscriptionId = "subscriptionId";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateZones.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getPrivateDnsZoneBySubscription().catch(console.error);
