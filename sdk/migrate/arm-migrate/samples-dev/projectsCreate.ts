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
 * This sample demonstrates how to Create a project with specified name. If a project already exists, update it.
 *
 * @summary Create a project with specified name. If a project already exists, update it.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Projects_Create.json
 */
import { Project, AzureMigrateV2 } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

async function projectsCreate() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abGoyalProject2";
  const project: Project = {
    eTag: "",
    location: "West Europe",
    properties: {
      assessmentSolutionId:
        "/subscriptions/6393a73f-8d55-47ef-b6dd-179b3e0c7910/resourcegroups/abgoyal-westeurope/providers/microsoft.migrate/migrateprojects/abgoyalweselfhost/Solutions/Servers-Assessment-ServerAssessment",
      customerWorkspaceId: undefined,
      customerWorkspaceLocation: undefined,
      projectStatus: "Active"
    },
    tags: {}
  };
  const options = { project: project };
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.projects.create(
    resourceGroupName,
    projectName,
    options
  );
  console.log(result);
}

projectsCreate().catch(console.error);
