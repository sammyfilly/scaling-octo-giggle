/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a list of all action groups in a resource group.
 *
 * @summary Get a list of all action groups in a resource group.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-06-01/examples/listActionGroups.json
 */
async function listActionGroupsAtResourceGroupLevel() {
  const subscriptionId = "187f412d-1758-44d9-b052-169e2564721d";
  const resourceGroupName = "Default-NotificationRules";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.actionGroups.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listActionGroupsAtResourceGroupLevel().catch(console.error);
