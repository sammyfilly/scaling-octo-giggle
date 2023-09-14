/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of managed clusters in the specified subscription.
 *
 * @summary Gets a list of managed clusters in the specified subscription.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-02-01/examples/ManagedClustersList.json
 */
async function listManagedClusters() {
  const subscriptionId = "subid1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedClusters.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listManagedClusters().catch(console.error);
