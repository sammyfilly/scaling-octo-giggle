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
 * This sample demonstrates how to The operation to update a virtual machine.
 *
 * @summary The operation to update a virtual machine.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/UpdateVMDetachDataDiskUsingToBeDetachedProperty.json
 */
import {
  VirtualMachineUpdate,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function updateAVMByDetachingDataDisk() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmName = "myVM";
  const parameters: VirtualMachineUpdate = {
    hardwareProfile: { vmSize: "Standard_D2_v2" },
    networkProfile: {
      networkInterfaces: [
        {
          id:
            "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}",
          primary: true
        }
      ]
    },
    osProfile: {
      adminPassword: "{your-password}",
      adminUsername: "{your-username}",
      computerName: "myVM"
    },
    storageProfile: {
      dataDisks: [
        { createOption: "Empty", diskSizeGB: 1023, lun: 0, toBeDetached: true },
        { createOption: "Empty", diskSizeGB: 1023, lun: 1, toBeDetached: false }
      ],
      imageReference: {
        offer: "WindowsServer",
        publisher: "MicrosoftWindowsServer",
        sku: "2016-Datacenter",
        version: "latest"
      },
      osDisk: {
        name: "myVMosdisk",
        caching: "ReadWrite",
        createOption: "FromImage",
        managedDisk: { storageAccountType: "Standard_LRS" }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginUpdateAndWait(
    resourceGroupName,
    vmName,
    parameters
  );
  console.log(result);
}

updateAVMByDetachingDataDisk().catch(console.error);
