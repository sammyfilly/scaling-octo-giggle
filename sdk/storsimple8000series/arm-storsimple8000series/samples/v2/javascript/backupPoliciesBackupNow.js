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
 * This sample demonstrates how to Backup the backup policy now.
 *
 * @summary Backup the backup policy now.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/BackupPoliciesBackupNow.json
 */
const { StorSimple8000SeriesManagementClient } = require("@azure/arm-storsimple8000series");
const { DefaultAzureCredential } = require("@azure/identity");

async function backupPoliciesBackupNow() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "Device05ForSDKTest";
  const backupPolicyName = "BkUpPolicy01ForSDKTest";
  const backupType = "CloudSnapshot";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(credential, subscriptionId);
  const result = await client.backupPolicies.beginBackupNowAndWait(
    deviceName,
    backupPolicyName,
    backupType,
    resourceGroupName,
    managerName
  );
  console.log(result);
}

backupPoliciesBackupNow().catch(console.error);