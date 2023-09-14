/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NotificationRequestBody, MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Send test notifications to a set of provided receivers
 *
 * @summary Send test notifications to a set of provided receivers
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-06-01/examples/postTestNotificationsAtResourceGroupLevel.json
 */
async function createNotificationsAtResourceGroupLevel() {
  const subscriptionId = "187f412d-1758-44d9-b052-169e2564721d";
  const resourceGroupName = "Default-TestNotifications";
  const notificationRequest: NotificationRequestBody = {
    alertType: "budget",
    armRoleReceivers: [
      {
        name: "ArmRole-Common",
        roleId: "11111111-1111-1111-1111-111111111111",
        useCommonAlertSchema: true
      },
      {
        name: "ArmRole-nonCommon",
        roleId: "11111111-1111-1111-1111-111111111111",
        useCommonAlertSchema: false
      }
    ],
    automationRunbookReceivers: [
      {
        name: "testRunbook",
        automationAccountId:
          "/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/runbookTest/providers/Microsoft.Automation/automationAccounts/runbooktest",
        isGlobalRunbook: false,
        runbookName: "Sample runbook",
        serviceUri: "http://test.me",
        useCommonAlertSchema: true,
        webhookResourceId:
          "/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/runbookTest/providers/Microsoft.Automation/automationAccounts/runbooktest/webhooks/Alert1510184037084"
      }
    ],
    azureAppPushReceivers: [
      { name: "Sample azureAppPush", emailAddress: "johndoe@email.com" }
    ],
    azureFunctionReceivers: [
      {
        name: "Sample azureFunction",
        functionAppResourceId:
          "/subscriptions/5def922a-3ed4-49c1-b9fd-05ec533819a3/resourceGroups/aznsTest/providers/Microsoft.Web/sites/testFunctionApp",
        functionName: "HttpTriggerCSharp1",
        httpTriggerUrl: "http://test.me",
        useCommonAlertSchema: true
      }
    ],
    emailReceivers: [
      {
        name: "John Doe's email",
        emailAddress: "johndoe@email.com",
        useCommonAlertSchema: false
      },
      {
        name: "Jane Smith's email",
        emailAddress: "janesmith@email.com",
        useCommonAlertSchema: true
      }
    ],
    eventHubReceivers: [
      {
        name: "Sample eventHub",
        eventHubName: "testEventHub",
        eventHubNameSpace: "testEventHubNameSpace",
        subscriptionId: "187f412d-1758-44d9-b052-169e2564721d",
        tenantId: "68a4459a-ccb8-493c-b9da-dd30457d1b84"
      }
    ],
    itsmReceivers: [
      {
        name: "Sample itsm",
        connectionId: "a3b9076c-ce8e-434e-85b4-aff10cb3c8f1",
        region: "westcentralus",
        ticketConfiguration:
          '{"PayloadRevision":0,"WorkItemType":"Incident","UseTemplate":false,"WorkItemData":"{}","CreateOneWIPerCI":false}',
        workspaceId:
          "5def922a-3ed4-49c1-b9fd-05ec533819a3|55dfd1f8-7e59-4f89-bf56-4c82f5ace23c"
      }
    ],
    logicAppReceivers: [
      {
        name: "Sample logicApp",
        callbackUrl:
          "https://prod-27.northcentralus.logic.azure.com/workflows/68e572e818e5457ba898763b7db90877/triggers/manual/paths/invoke/azns/test?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Abpsb72UYJxPPvmDo937uzofupO5r_vIeWEx7KVHo7w",
        resourceId:
          "/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/LogicApp/providers/Microsoft.Logic/workflows/testLogicApp",
        useCommonAlertSchema: false
      }
    ],
    smsReceivers: [
      {
        name: "John Doe's mobile",
        countryCode: "1",
        phoneNumber: "1234567890"
      },
      {
        name: "Jane Smith's mobile",
        countryCode: "1",
        phoneNumber: "0987654321"
      }
    ],
    voiceReceivers: [
      { name: "Sample voice", countryCode: "1", phoneNumber: "1234567890" }
    ],
    webhookReceivers: [
      {
        name: "Sample webhook 1",
        serviceUri: "http://www.example.com/webhook1",
        useCommonAlertSchema: true
      },
      {
        name: "Sample webhook 2",
        identifierUri:
          "http://someidentifier/d7811ba3-7996-4a93-99b6-6b2f3f355f8a",
        objectId: "d3bb868c-fe44-452c-aa26-769a6538c808",
        serviceUri: "http://www.example.com/webhook2",
        tenantId: "68a4459a-ccb8-493c-b9da-dd30457d1b84",
        useAadAuth: true,
        useCommonAlertSchema: true
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.actionGroups.beginCreateNotificationsAtResourceGroupLevelAndWait(
    resourceGroupName,
    notificationRequest
  );
  console.log(result);
}

createNotificationsAtResourceGroupLevel().catch(console.error);
