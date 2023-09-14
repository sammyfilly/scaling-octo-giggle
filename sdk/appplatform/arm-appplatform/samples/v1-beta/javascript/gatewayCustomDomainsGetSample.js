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
 * This sample demonstrates how to Get the Spring Cloud Gateway custom domain.
 *
 * @summary Get the Spring Cloud Gateway custom domain.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/GatewayCustomDomains_Get.json
 */
async function gatewayCustomDomainsGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const gatewayName = "default";
  const domainName = "myDomainName";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.gatewayCustomDomains.get(
    resourceGroupName,
    serviceName,
    gatewayName,
    domainName
  );
  console.log(result);
}

gatewayCustomDomainsGet().catch(console.error);
