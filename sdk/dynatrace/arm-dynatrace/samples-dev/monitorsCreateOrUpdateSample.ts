/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorResource, DynatraceObservability } from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create a MonitorResource
 *
 * @summary Create a MonitorResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/preview/2021-09-01-preview/examples/Monitors_CreateOrUpdate_MaximumSet_Gen.json
 */
async function monitorsCreateOrUpdateMaximumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const resource: MonitorResource = {
    dynatraceEnvironmentProperties: {
      accountInfo: {},
      environmentInfo: {},
      singleSignOnProperties: {}
    },
    identity: { type: "SystemAssigned" },
    liftrResourceCategory: "Unknown",
    location: "West US 2",
    marketplaceSubscriptionStatus: "Active",
    monitoringStatus: "Enabled",
    planData: {
      billingCycle: "Monthly",
      effectiveDate: new Date("2019-08-30T15:14:33+02:00"),
      planDetails: "dynatraceapitestplan",
      usageType: "Committed"
    },
    provisioningState: "Accepted",
    tags: { environment: "Dev" },
    userInfo: {
      country: "westus2",
      emailAddress: "alice@microsoft.com",
      firstName: "Alice",
      lastName: "Bobab",
      phoneNumber: "123456"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    monitorName,
    resource
  );
  console.log(result);
}

monitorsCreateOrUpdateMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Create a MonitorResource
 *
 * @summary Create a MonitorResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/preview/2021-09-01-preview/examples/Monitors_CreateOrUpdate_MinimumSet_Gen.json
 */
async function monitorsCreateOrUpdateMinimumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const resource: MonitorResource = { location: "West US 2" };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    monitorName,
    resource
  );
  console.log(result);
}

monitorsCreateOrUpdateMinimumSetGen().catch(console.error);
