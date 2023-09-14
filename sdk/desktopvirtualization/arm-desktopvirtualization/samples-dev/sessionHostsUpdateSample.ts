/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SessionHostPatch,
  SessionHostsUpdateOptionalParams,
  DesktopVirtualizationAPIClient
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update a session host.
 *
 * @summary Update a session host.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/SessionHost_Update.json
 */
async function sessionHostUpdate() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const hostPoolName = "hostPool1";
  const sessionHostName = "sessionHost1.microsoft.com";
  const force = true;
  const sessionHost: SessionHostPatch = {
    allowNewSession: true,
    assignedUser: "user1@microsoft.com"
  };
  const options: SessionHostsUpdateOptionalParams = { force, sessionHost };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.sessionHosts.update(
    resourceGroupName,
    hostPoolName,
    sessionHostName,
    options
  );
  console.log(result);
}

sessionHostUpdate().catch(console.error);
