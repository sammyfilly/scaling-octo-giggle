/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CdnManagementClient } = require("@azure/arm-cdn");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * @summary Creates a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/Endpoints_Create.json
 */
async function endpointsCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const endpoint = {
    contentTypesToCompress: ["text/html", "application/octet-stream"],
    defaultOriginGroup: {
      id: "/subscriptions/subid/resourceGroups/RG/providers/Microsoft.Cdn/profiles/profile1/endpoints/endpoint1/originGroups/originGroup1",
    },
    deliveryPolicy: {
      description: "Test description for a policy.",
      rules: [
        {
          name: "rule1",
          actions: [
            {
              name: "CacheExpiration",
              parameters: {
                cacheBehavior: "Override",
                cacheDuration: "10:10:09",
                cacheType: "All",
                typeName: "DeliveryRuleCacheExpirationActionParameters",
              },
            },
            {
              name: "ModifyResponseHeader",
              parameters: {
                headerAction: "Overwrite",
                headerName: "Access-Control-Allow-Origin",
                typeName: "DeliveryRuleHeaderActionParameters",
                value: "*",
              },
            },
            {
              name: "ModifyRequestHeader",
              parameters: {
                headerAction: "Overwrite",
                headerName: "Accept-Encoding",
                typeName: "DeliveryRuleHeaderActionParameters",
                value: "gzip",
              },
            },
          ],
          conditions: [
            {
              name: "RemoteAddress",
              parameters: {
                matchValues: ["192.168.1.0/24", "10.0.0.0/24"],
                negateCondition: true,
                operator: "IPMatch",
                typeName: "DeliveryRuleRemoteAddressConditionParameters",
              },
            },
          ],
          order: 1,
        },
      ],
    },
    isCompressionEnabled: true,
    isHttpAllowed: true,
    isHttpsAllowed: true,
    location: "WestUs",
    originGroups: [
      {
        name: "originGroup1",
        healthProbeSettings: {
          probeIntervalInSeconds: 120,
          probePath: "/health.aspx",
          probeProtocol: "Http",
          probeRequestType: "GET",
        },
        origins: [
          {
            id: "/subscriptions/subid/resourceGroups/RG/providers/Microsoft.Cdn/profiles/profile1/endpoints/endpoint1/origins/origin1",
          },
          {
            id: "/subscriptions/subid/resourceGroups/RG/providers/Microsoft.Cdn/profiles/profile1/endpoints/endpoint1/origins/origin2",
          },
        ],
        responseBasedOriginErrorDetectionSettings: {
          responseBasedDetectedErrorTypes: "TcpErrorsOnly",
          responseBasedFailoverThresholdPercentage: 10,
        },
      },
    ],
    originHostHeader: "www.bing.com",
    originPath: "/photos",
    origins: [
      {
        name: "origin1",
        enabled: true,
        hostName: "www.someDomain1.net",
        httpPort: 80,
        httpsPort: 443,
        originHostHeader: "www.someDomain1.net",
        priority: 1,
        weight: 50,
      },
      {
        name: "origin2",
        enabled: true,
        hostName: "www.someDomain2.net",
        httpPort: 80,
        httpsPort: 443,
        originHostHeader: "www.someDomain2.net",
        priority: 2,
        weight: 50,
      },
    ],
    queryStringCachingBehavior: "BypassCaching",
    tags: { key1: "value1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.endpoints.beginCreateAndWait(
    resourceGroupName,
    profileName,
    endpointName,
    endpoint
  );
  console.log(result);
}

endpointsCreate().catch(console.error);
