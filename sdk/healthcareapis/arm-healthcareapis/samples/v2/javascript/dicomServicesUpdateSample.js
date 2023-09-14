/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HealthcareApisManagementClient } = require("@azure/arm-healthcareapis");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Patch DICOM Service details.
 *
 * @summary Patch DICOM Service details.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/dicomservices/DicomServices_Patch.json
 */
async function updateADicomservice() {
  const subscriptionId = "subid";
  const resourceGroupName = "testRG";
  const dicomServiceName = "blue";
  const workspaceName = "workspace1";
  const dicomservicePatchResource = {
    tags: { tagKey: "tagValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.dicomServices.beginUpdateAndWait(
    resourceGroupName,
    dicomServiceName,
    workspaceName,
    dicomservicePatchResource
  );
  console.log(result);
}

updateADicomservice().catch(console.error);
