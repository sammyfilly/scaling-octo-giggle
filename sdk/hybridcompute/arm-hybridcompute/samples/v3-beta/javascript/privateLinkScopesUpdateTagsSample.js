/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridComputeManagementClient } = require("@azure/arm-hybridcompute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 *
 * @summary Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2021-06-10-preview/examples/PrivateLinkScopesUpdateTagsOnly.json
 */
async function privateLinkScopeUpdateTagsOnly() {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const privateLinkScopeTags = {
    tags: { tag1: "Value1", tag2: "Value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.updateTags(
    resourceGroupName,
    scopeName,
    privateLinkScopeTags
  );
  console.log(result);
}

privateLinkScopeUpdateTagsOnly().catch(console.error);
