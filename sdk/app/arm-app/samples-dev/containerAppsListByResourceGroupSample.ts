/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerAppsAPIClient } from "@azure/arm-app";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get the Container Apps in a given resource group.
 *
 * @summary Get the Container Apps in a given resource group.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-01-01-preview/examples/ContainerApps_ListByResourceGroup.json
 */
async function listContainerAppsByResourceGroup() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.containerApps.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listContainerAppsByResourceGroup().catch(console.error);
