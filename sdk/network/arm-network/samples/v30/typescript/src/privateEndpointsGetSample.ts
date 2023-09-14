/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the specified private endpoint by resource group.
 *
 * @summary Gets the specified private endpoint by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/PrivateEndpointGet.json
 */
async function getPrivateEndpoint() {
  const subscriptionId = "subId";
  const resourceGroupName = "rg1";
  const privateEndpointName = "testPe";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.privateEndpoints.get(
    resourceGroupName,
    privateEndpointName
  );
  console.log(result);
}

getPrivateEndpoint().catch(console.error);

/**
 * This sample demonstrates how to Gets the specified private endpoint by resource group.
 *
 * @summary Gets the specified private endpoint by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/PrivateEndpointGetWithASG.json
 */
async function getPrivateEndpointWithApplicationSecurityGroups() {
  const subscriptionId = "subId";
  const resourceGroupName = "rg1";
  const privateEndpointName = "testPe";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.privateEndpoints.get(
    resourceGroupName,
    privateEndpointName
  );
  console.log(result);
}

getPrivateEndpointWithApplicationSecurityGroups().catch(console.error);

/**
 * This sample demonstrates how to Gets the specified private endpoint by resource group.
 *
 * @summary Gets the specified private endpoint by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/PrivateEndpointGetForManualApproval.json
 */
async function getPrivateEndpointWithManualApprovalConnection() {
  const subscriptionId = "subId";
  const resourceGroupName = "rg1";
  const privateEndpointName = "testPe";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.privateEndpoints.get(
    resourceGroupName,
    privateEndpointName
  );
  console.log(result);
}

getPrivateEndpointWithManualApprovalConnection().catch(console.error);
