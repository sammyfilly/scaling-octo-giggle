/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SendMessage,
  UserSessionsSendMessageOptionalParams,
  DesktopVirtualizationAPIClient
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Send a message to a user.
 *
 * @summary Send a message to a user.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/UserSession_SendMessage_Post.json
 */
async function userSessionSendMessagePost() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const hostPoolName = "hostPool1";
  const sessionHostName = "sessionHost1.microsoft.com";
  const userSessionId = "1";
  const sendMessage: SendMessage = {
    messageBody: "body",
    messageTitle: "title"
  };
  const options: UserSessionsSendMessageOptionalParams = { sendMessage };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.userSessions.sendMessage(
    resourceGroupName,
    hostPoolName,
    sessionHostName,
    userSessionId,
    options
  );
  console.log(result);
}

userSessionSendMessagePost().catch(console.error);
