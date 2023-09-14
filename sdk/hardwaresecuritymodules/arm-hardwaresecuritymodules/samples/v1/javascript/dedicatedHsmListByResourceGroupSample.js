/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureDedicatedHSMResourceProvider } = require("@azure/arm-hardwaresecuritymodules");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.
 *
 * @summary The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/stable/2021-11-30/examples/DedicatedHsm_ListByResourceGroup.json
 */
async function listDedicatedHsmDevicesInAResourceGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "hsm-group";
  const credential = new DefaultAzureCredential();
  const client = new AzureDedicatedHSMResourceProvider(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dedicatedHsmOperations.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listDedicatedHsmDevicesInAResourceGroup().catch(console.error);

/**
 * This sample demonstrates how to The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.
 *
 * @summary The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/stable/2021-11-30/examples/PaymentHsm_ListByResourceGroup.json
 */
async function listDedicatedHsmDevicesInAResourceGroupIncludingPaymentHsm() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "hsm-group";
  const credential = new DefaultAzureCredential();
  const client = new AzureDedicatedHSMResourceProvider(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dedicatedHsmOperations.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listDedicatedHsmDevicesInAResourceGroupIncludingPaymentHsm().catch(console.error);
