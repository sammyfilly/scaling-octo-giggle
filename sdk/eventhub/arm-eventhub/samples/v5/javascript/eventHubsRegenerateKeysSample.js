/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventHubManagementClient } = require("@azure/arm-eventhub");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Regenerates the ACS and SAS connection strings for the Event Hub.
 *
 * @summary Regenerates the ACS and SAS connection strings for the Event Hub.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubAuthorizationRuleRegenerateKey.json
 */
async function eventHubAuthorizationRuleRegenerateKey() {
  const subscriptionId = "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName = "ArunMonocle";
  const namespaceName = "sdk-namespace-960";
  const eventHubName = "sdk-EventHub-532";
  const authorizationRuleName = "sdk-Authrules-1534";
  const parameters = { keyType: "PrimaryKey" };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.eventHubs.regenerateKeys(
    resourceGroupName,
    namespaceName,
    eventHubName,
    authorizationRuleName,
    parameters
  );
  console.log(result);
}

eventHubAuthorizationRuleRegenerateKey().catch(console.error);
