/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Lists the prefixes received over the specified peering under the given subscription and resource group.
 *
 * @summary Lists the prefixes received over the specified peering under the given subscription and resource group.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/GetPeeringReceivedRoutes.json
 */
const { PeeringManagementClient } = require("@azure/arm-peering");
const { DefaultAzureCredential } = require("@azure/identity");

async function listsThePrefixesReceivedOverTheSpecifiedPeeringUnderTheGivenSubscriptionAndResourceGroup() {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringName = "peeringName";
  const prefix = "1.1.1.0/24";
  const asPath = "123 456";
  const originAsValidationState = "Valid";
  const rpkiValidationState = "Valid";
  const options = {
    prefix: prefix,
    asPath: asPath,
    originAsValidationState: originAsValidationState,
    rpkiValidationState: rpkiValidationState,
  };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.receivedRoutes.listByPeering(
    resourceGroupName,
    peeringName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listsThePrefixesReceivedOverTheSpecifiedPeeringUnderTheGivenSubscriptionAndResourceGroup().catch(
  console.error
);
