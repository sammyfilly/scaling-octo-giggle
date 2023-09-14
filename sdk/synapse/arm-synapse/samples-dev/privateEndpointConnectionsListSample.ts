/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists private endpoint connection in workspace.
 *
 * @summary Lists private endpoint connection in workspace.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/ListPrivateEndpointConnections.json
 */
async function listPrivateEndpointConnectionsInWorkspace() {
  const subscriptionId = "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpointConnections.list(
    resourceGroupName,
    workspaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPrivateEndpointConnectionsInWorkspace().catch(console.error);
