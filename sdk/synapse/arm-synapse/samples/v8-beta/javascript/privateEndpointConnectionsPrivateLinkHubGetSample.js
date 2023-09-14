/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all PrivateEndpointConnection in the PrivateLinkHub by name
 *
 * @summary Get all PrivateEndpointConnection in the PrivateLinkHub by name
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/PrivateEndpointConnectionsPrivateLinkHub_Get.json
 */
async function getAPrivateLinkHub() {
  const subscriptionId = "48b08652-d7a1-4d52-b13f-5a2471dce57b";
  const resourceGroupName = "gh-res-grp";
  const privateLinkHubName = "pe0";
  const privateEndpointConnectionName = "pe0-f3ed30f5-338c-4855-a542-24a403694ad2";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnectionsPrivateLinkHub.get(
    resourceGroupName,
    privateLinkHubName,
    privateEndpointConnectionName
  );
  console.log(result);
}

getAPrivateLinkHub().catch(console.error);
