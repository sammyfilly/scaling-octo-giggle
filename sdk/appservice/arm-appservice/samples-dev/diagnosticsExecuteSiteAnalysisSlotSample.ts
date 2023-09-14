/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Description for Execute Analysis
 *
 * @summary Description for Execute Analysis
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_ExecuteSiteAnalysis.json
 */
async function executeSiteAnalysis() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const analysisName = "apprestartanalyses";
  const slot = "Production";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.executeSiteAnalysisSlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    analysisName,
    slot
  );
  console.log(result);
}

executeSiteAnalysis().catch(console.error);

/**
 * This sample demonstrates how to Description for Execute Analysis
 *
 * @summary Description for Execute Analysis
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_ExecuteSiteAnalysisSlot.json
 */
async function executeSiteSlotAnalysis() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const analysisName = "apprestartanalyses";
  const slot = "staging";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.executeSiteAnalysisSlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    analysisName,
    slot
  );
  console.log(result);
}

executeSiteSlotAnalysis().catch(console.error);
