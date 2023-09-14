/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridContainerServiceClient } = require("@azure/arm-hybridcontainerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Patches the Hybrid AKS storage object
 *
 * @summary Patches the Hybrid AKS storage object
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/UpdateStorageSpace.json
 */
async function updateStorageSpace() {
  const subscriptionId = "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName = "test-arcappliance-resgrp";
  const storageSpacesName = "test-storage";
  const storageSpaces = {
    tags: { additionalProperties: "sample" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.storageSpacesOperations.beginUpdateAndWait(
    resourceGroupName,
    storageSpacesName,
    storageSpaces
  );
  console.log(result);
}

updateStorageSpace().catch(console.error);
