/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List event subscriptions that belong to a specific partner topic.
 *
 * @summary List event subscriptions that belong to a specific partner topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/PartnerTopicEventSubscriptions_ListByPartnerTopic.json
 */
async function partnerTopicEventSubscriptionsListByPartnerTopic() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerTopicName = "examplePartnerTopic1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.partnerTopicEventSubscriptions.listByPartnerTopic(
    resourceGroupName,
    partnerTopicName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

partnerTopicEventSubscriptionsListByPartnerTopic().catch(console.error);
