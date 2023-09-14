/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SearchManagementClient } = require("@azure/arm-search");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.
 *
 * @summary Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2020-08-01/examples/SearchRegenerateAdminKey.json
 */
async function searchRegenerateAdminKey() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const searchServiceName = "mysearchservice";
  const keyKind = "primary";
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.adminKeys.regenerate(resourceGroupName, searchServiceName, keyKind);
  console.log(result);
}

searchRegenerateAdminKey().catch(console.error);
