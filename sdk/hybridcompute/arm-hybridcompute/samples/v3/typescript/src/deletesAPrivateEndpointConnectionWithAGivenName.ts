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
 * This sample demonstrates how to Deletes a private endpoint connection with a given name.
 *
 * @summary Deletes a private endpoint connection with a given name.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/stable/2021-05-20/examples/PrivateEndpointConnectionDelete.json
 */
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";

async function deletesAPrivateEndpointConnectionWithAGivenName() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "myResourceGroup";
  const scopeName = "myPrivateLinkScope";
  const privateEndpointConnectionName = "private-endpoint-connection-name";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.beginDeleteAndWait(
    resourceGroupName,
    scopeName,
    privateEndpointConnectionName
  );
  console.log(result);
}

deletesAPrivateEndpointConnectionWithAGivenName().catch(console.error);
