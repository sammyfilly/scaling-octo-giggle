/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataLakeAnalyticsAccountManagementClient } from "@azure/arm-datalake-analytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts.
 *
 * @summary Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts.
 * x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_GetStorageContainer.json
 */
async function getsTheSpecifiedAzureStorageContainer() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "contosorg";
  const accountName = "contosoadla";
  const storageAccountName = "test_storage";
  const containerName = "test_container";
  const credential = new DefaultAzureCredential();
  const client = new DataLakeAnalyticsAccountManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.storageAccounts.getStorageContainer(
    resourceGroupName,
    accountName,
    storageAccountName,
    containerName
  );
  console.log(result);
}

getsTheSpecifiedAzureStorageContainer().catch(console.error);
