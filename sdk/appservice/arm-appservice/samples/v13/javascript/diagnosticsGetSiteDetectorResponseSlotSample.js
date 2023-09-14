/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Get site detector response
 *
 * @summary Description for Get site detector response
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_GetSiteDetectorResponse.json
 */
async function getAppDetectorResponse() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const detectorName = "runtimeavailability";
  const slot = "staging";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getSiteDetectorResponseSlot(
    resourceGroupName,
    siteName,
    detectorName,
    slot
  );
  console.log(result);
}

getAppDetectorResponse().catch(console.error);

/**
 * This sample demonstrates how to Description for Get site detector response
 *
 * @summary Description for Get site detector response
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_GetSiteDetectorResponseSlot.json
 */
async function getAppSlotDetectorResponse() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const detectorName = "runtimeavailability";
  const slot = "staging";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getSiteDetectorResponseSlot(
    resourceGroupName,
    siteName,
    detectorName,
    slot
  );
  console.log(result);
}

getAppSlotDetectorResponse().catch(console.error);
