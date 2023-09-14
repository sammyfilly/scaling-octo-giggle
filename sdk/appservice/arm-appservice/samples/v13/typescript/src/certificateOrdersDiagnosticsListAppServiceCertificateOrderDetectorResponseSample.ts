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
 * This sample demonstrates how to Description for Microsoft.CertificateRegistration to get the list of detectors for this RP.
 *
 * @summary Description for Microsoft.CertificateRegistration to get the list of detectors for this RP.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/Diagnostics_ListAppServiceCertificateOrderDetectorResponse.json
 */
async function listAppServiceCertificateDetectorResponse() {
  const subscriptionId = "5700fc96-77b4-4f8d-afce-c353d8c443bd";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const certificateOrderName = "SampleCertificateOrderName";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificateOrdersDiagnostics.listAppServiceCertificateOrderDetectorResponse(
    resourceGroupName,
    certificateOrderName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAppServiceCertificateDetectorResponse().catch(console.error);
