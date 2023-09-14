/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Vault, RecoveryServicesClient } from "@azure/arm-recoveryservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Recovery Services vault.
 *
 * @summary Creates or updates a Recovery Services vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-01-01/examples/PUTVault.json
 */
async function createOrUpdateRecoveryServicesVault() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName =
    process.env["RECOVERYSERVICES_RESOURCE_GROUP"] ||
    "Default-RecoveryServices-ResourceGroup";
  const vaultName = "swaggerExample";
  const vault: Vault = {
    identity: { type: "SystemAssigned" },
    location: "West US",
    properties: { publicNetworkAccess: "Enabled" },
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vaultName,
    vault
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Recovery Services vault.
 *
 * @summary Creates or updates a Recovery Services vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-01-01/examples/PUTVault_WithMonitoringSettings.json
 */
async function createOrUpdateVaultWithMonitoringSetting() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName =
    process.env["RECOVERYSERVICES_RESOURCE_GROUP"] ||
    "Default-RecoveryServices-ResourceGroup";
  const vaultName = "swaggerExample";
  const vault: Vault = {
    identity: { type: "SystemAssigned" },
    location: "West US",
    properties: {
      monitoringSettings: {
        azureMonitorAlertSettings: { alertsForAllJobFailures: "Enabled" },
        classicAlertSettings: { alertsForCriticalOperations: "Disabled" }
      },
      publicNetworkAccess: "Enabled"
    },
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vaultName,
    vault
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Recovery Services vault.
 *
 * @summary Creates or updates a Recovery Services vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-01-01/examples/PUTVault_WithCMK.json
 */
async function createOrUpdateVaultWithCustomerManagedKeys() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName =
    process.env["RECOVERYSERVICES_RESOURCE_GROUP"] ||
    "Default-RecoveryServices-ResourceGroup";
  const vaultName = "swaggerExample";
  const vault: Vault = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/85bf5e8c30844f42Add2746ebb7e97b2/resourcegroups/defaultrg/providers/MicrosoftManagedIdentity/userAssignedIdentities/examplemsi": {}
      }
    },
    location: "West US",
    properties: {
      encryption: {
        infrastructureEncryption: "Enabled",
        kekIdentity: {
          userAssignedIdentity:
            "/subscriptions/85bf5e8c-3084-4f42-add2-746ebb7e97b2/resourcegroups/defaultrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplemsi"
        },
        keyVaultProperties: {
          keyUri:
            "https://cmk2xkv.vault.azure.net/keys/Key1/0767b348bb1a4c07baa6c4ec0055d2b3"
        }
      },
      publicNetworkAccess: "Enabled"
    },
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vaultName,
    vault
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Recovery Services vault.
 *
 * @summary Creates or updates a Recovery Services vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2023-01-01/examples/PUTVault_WithUserAssignedIdentity.json
 */
async function createOrUpdateVaultWithUserAssignedIdentity() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName =
    process.env["RECOVERYSERVICES_RESOURCE_GROUP"] ||
    "Default-RecoveryServices-ResourceGroup";
  const vaultName = "swaggerExample";
  const vault: Vault = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/85bf5e8c30844f42Add2746ebb7e97b2/resourcegroups/defaultrg/providers/MicrosoftManagedIdentity/userAssignedIdentities/examplemsi": {}
      }
    },
    location: "West US",
    properties: { publicNetworkAccess: "Enabled" },
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.vaults.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vaultName,
    vault
  );
  console.log(result);
}

async function main() {
  createOrUpdateRecoveryServicesVault();
  createOrUpdateVaultWithMonitoringSetting();
  createOrUpdateVaultWithCustomerManagedKeys();
  createOrUpdateVaultWithUserAssignedIdentity();
}

main().catch(console.error);
