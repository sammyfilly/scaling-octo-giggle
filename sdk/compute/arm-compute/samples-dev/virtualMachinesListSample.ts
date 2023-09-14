/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  VirtualMachinesListOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.
 *
 * @summary Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachines_List_MaximumSet_Gen.json
 */
async function virtualMachinesListMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const filter = "aaaaaaaaaaaaaaaaaaaaaaa";
  const options: VirtualMachinesListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachines.list(
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

virtualMachinesListMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.
 *
 * @summary Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachines_List_MinimumSet_Gen.json
 */
async function virtualMachinesListMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachines.list(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

virtualMachinesListMinimumSetGen().catch(console.error);
