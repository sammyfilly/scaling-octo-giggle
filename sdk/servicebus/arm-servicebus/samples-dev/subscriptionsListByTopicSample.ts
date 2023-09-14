/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceBusManagementClient } from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List all the subscriptions under a specified topic.
 *
 * @summary List all the subscriptions under a specified topic.
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/stable/2021-11-01/examples/Subscriptions/SBSubscriptionListByTopic.json
 */
async function subscriptionListByTopic() {
  const subscriptionId = "5{Subscriptionid}";
  const resourceGroupName = "ResourceGroup";
  const namespaceName = "sdk-Namespace-1349";
  const topicName = "sdk-Topics-8740";
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.subscriptions.listByTopic(
    resourceGroupName,
    namespaceName,
    topicName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

subscriptionListByTopic().catch(console.error);
