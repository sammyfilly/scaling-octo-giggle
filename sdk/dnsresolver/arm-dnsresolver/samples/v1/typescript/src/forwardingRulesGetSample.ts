/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DnsResolverManagementClient } from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets properties of a forwarding rule in a DNS forwarding ruleset.
 *
 * @summary Gets properties of a forwarding rule in a DNS forwarding ruleset.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ForwardingRule_Get.json
 */
async function retrieveForwardingRuleInADnsForwardingRuleset() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const dnsForwardingRulesetName = "sampleDnsForwardingRuleset";
  const forwardingRuleName = "sampleForwardingRule";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.forwardingRules.get(
    resourceGroupName,
    dnsForwardingRulesetName,
    forwardingRuleName
  );
  console.log(result);
}

async function main() {
  retrieveForwardingRuleInADnsForwardingRuleset();
}

main().catch(console.error);
