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
  Application,
  ApplicationCreateOptionalParams,
  BatchManagementClient
} from "@azure/arm-batch";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Adds an application to the specified Batch account.
 *
 * @summary Adds an application to the specified Batch account.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-01-01/examples/ApplicationCreate.json
 */
async function applicationCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const applicationName = "app1";
  const parameters: Application = {
    allowUpdates: false,
    displayName: "myAppName"
  };
  const options: ApplicationCreateOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.applicationOperations.create(
    resourceGroupName,
    accountName,
    applicationName,
    options
  );
  console.log(result);
}

applicationCreate().catch(console.error);
