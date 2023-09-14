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
 * This sample demonstrates how to Checks that the resource name is valid and is not already in use.
 *
 * @summary Checks that the resource name is valid and is not already in use.
 * x-ms-original-file: specification/signalr/resource-manager/Microsoft.SignalRService/stable/2021-10-01/examples/SignalR_CheckNameAvailability.json
 */
import {
  NameAvailabilityParameters,
  SignalRManagementClient
} from "@azure/arm-signalr";
import { DefaultAzureCredential } from "@azure/identity";

async function signalRCheckNameAvailability() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const parameters: NameAvailabilityParameters = {
    name: "mySignalRService",
    type: "Microsoft.SignalRService/SignalR"
  };
  const credential = new DefaultAzureCredential();
  const client = new SignalRManagementClient(credential, subscriptionId);
  const result = await client.signalR.checkNameAvailability(
    location,
    parameters
  );
  console.log(result);
}

signalRCheckNameAvailability().catch(console.error);
