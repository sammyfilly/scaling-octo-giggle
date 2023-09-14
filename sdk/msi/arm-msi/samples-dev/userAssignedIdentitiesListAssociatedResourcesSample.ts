/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  UserAssignedIdentitiesListAssociatedResourcesOptionalParams,
  ManagedServiceIdentityClient
} from "@azure/arm-msi";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists the associated resources for this identity.
 *
 * @summary Lists the associated resources for this identity.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/preview/2021-09-30-preview/examples/IdentityListAssociatedResources.json
 */
async function identityListAssociatedResources() {
  const subscriptionId = "1cscb752-d7c9-463f-9731-fd31edada74a";
  const resourceGroupName = "testrg";
  const resourceName = "testid";
  const filter = "contains(name, 'test')";
  const orderby = "name asc";
  const top = 10;
  const skip = 1;
  const options: UserAssignedIdentitiesListAssociatedResourcesOptionalParams = {
    filter,
    orderby,
    top,
    skip
  };
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.userAssignedIdentities.listAssociatedResources(
    resourceGroupName,
    resourceName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

identityListAssociatedResources().catch(console.error);
