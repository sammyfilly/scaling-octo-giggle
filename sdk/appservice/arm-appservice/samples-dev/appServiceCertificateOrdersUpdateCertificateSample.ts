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
  AppServiceCertificatePatchResource,
  WebSiteManagementClient
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Description for Creates or updates a certificate and associates with key vault secret.
 *
 * @summary Description for Creates or updates a certificate and associates with key vault secret.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/UpdateAppServiceCertificate.json
 */
async function updateCertificate() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const certificateOrderName = "SampleCertificateOrderName";
  const name = "SampleCertName1";
  const keyVaultCertificate: AppServiceCertificatePatchResource = {
    keyVaultId:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName",
    keyVaultSecretName: "SampleSecretName1"
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.updateCertificate(
    resourceGroupName,
    certificateOrderName,
    name,
    keyVaultCertificate
  );
  console.log(result);
}

updateCertificate().catch(console.error);
