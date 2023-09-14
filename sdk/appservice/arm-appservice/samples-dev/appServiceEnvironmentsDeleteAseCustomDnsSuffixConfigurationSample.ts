/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete Custom Dns Suffix configuration of an App Service Environment
 *
 * @summary Delete Custom Dns Suffix configuration of an App Service Environment
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/DeleteAseCustomDnsSuffixConfiguration.json
 */
async function deleteAseCustomDnsSuffixConfiguration() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.deleteAseCustomDnsSuffixConfiguration(
    resourceGroupName,
    name
  );
  console.log(result);
}

deleteAseCustomDnsSuffixConfiguration().catch(console.error);
