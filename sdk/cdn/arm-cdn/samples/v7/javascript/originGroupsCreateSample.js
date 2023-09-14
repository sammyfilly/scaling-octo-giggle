/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CdnManagementClient } = require("@azure/arm-cdn");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a new origin group within the specified endpoint.
 *
 * @summary Creates a new origin group within the specified endpoint.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/OriginGroups_Create.json
 */
async function originGroupsCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const originGroupName = "origingroup1";
  const originGroup = {
    healthProbeSettings: {
      probeIntervalInSeconds: 120,
      probePath: "/health.aspx",
      probeProtocol: "Http",
      probeRequestType: "GET",
    },
    origins: [
      {
        id: "/subscriptions/subid/resourceGroups/RG/providers/Microsoft.Cdn/profiles/profile1/endpoints/endpoint1/origins/origin1",
      },
    ],
    responseBasedOriginErrorDetectionSettings: {
      responseBasedDetectedErrorTypes: "TcpErrorsOnly",
      responseBasedFailoverThresholdPercentage: 10,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.originGroups.beginCreateAndWait(
    resourceGroupName,
    profileName,
    endpointName,
    originGroupName,
    originGroup
  );
  console.log(result);
}

originGroupsCreate().catch(console.error);
