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
  GetCallbackUrlParameters,
  LogicManagementClient
} from "@azure/arm-logic";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the content callback url.
 *
 * @summary Get the content callback url.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/IntegrationAccountPartners_ListContentCallbackUrl.json
 */
async function getTheContentCallbackUrl() {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["LOGIC_RESOURCE_GROUP"] || "testResourceGroup";
  const integrationAccountName = "testIntegrationAccount";
  const partnerName = "testPartner";
  const listContentCallbackUrl: GetCallbackUrlParameters = {
    keyType: "Primary",
    notAfter: new Date("2018-04-19T16:00:00Z")
  };
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.integrationAccountPartners.listContentCallbackUrl(
    resourceGroupName,
    integrationAccountName,
    partnerName,
    listContentCallbackUrl
  );
  console.log(result);
}

async function main() {
  getTheContentCallbackUrl();
}

main().catch(console.error);
