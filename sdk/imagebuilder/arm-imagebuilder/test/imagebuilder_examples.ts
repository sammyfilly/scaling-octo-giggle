/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  record,
  RecorderEnvironmentSetup,
  Recorder,
  delay,
  isPlaybackMode
} from "@azure-tools/test-recorder";
import * as assert from "assert";
import { ClientSecretCredential } from "@azure/identity";
import { ImageBuilderClient } from "../src/imageBuilderClient";
import { ComputeManagementClient } from "@azure/arm-compute";
import { ManagedServiceIdentityClient } from "@azure/arm-msi";

const recorderEnvSetup: RecorderEnvironmentSetup = {
  replaceableVariables: {
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    SUBSCRIPTION_ID: "azure_subscription_id"
  },
  customizationsOnRecordings: [
    (recording: any): any =>
      recording.replace(
        /"access_token":"[^"]*"/g,
        `"access_token":"access_token"`
      )
  ],
  queryParametersToSkip: []
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("ImageBuilder test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ImageBuilderClient;
  let compute_client: ComputeManagementClient;
  let msi_client: ManagedServiceIdentityClient;
  let location: string;
  let resourceGroup: string;
  let imageTemplateName: string;
  let diskName: string;
  let snapshotName: string;
  let imagesName: string;
  let msiName: string;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new ImageBuilderClient(credential, subscriptionId);
    compute_client = new ComputeManagementClient(credential,subscriptionId);
    msi_client = new ManagedServiceIdentityClient(credential,subscriptionId);
    location = "eastus";
    resourceGroup = "myjstest";
    imageTemplateName = "myimageTemplatexxxz";
    diskName = "mydiskaaa";
    snapshotName = "mysnapshotaaa";
    imagesName = "myimagesaaa";
    msiName = "mymsiaaa";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("create parameter for virtualMachineImageTemplates test", async function() {
    //create a userAssignedIdentities
    const msiCreate = await msi_client.userAssignedIdentities.createOrUpdate(resourceGroup,msiName,{location: location});
    //create a disk
    const diskCreate = await compute_client.disks.beginCreateOrUpdateAndWait(resourceGroup,diskName,{
      location: location,
      creationData: {
          createOption: "Empty"
      },
      diskSizeGB: 200
    })
    //create a snapshots
    const snapshotsCreate = await compute_client.snapshots.beginCreateOrUpdateAndWait(resourceGroup,snapshotName,{
      location: location,
      creationData: {
          createOption: "Copy",
          sourceUri: "/subscriptions/" +subscriptionId +"/resourceGroups/" +resourceGroup +"/providers/Microsoft.Compute/disks/mydiskaaa",
      }
    })
    //create a images
    const imagesCreate = await compute_client.images.beginCreateOrUpdateAndWait(resourceGroup,imagesName,{
      location: location,
      storageProfile: {
          osDisk: {
              osType: "Linux",
              osState: "Generalized",
              snapshot: {
                  id: "subscriptions/" +subscriptionId +"/resourceGroups/" +resourceGroup +"/providers/Microsoft.Compute/snapshots/mysnapshotaaa",
              }
          }
      },
      hyperVGeneration: "V1"
    })
  });

  it("virtualMachineImageTemplates create test", async function() {

    if(isPlaybackMode()) { 
      this.skip(); 
    }
    //before create ,we need add msi owner authority for images in portal
    const res = await client.virtualMachineImageTemplates.beginCreateOrUpdateAndWait(resourceGroup,imageTemplateName,{
      location: location,
      tags: {
          tag1: "IT_T1",
          tag2: "IT2_T2"
      },
      identity: {
          type: "UserAssigned",
          userAssignedIdentities: {
              "/subscriptions/92f95d8f-3c67-4124-91c7-8cf07cdbf241/resourcegroups/myjstest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/mymsiaaa": {}
          }
      },
      source: {
          type: "ManagedImage",
          imageId: "/subscriptions/"+subscriptionId+"/resourceGroups/"+resourceGroup+"/providers/Microsoft.Compute/images/myimageaaa"
      },
      customize: [
          {
              type: "Shell",
              name: "Shell Customizer Example",
              scriptUri: "https://github.com/Azure/azure-quickstart-templates/blob/master/quickstarts/microsoft.compute/vm-msi/scripts/install-and-run-cli-2.sh"
          }
      ],
      distribute: [
          {
              type: "ManagedImage",
              location: location,
              runOutputName: "image_it_pir_1",
              imageId: "/subscriptions/"+subscriptionId+"/resourceGroups/"+resourceGroup+"/providers/Microsoft.Compute/images/myimageaaa",
              artifactTags: {
                  tagName: "value"
              }
          }
      ]
    })
  });

  it("virtualMachineImageTemplates get test", async function() {
    const res = await client.virtualMachineImageTemplates.get(resourceGroup,imageTemplateName);
    assert.equal(res.name,imageTemplateName);
  });

  it("virtualMachineImageTemplates list test", async function() {
    const resArray = new Array();
    for await (let item of client.virtualMachineImageTemplates.list()){
      resArray.push(item);
    }
    assert.equal(resArray.length,1);
  });

  it("virtualMachineImageTemplates delete test", async function() {
    const res = await client.virtualMachineImageTemplates.beginDeleteAndWait(resourceGroup,imageTemplateName);
    const resArray = new Array();
    for await (let item of client.virtualMachineImageTemplates.list()){
      resArray.push(item);
    }
    assert.equal(resArray.length,0);
  });

  it("delete parameter for virtualMachineImageTemplates test", async function() {
    const imagesDelete = await compute_client.images.beginDeleteAndWait(resourceGroup,imagesName)
    const snapshotsDelete = await compute_client.snapshots.beginDeleteAndWait(resourceGroup,snapshotName)
    const diskDelete = await compute_client.disks.beginDeleteAndWait(resourceGroup,diskName)
    const msiDelete = await msi_client.userAssignedIdentities.delete(resourceGroup,msiName);
  });
});
