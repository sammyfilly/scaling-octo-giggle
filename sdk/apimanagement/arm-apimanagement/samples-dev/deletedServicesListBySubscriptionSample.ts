/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all soft-deleted services available for undelete for the given subscription.
 *
 * @summary Lists all soft-deleted services available for undelete for the given subscription.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeletedServicesListBySubscription.json
 */
async function apiManagementDeletedServicesListBySubscription() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.deletedServices.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementDeletedServicesListBySubscription().catch(console.error);
