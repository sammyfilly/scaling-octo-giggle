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
  Recorder
} from "@azure-tools/test-recorder";
import * as assert from "assert";

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

describe("My test", () => {
  let recorder: Recorder;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("sample test", async function() {
    console.log("Hi, I'm a test!");
  });
});
