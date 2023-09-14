/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets information about the specified application package.
 *
 * @summary Gets information about the specified application package.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-01-01/examples/ApplicationPackageGet.json
 */
async function applicationPackageGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const applicationName = "app1";
  const versionName = "1";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.applicationPackageOperations.get(
    resourceGroupName,
    accountName,
    applicationName,
    versionName
  );
  console.log(result);
}

applicationPackageGet().catch(console.error);
