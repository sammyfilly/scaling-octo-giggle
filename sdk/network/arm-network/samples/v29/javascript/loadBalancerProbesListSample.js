/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets all the load balancer probes.
 *
 * @summary Gets all the load balancer probes.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/LoadBalancerProbeList.json
 */
async function loadBalancerProbeList() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.loadBalancerProbes.list(resourceGroupName, loadBalancerName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

loadBalancerProbeList().catch(console.error);
