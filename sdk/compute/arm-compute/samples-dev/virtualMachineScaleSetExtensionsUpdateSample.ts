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
  VirtualMachineScaleSetExtensionUpdate,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The operation to update an extension.
 *
 * @summary The operation to update an extension.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineScaleSetExtensions_Update_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetExtensionsUpdateMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const vmssExtensionName = "aaaa";
  const extensionParameters: VirtualMachineScaleSetExtensionUpdate = {
    typePropertiesType: "{extension-Type}",
    autoUpgradeMinorVersion: true,
    enableAutomaticUpgrade: true,
    forceUpdateTag: "aaaaaaaaa",
    protectedSettings: {},
    provisionAfterExtensions: ["aa"],
    publisher: "{extension-Publisher}",
    settings: {},
    suppressFailures: true,
    typeHandlerVersion: "{handler-version}"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetExtensions.beginUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    vmssExtensionName,
    extensionParameters
  );
  console.log(result);
}

virtualMachineScaleSetExtensionsUpdateMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to The operation to update an extension.
 *
 * @summary The operation to update an extension.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineScaleSetExtensions_Update_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetExtensionsUpdateMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaaaaaaaaaa";
  const vmssExtensionName = "aa";
  const extensionParameters: VirtualMachineScaleSetExtensionUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetExtensions.beginUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    vmssExtensionName,
    extensionParameters
  );
  console.log(result);
}

virtualMachineScaleSetExtensionsUpdateMinimumSetGen().catch(console.error);
