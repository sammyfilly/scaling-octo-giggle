/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApplicationInsightsManagementClient } = require("@azure/arm-appinsights");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update the ProactiveDetection configuration for this configuration id.
 *
 * @summary Update the ProactiveDetection configuration for this configuration id.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/ProactiveDetectionConfigurationUpdate.json
 */
async function proactiveDetectionConfigurationUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const resourceName = "my-component";
  const configurationId = "slowpageloadtime";
  const proactiveDetectionProperties = {
    customEmails: ["foo@microsoft.com", "foo2@microsoft.com"],
    enabled: true,
    lastUpdatedTime: undefined,
    name: "slowpageloadtime",
    ruleDefinitions: {
      description: "Smart Detection rules notify you of performance anomaly issues.",
      displayName: "Slow page load time",
      helpUrl:
        "https://docs.microsoft.com/en-us/azure/application-insights/app-insights-proactive-performance-diagnostics",
      isEnabledByDefault: true,
      isHidden: false,
      isInPreview: false,
      name: "slowpageloadtime",
      supportsEmailNotifications: true,
    },
    sendEmailsToSubscriptionOwners: true,
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(credential, subscriptionId);
  const result = await client.proactiveDetectionConfigurations.update(
    resourceGroupName,
    resourceName,
    configurationId,
    proactiveDetectionProperties
  );
  console.log(result);
}

proactiveDetectionConfigurationUpdate().catch(console.error);
