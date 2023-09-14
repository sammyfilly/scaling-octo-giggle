/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventChannel, EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Asynchronously creates a new event channel with the specified parameters.
 *
 * @summary Asynchronously creates a new event channel with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/EventChannels_CreateOrUpdate.json
 */
async function eventChannelsCreateOrUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerNamespaceName = "examplePartnerNamespaceName1";
  const eventChannelName = "exampleEventChannelName1";
  const eventChannelInfo: EventChannel = {
    destination: {
      azureSubscriptionId: "5b4b650e-28b9-4790-b3ab-ddbd88d727c4",
      partnerTopicName: "examplePartnerTopic1",
      resourceGroup: "examplerg2"
    },
    source: { source: "ContosoCorp.Accounts.User1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventChannels.createOrUpdate(
    resourceGroupName,
    partnerNamespaceName,
    eventChannelName,
    eventChannelInfo
  );
  console.log(result);
}

eventChannelsCreateOrUpdate().catch(console.error);
