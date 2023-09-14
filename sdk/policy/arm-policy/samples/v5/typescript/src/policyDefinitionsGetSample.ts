/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to This operation retrieves the policy definition in the given subscription with the given name.
 *
 * @summary This operation retrieves the policy definition in the given subscription with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/getPolicyDefinition.json
 */
async function retrieveAPolicyDefinition() {
  const subscriptionId = "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policyDefinitionName = "ResourceNaming";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyDefinitions.get(policyDefinitionName);
  console.log(result);
}

retrieveAPolicyDefinition().catch(console.error);
