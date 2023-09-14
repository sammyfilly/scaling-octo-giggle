/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { OperationalInsightsManagementClient } from "../src/operationalInsightsManagementClient";
import { PipelineRequest, SendRequest } from "@azure/core-rest-pipeline";


const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("operationalinsights test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: OperationalInsightsManagementClient;
  let location: string;
  let resourceGroup: string;
  let workspaceName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new OperationalInsightsManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    // workspaceName = "workspacetest";
    workspaceName = "oiautorest6685";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("workspaces create test", async function () {
    const res = await client.workspaces.beginCreateOrUpdateAndWait(
      resourceGroup,
      workspaceName,
      {
        location,
        retentionInDays: 30,
        sku: { name: "PerGB2018" },
        tags: { tag1: "val1" }
      },
      testPollingOptions);
    assert.equal(res.name, workspaceName);
  });

  it("workspaces get test", async function () {
    const res = await client.workspaces.get(resourceGroup, workspaceName);
    assert.equal(res.name, workspaceName);
  });

  it("workspaces list test", async function () {
    const resArray = new Array();
    for await (let item of client.workspaces.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    // There are two workspace work for other services on the portal, so now after creating this service ,it is 3 .Next time it will be reverted to 1
    assert.equal(resArray.length, 3);
  });

  it("table list test", async function () {

    const resArray = new Array();
    for await (let item of client.tables.listByWorkspace(resourceGroup, workspaceName)) {
      resArray.push(item);
    }
  });

  it("workspaces delete test", async function () {
    const resArray = new Array();
    const res = await client.workspaces.beginDeleteAndWait(resourceGroup, workspaceName)
    for await (let item of client.workspaces.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    // There are two workspace work for other services on the portal, so it is 2. Next time it will be reverted to 0
    assert.equal(resArray.length, 2);
  });
})
