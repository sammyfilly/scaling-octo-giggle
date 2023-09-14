/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified authorization from the specified express route port.
 *
 * @summary Deletes the specified authorization from the specified express route port.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/ExpressRoutePortAuthorizationDelete.json
 */
async function deleteExpressRoutePortAuthorization() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const expressRoutePortName = "expressRoutePortName";
  const authorizationName = "authorizationName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRoutePortAuthorizations.beginDeleteAndWait(
    resourceGroupName,
    expressRoutePortName,
    authorizationName
  );
  console.log(result);
}

deleteExpressRoutePortAuthorization().catch(console.error);
