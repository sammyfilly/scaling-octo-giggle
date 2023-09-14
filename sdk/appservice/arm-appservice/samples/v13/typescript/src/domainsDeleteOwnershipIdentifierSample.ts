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
 * This sample demonstrates how to Description for Delete ownership identifier for domain
 *
 * @summary Description for Delete ownership identifier for domain
 * x-ms-original-file: specification/web/resource-manager/Microsoft.DomainRegistration/stable/2022-03-01/examples/DeleteAppServiceDomainOwnershipIdentifier.json
 */
async function deleteAppServiceDomainOwnershipIdentifier() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const domainName = "example.com";
  const name = "ownershipIdentifier";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.domains.deleteOwnershipIdentifier(
    resourceGroupName,
    domainName,
    name
  );
  console.log(result);
}

deleteAppServiceDomainOwnershipIdentifier().catch(console.error);
