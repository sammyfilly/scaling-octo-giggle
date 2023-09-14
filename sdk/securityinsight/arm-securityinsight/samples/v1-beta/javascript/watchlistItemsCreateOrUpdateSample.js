/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a watchlist item.
 *
 * @summary Creates or updates a watchlist item.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/watchlists/CreateWatchlistItem.json
 */
async function createsOrUpdatesAWatchlistItem() {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] || "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const watchlistAlias = "highValueAsset";
  const watchlistItemId = "82ba292c-dc97-4dfc-969d-d4dd9e666842";
  const watchlistItem = {
    etag: "0300bf09-0000-0000-0000-5c37296e0000",
    itemsKeyValue: {
      businessTier: "10.0.2.0/24",
      dataTier: "10.0.2.0/24",
      gatewaySubnet: "10.0.255.224/27",
      privateDmzIn: "10.0.0.0/27",
      publicDmzOut: "10.0.0.96/27",
      webTier: "10.0.1.0/24",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.watchlistItems.createOrUpdate(
    resourceGroupName,
    workspaceName,
    watchlistAlias,
    watchlistItemId,
    watchlistItem
  );
  console.log(result);
}

async function main() {
  createsOrUpdatesAWatchlistItem();
}

main().catch(console.error);
