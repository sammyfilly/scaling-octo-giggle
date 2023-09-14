/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetAPIPolling.json
 */
async function getAApiPollingDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "316ec55e-7138-4d63-ab18-90c8a60fd1c8";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAApiPollingDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetAzureSecurityCenterById.json
 */
async function getAAscDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "763f9fa1-c2d3-4fa2-93e9-bccd4899aa12";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAAscDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetDynamics365DataConnectorById.json
 */
async function getADynamics365DataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "c2541efb-c9a6-47fe-9501-87d1017d1512";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getADynamics365DataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetGenericUI.json
 */
async function getAGenericUiDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "316ec55e-7138-4d63-ab18-90c8a60fd1c8";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAGenericUiDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetIoTById.json
 */
async function getAIoTDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "d2e5dc7a-f3a2-429d-954b-939fa8c2932e";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAIoTDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetMicrosoftCloudAppSecurityById.json
 */
async function getAMcasDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "b96d014d-b5c2-4a01-9aba-a8058f629d42";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAMcasDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetMicrosoftDefenderAdvancedThreatProtectionById.json
 */
async function getAMdatpDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "06b3ccb8-1384-4bcc-aec7-852f6d57161b";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAMdatpDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetMicrosoftThreatIntelligenceById.json
 */
async function getAMicrosoftThreatIntelligenceDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "c345bf40-8509-4ed2-b947-50cb773aaf04";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAMicrosoftThreatIntelligenceDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetMicrosoftThreatProtectionById.json
 */
async function getAMicrosoftThreatProtectionDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "c345bf40-8509-4ed2-b947-50cb773aaf04";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAMicrosoftThreatProtectionDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetThreatIntelligenceTaxiiById.json
 */
async function getATiTaxiiDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "c39bb458-02a7-4b3f-b0c8-71a1d2692652";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getATiTaxiiDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetThreatIntelligenceById.json
 */
async function getATiDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "c345bf40-8509-4ed2-b947-50cb773aaf04";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getATiDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetAzureActiveDirectoryById.json
 */
async function getAnAadDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "f0cd27d2-5f03-4c06-ba31-d2dc82dcb51d";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnAadDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetAzureAdvancedThreatProtectionById.json
 */
async function getAnAatpDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "07e42cb3-e658-4e90-801c-efa0f29d3d44";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnAatpDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetAmazonWebServicesS3ById.json
 */
async function getAnAwsS3DataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "afef3743-0c88-469c-84ff-ca2e87dc1e48";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnAwsS3DataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetAmazonWebServicesCloudTrailById.json
 */
async function getAnAwsCloudTrailDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "c345bf40-8509-4ed2-b947-50cb773aaf04";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnAwsCloudTrailDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetOffice365AdvancedThreatProtectionById.json
 */
async function getAnOfficeAtpDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "3d3e955e-33eb-401d-89a7-251c81ddd660";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnOfficeAtpDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetMicrosoftInsiderRiskManagementById.json
 */
async function getAnOfficeIrmDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "3d3e955e-33eb-401d-89a7-251c81ddd660";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnOfficeIrmDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetOfficePowerBIDataConnetorById.json
 */
async function getAnOffice365PowerBiDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnOffice365PowerBiDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetOffice365ProjectDataConnetorById.json
 */
async function getAnOffice365ProjectDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnOffice365ProjectDataConnector().catch(console.error);

/**
 * This sample demonstrates how to Gets a data connector.
 *
 * @summary Gets a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/GetOfficeDataConnetorById.json
 */
async function getAnOffice365DataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.get(
    resourceGroupName,
    workspaceName,
    dataConnectorId
  );
  console.log(result);
}

getAnOffice365DataConnector().catch(console.error);
