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
  VirtualMachineExtension,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create or update the extension.
 *
 * @summary The operation to create or update the extension.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineExamples/VirtualMachineExtensions_CreateOrUpdate_MaximumSet_Gen.json
 */
async function virtualMachineExtensionsCreateOrUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmName = "aaaaaaaaaaaaaaaaaaaaaaaa";
  const vmExtensionName = "aaaaaaaaaaaaa";
  const extensionParameters: VirtualMachineExtension = {
    typePropertiesType: "extType",
    autoUpgradeMinorVersion: true,
    enableAutomaticUpgrade: true,
    forceUpdateTag: "a",
    instanceView: {
      name: "aaaaaaaaaaaaaaaaa",
      type: "aaaaaaaaa",
      statuses: [
        {
          code: "aaaaaaaaaaaaaaaaaaaaaaa",
          displayStatus: "aaaaaa",
          level: "Info",
          message: "a",
          time: new Date("2021-11-30T12:58:26.522Z")
        }
      ],
      substatuses: [
        {
          code: "aaaaaaaaaaaaaaaaaaaaaaa",
          displayStatus: "aaaaaa",
          level: "Info",
          message: "a",
          time: new Date("2021-11-30T12:58:26.522Z")
        }
      ],
      typeHandlerVersion: "aaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    location: "westus",
    protectedSettings: {},
    publisher: "extPublisher",
    settings: {},
    suppressFailures: true,
    tags: { key9183: "aa" },
    typeHandlerVersion: "1.2"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineExtensions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmName,
    vmExtensionName,
    extensionParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to create or update the extension.
 *
 * @summary The operation to create or update the extension.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineExamples/VirtualMachineExtensions_CreateOrUpdate_MinimumSet_Gen.json
 */
async function virtualMachineExtensionsCreateOrUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmName = "aaaa";
  const vmExtensionName = "aaaaaaaaaaaaaaaaaaaaaaaa";
  const extensionParameters: VirtualMachineExtension = { location: "westus" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineExtensions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmName,
    vmExtensionName,
    extensionParameters
  );
  console.log(result);
}

async function main() {
  virtualMachineExtensionsCreateOrUpdateMaximumSetGen();
  virtualMachineExtensionsCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
