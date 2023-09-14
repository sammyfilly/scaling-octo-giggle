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
  FeatureValidationRequest,
  DataProtectionClient
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Validates if a feature is supported
 *
 * @summary Validates if a feature is supported
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2023-01-01/examples/CheckfeatureSupport.json
 */
async function checkAzureVMBackupFeatureSupport() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const location = "WestUS";
  const parameters: FeatureValidationRequest = {
    featureType: "DataSourceType",
    objectType: "FeatureValidationRequest"
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.dataProtection.checkFeatureSupport(
    location,
    parameters
  );
  console.log(result);
}

async function main() {
  checkAzureVMBackupFeatureSupport();
}

main().catch(console.error);
