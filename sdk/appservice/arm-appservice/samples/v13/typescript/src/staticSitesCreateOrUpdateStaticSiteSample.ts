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
  StaticSiteARMResource,
  WebSiteManagementClient
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Description for Creates a new static site in an existing resource group, or updates an existing static site.
 *
 * @summary Description for Creates a new static site in an existing resource group, or updates an existing static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/CreateOrUpdateStaticSite.json
 */
async function createOrUpdateAStaticSite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const staticSiteEnvelope: StaticSiteARMResource = {
    branch: "master",
    buildProperties: {
      apiLocation: "api",
      appArtifactLocation: "build",
      appLocation: "app"
    },
    location: "West US 2",
    repositoryToken: "repoToken123",
    repositoryUrl: "https://github.com/username/RepoName",
    sku: { name: "Basic", tier: "Basic" }
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.beginCreateOrUpdateStaticSiteAndWait(
    resourceGroupName,
    name,
    staticSiteEnvelope
  );
  console.log(result);
}

createOrUpdateAStaticSite().catch(console.error);
