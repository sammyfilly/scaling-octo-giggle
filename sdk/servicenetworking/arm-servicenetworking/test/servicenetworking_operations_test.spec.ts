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
import { ServiceNetworkingManagementClient } from "../src/serviceNetworkingManagementClient";

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

describe("ServiceNetworking test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ServiceNetworkingManagementClient;
  let location: string;
  let resourceGroup: string;
  let trafficControllerName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new ServiceNetworkingManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "NorthCentralUS";
    resourceGroup = "myjstest";
    trafficControllerName = "TC1"
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("trafficControllerInterface create test", async function () {
    const res = await client.trafficControllerInterface.beginCreateOrUpdateAndWait(
      resourceGroup,
      trafficControllerName,
      {
        location,
        tags: { key1: "value1" }
      },
      testPollingOptions);
    assert.equal(res.name, trafficControllerName);
  });

  it("trafficControllerInterface get test", async function () {
    const res = await client.trafficControllerInterface.get(resourceGroup, trafficControllerName);
    assert.equal(res.name, trafficControllerName);
  });

  it("trafficControllerInterface list test", async function () {
    const resArray = new Array();
    for await (let item of client.trafficControllerInterface.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("trafficControllerInterface delete test", async function () {
    const resArray = new Array();
    const res = await client.trafficControllerInterface.beginDeleteAndWait(resourceGroup, trafficControllerName)
    for await (let item of client.trafficControllerInterface.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
