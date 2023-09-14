/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureReservationAPI } from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all the operations.
 *
 * @summary List all the operations.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/GetOperations.json
 */
async function getOperations() {
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const resArray = new Array();
  for await (let item of client.operation.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getOperations();
}

main().catch(console.error);
