/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a Sql pool data masking policy.
 *
 * @summary Gets a Sql pool data masking policy.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingPolicyGet.json
 */
async function getDataMaskingPolicy() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingPolicies.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName
  );
  console.log(result);
}

getDataMaskingPolicy().catch(console.error);
