/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Create or update the metadata of a service instance.
 *
 * @summary Create or update the metadata of a service instance.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-01-11/examples/ServiceCreateMinimum.json
 */
const { HealthcareApisManagementClient } = require("@azure/arm-healthcareapis");
const { DefaultAzureCredential } = require("@azure/identity");

async function createOrUpdateAServiceWithMinimumParameters() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const resourceName = "service2";
  const serviceDescription = {
    kind: "fhir-R4",
    location: "westus2",
    properties: {
      accessPolicies: [{ objectId: "c487e7d1-3210-41a3-8ccc-e9372b78da47" }],
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    serviceDescription
  );
  console.log(result);
}

createOrUpdateAServiceWithMinimumParameters().catch(console.error);
