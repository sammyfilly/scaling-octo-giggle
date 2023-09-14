/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Synchronously creates or updates a partner configuration with the specified parameters.
 *
 * @summary Synchronously creates or updates a partner configuration with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/PartnerConfigurations_CreateOrUpdate.json
 */
async function partnerConfigurationsCreateOrUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerConfigurationInfo = {
    partnerAuthorization: {
      authorizedPartnersList: [
        {
          authorizationExpirationTimeInUtc: new Date("2022-01-28T01:20:55.142Z"),
          partnerName: "Contoso.Finance",
          partnerRegistrationImmutableId: "941892bc-f5d0-4d1c-8fb5-477570fc2b71",
        },
        {
          authorizationExpirationTimeInUtc: new Date("2022-02-20T01:00:00.142Z"),
          partnerName: "fabrikam.HR",
          partnerRegistrationImmutableId: "5362bdb6-ce3e-4d0d-9a5b-3eb92c8aab38",
        },
      ],
      defaultMaximumExpirationTimeInDays: 10,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerConfigurations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    partnerConfigurationInfo
  );
  console.log(result);
}

partnerConfigurationsCreateOrUpdate().catch(console.error);
