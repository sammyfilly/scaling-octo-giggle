/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DesktopVirtualizationAPIClient } from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a workspace.
 *
 * @summary Get a workspace.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/Workspace_Get.json
 */
async function workspaceGet() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const workspaceName = "workspace1";
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.workspaces.get(resourceGroupName, workspaceName);
  console.log(result);
}

workspaceGet().catch(console.error);
