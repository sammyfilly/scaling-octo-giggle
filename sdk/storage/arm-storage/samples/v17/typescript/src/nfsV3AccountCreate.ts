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
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/NfsV3AccountCreate.json
 */
import {
  StorageAccountCreateParameters,
  StorageManagementClient
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

async function nfsV3AccountCreate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    isHnsEnabled: true,
    enableNfsV3: true,
    kind: "BlockBlobStorage",
    location: "eastus",
    networkRuleSet: {
      bypass: "AzureServices",
      defaultAction: "Allow",
      ipRules: [],
      virtualNetworkRules: [
        {
          virtualNetworkResourceId:
            "/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.Network/virtualNetworks/net123/subnets/subnet12"
        }
      ]
    },
    sku: { name: "Premium_LRS" },
    enableHttpsTrafficOnly: false
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters
  );
  console.log(result);
}

nfsV3AccountCreate().catch(console.error);
