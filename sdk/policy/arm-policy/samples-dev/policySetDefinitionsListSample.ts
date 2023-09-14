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
 * This sample demonstrates how to This operation retrieves a list of all the policy set definitions in a given subscription that match the optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType -eq {value}' or 'category eq '{value}''. If $filter is not provided, the unfiltered list includes all policy set definitions associated with the subscription, including those that apply directly or from management groups that contain the given subscription. If $filter=atExactScope() is provided, the returned list only includes all policy set definitions that at the given subscription. If $filter='policyType -eq {value}' is provided, the returned list only includes all policy set definitions whose type match the {value}. Possible policyType values are NotSpecified, BuiltIn and Custom. If $filter='category -eq {value}' is provided, the returned list only includes all policy set definitions whose category match the {value}.
 *
 * @summary This operation retrieves a list of all the policy set definitions in a given subscription that match the optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType -eq {value}' or 'category eq '{value}''. If $filter is not provided, the unfiltered list includes all policy set definitions associated with the subscription, including those that apply directly or from management groups that contain the given subscription. If $filter=atExactScope() is provided, the returned list only includes all policy set definitions that at the given subscription. If $filter='policyType -eq {value}' is provided, the returned list only includes all policy set definitions whose type match the {value}. Possible policyType values are NotSpecified, BuiltIn and Custom. If $filter='category -eq {value}' is provided, the returned list only includes all policy set definitions whose category match the {value}.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/listPolicySetDefinitions.json
 */
async function listPolicySetDefinitions() {
  const subscriptionId = "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policySetDefinitions.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPolicySetDefinitions().catch(console.error);
