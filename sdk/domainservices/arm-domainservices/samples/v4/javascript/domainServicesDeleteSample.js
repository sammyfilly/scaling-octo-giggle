/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DomainServicesResourceProvider } = require("@azure/arm-domainservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The Delete Domain Service operation deletes an existing Domain Service.
 *
 * @summary The Delete Domain Service operation deletes an existing Domain Service.
 * x-ms-original-file: specification/domainservices/resource-manager/Microsoft.AAD/stable/2021-05-01/examples/DeleteDomainService.json
 */
async function deleteDomainService() {
  const subscriptionId = "1639790a-76a2-4ac4-98d9-8562f5dfcb4d";
  const resourceGroupName = "TestResourceGroup";
  const domainServiceName = "TestDomainService.com";
  const credential = new DefaultAzureCredential();
  const client = new DomainServicesResourceProvider(credential, subscriptionId);
  const result = await client.domainServices.beginDeleteAndWait(
    resourceGroupName,
    domainServiceName
  );
  console.log(result);
}

deleteDomainService().catch(console.error);
