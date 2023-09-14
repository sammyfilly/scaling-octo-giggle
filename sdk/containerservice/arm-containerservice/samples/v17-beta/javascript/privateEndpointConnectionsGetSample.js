/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to To learn more about private clusters, see: https://docs.microsoft.com/azure/aks/private-clusters
 *
 * @summary To learn more about private clusters, see: https://docs.microsoft.com/azure/aks/private-clusters
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2023-01-02-preview/examples/PrivateEndpointConnectionsGet.json
 */
async function getPrivateEndpointConnection() {
  const subscriptionId = process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName = process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const privateEndpointConnectionName = "privateendpointconnection1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.get(
    resourceGroupName,
    resourceName,
    privateEndpointConnectionName
  );
  console.log(result);
}

async function main() {
  getPrivateEndpointConnection();
}

main().catch(console.error);
