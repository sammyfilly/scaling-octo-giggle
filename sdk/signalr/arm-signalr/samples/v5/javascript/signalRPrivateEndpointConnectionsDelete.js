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
 * This sample demonstrates how to Delete the specified private endpoint connection
 *
 * @summary Delete the specified private endpoint connection
 * x-ms-original-file: specification/signalr/resource-manager/Microsoft.SignalRService/stable/2021-10-01/examples/SignalRPrivateEndpointConnections_Delete.json
 */
const { SignalRManagementClient } = require("@azure/arm-signalr");
const { DefaultAzureCredential } = require("@azure/identity");

async function signalRPrivateEndpointConnectionsDelete() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const privateEndpointConnectionName = "mysignalrservice.1fa229cd-bf3f-47f0-8c49-afb36723997e";
  const resourceGroupName = "myResourceGroup";
  const resourceName = "mySignalRService";
  const credential = new DefaultAzureCredential();
  const client = new SignalRManagementClient(credential, subscriptionId);
  const result = await client.signalRPrivateEndpointConnections.beginDeleteAndWait(
    privateEndpointConnectionName,
    resourceGroupName,
    resourceName
  );
  console.log(result);
}

signalRPrivateEndpointConnectionsDelete().catch(console.error);
