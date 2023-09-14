/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates of updates hostname configuration for a Gateway.
 *
 * @summary Creates of updates hostname configuration for a Gateway.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateGatewayHostnameConfiguration.json
 */
async function apiManagementCreateGatewayHostnameConfiguration() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const gatewayId = "gw1";
  const hcId = "default";
  const parameters = {
    certificateId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/certificates/cert1",
    hostname: "*",
    http2Enabled: true,
    negotiateClientCertificate: false,
    tls10Enabled: false,
    tls11Enabled: false,
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.gatewayHostnameConfiguration.createOrUpdate(
    resourceGroupName,
    serviceName,
    gatewayId,
    hcId,
    parameters
  );
  console.log(result);
}

async function main() {
  apiManagementCreateGatewayHostnameConfiguration();
}

main().catch(console.error);
