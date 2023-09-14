/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a virtual machine extension image.
 *
 * @summary Gets a virtual machine extension image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineExtensionImages_Get_MaximumSet_Gen.json
 */
async function virtualMachineExtensionImagesGetMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaaaaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaa";
  const typeParam = "aaaaaaaaaaaaaaaaaa";
  const version = "aaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineExtensionImages.get(
    location,
    publisherName,
    typeParam,
    version
  );
  console.log(result);
}

virtualMachineExtensionImagesGetMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Gets a virtual machine extension image.
 *
 * @summary Gets a virtual machine extension image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineExtensionImages_Get_MinimumSet_Gen.json
 */
async function virtualMachineExtensionImagesGetMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaaaaaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaa";
  const typeParam = "aa";
  const version = "aaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineExtensionImages.get(
    location,
    publisherName,
    typeParam,
    version
  );
  console.log(result);
}

virtualMachineExtensionImagesGetMinimumSetGen().catch(console.error);
