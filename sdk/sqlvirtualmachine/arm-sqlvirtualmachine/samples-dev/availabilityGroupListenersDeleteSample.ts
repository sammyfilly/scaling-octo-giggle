/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlVirtualMachineManagementClient } from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes an availability group listener.
 *
 * @summary Deletes an availability group listener.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2022-07-01-preview/examples/DeleteAvailabilityGroupListener.json
 */
async function deletesAnAvailabilityGroupListener() {
  const subscriptionId =
    process.env["SQLVIRTUALMACHINE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQLVIRTUALMACHINE_RESOURCE_GROUP"] || "testrg";
  const sqlVirtualMachineGroupName = "testvmgroup";
  const availabilityGroupListenerName = "agl-test";
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.availabilityGroupListeners.beginDeleteAndWait(
    resourceGroupName,
    sqlVirtualMachineGroupName,
    availabilityGroupListenerName
  );
  console.log(result);
}

async function main() {
  deletesAnAvailabilityGroupListener();
}

main().catch(console.error);
