/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the supported stack resource.
 *
 * @summary Get the supported stack resource.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2022-04-01/examples/BuildService_GetSupportedStack.json
 */
async function buildServiceGetSupportedStack() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const buildServiceName = "default";
  const stackName = "io.buildpacks.stacks.bionic-base";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.buildServiceOperations.getSupportedStack(
    resourceGroupName,
    serviceName,
    buildServiceName,
    stackName
  );
  console.log(result);
}

buildServiceGetSupportedStack().catch(console.error);
