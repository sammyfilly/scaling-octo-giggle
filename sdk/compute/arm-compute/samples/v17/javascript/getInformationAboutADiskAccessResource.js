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
 * This sample demonstrates how to Gets information about a disk access resource.
 *
 * @summary Gets information about a disk access resource.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-08-01/examples/GetInformationAboutADiskAccess.json
 */
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

async function getInformationAboutADiskAccessResource() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskAccessName = "myDiskAccess";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskAccesses.get(resourceGroupName, diskAccessName);
  console.log(result);
}

getInformationAboutADiskAccessResource().catch(console.error);
