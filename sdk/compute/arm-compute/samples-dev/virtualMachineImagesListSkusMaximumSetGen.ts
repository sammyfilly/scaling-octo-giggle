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
 * This sample demonstrates how to Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 *
 * @summary Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineImages_ListSkus_MaximumSet_Gen.json
 */
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function virtualMachineImagesListSkusMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const offer = "aaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.listSkus(
    location,
    publisherName,
    offer
  );
  console.log(result);
}

virtualMachineImagesListSkusMaximumSetGen().catch(console.error);
