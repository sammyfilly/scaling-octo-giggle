/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists the available Event Hubs Clusters within an ARM resource group
 *
 * @summary Lists the available Event Hubs Clusters within an ARM resource group
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClustersListByResourceGroup.json
 */
async function clustersListByResourceGroup() {
  const subscriptionId = "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName = "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.clusters.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

clustersListByResourceGroup().catch(console.error);
