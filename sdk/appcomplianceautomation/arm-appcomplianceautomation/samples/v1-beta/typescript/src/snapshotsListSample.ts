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
  SnapshotsListOptionalParams,
  AppComplianceAutomationToolForMicrosoft365
} from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get the AppComplianceAutomation snapshot list.
 *
 * @summary Get the AppComplianceAutomation snapshot list.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/preview/2022-11-16-preview/examples/Snapshots_List.json
 */
async function snapshotsList() {
  const reportName = "testReportName";
  const skipToken = "1";
  const top = 100;
  const reportCreatorTenantId = "00000000-0000-0000-0000-000000000000";
  const offerGuid = "00000000-0000-0000-0000-000000000000";
  const options: SnapshotsListOptionalParams = {
    skipToken,
    top,
    reportCreatorTenantId,
    offerGuid
  };
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const resArray = new Array();
  for await (let item of client.snapshots.list(reportName, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

snapshotsList().catch(console.error);
