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
 * This sample demonstrates how to Returns the encryption settings of the manager.
 *
 * @summary Returns the encryption settings of the manager.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/ManagersGetEncryptionSettings.json
 */
const { StorSimple8000SeriesManagementClient } = require("@azure/arm-storsimple8000series");
const { DefaultAzureCredential } = require("@azure/identity");

async function managersGetEncryptionSettings() {
  const subscriptionId = "d3ebfe71-b7a9-4c57-92b9-68a2afde4de5";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(credential, subscriptionId);
  const result = await client.managers.getEncryptionSettings(resourceGroupName, managerName);
  console.log(result);
}

managersGetEncryptionSettings().catch(console.error);
