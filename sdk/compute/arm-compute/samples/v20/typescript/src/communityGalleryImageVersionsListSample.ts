/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List community gallery image versions inside an image.
 *
 * @summary List community gallery image versions inside an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-03-03/examples/communityGalleryExamples/CommunityGalleryImageVersion_List.json
 */
async function listCommunityGalleryImageVersions() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "myLocation";
  const publicGalleryName = "publicGalleryName";
  const galleryImageName = "myGalleryImageName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.communityGalleryImageVersions.list(
    location,
    publicGalleryName,
    galleryImageName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listCommunityGalleryImageVersions();
}

main().catch(console.error);
