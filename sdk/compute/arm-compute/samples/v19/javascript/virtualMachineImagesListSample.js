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
 * This sample demonstrates how to Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.
 *
 * @summary Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-01/ComputeRP/examples/virtualMachineImageExamples/VirtualMachineImages_List_MaximumSet_Gen.json
 */
async function virtualMachineImagesListMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaaaaaaaaaaaaa";
  const publisherName = "aaaaaa";
  const offer = "aaaaaaaaaaaaaaaa";
  const skus = "aaaaaaaaaaaaaaaaaaaaaaa";
  const expand = "aaaaaaaaaaaaaaaaaaaaaaaa";
  const top = 18;
  const orderby = "aa";
  const options = {
    expand,
    top,
    orderby,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.list(
    location,
    publisherName,
    offer,
    skus,
    options
  );
  console.log(result);
}

virtualMachineImagesListMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.
 *
 * @summary Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-01/ComputeRP/examples/virtualMachineImageExamples/VirtualMachineImages_List_MinimumSet_Gen.json
 */
async function virtualMachineImagesListMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaaaaa";
  const publisherName = "aaaaaaaaaaa";
  const offer = "aaaaaaaaaa";
  const skus = "aaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.list(location, publisherName, offer, skus);
  console.log(result);
}

virtualMachineImagesListMinimumSetGen().catch(console.error);
