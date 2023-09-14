/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TeamProperties, SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a Microsoft team to investigate the incident by sharing information and insights between participants.
 *
 * @summary Creates a Microsoft team to investigate the incident by sharing information and insights between participants.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/incidents/CreateTeam.json
 */
async function createsIncidentTeamsGroup() {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] ||
    "9023f5b5-df22-4313-8fbf-b4b75af8a6d9";
  const resourceGroupName =
    process.env["SECURITYINSIGHT_RESOURCE_GROUP"] ||
    "ambawolvese5resourcegroup";
  const workspaceName = "AmbaE5WestCentralUS";
  const incidentId = "69a30280-6a4c-4aa7-9af0-5d63f335d600";
  const teamProperties: TeamProperties = {
    teamDescription: "Team description",
    teamName: "Team name"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.incidents.createTeam(
    resourceGroupName,
    workspaceName,
    incidentId,
    teamProperties
  );
  console.log(result);
}

async function main() {
  createsIncidentTeamsGroup();
}

main().catch(console.error);
