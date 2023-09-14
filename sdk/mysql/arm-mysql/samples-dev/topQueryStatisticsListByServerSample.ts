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
  TopQueryStatisticsInput,
  MySQLManagementClient
} from "@azure/arm-mysql";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieve the Query-Store top queries for specified metric and aggregation.
 *
 * @summary Retrieve the Query-Store top queries for specified metric and aggregation.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2018-06-01/examples/TopQueryStatisticsListByServer.json
 */
async function topQueryStatisticsListByServer() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "testResourceGroupName";
  const serverName = "testServerName";
  const parameters: TopQueryStatisticsInput = {
    aggregationFunction: "avg",
    aggregationWindow: "PT15M",
    numberOfTopQueries: 5,
    observationEndTime: new Date("2019-05-07T20:00:00.000Z"),
    observationStartTime: new Date("2019-05-01T20:00:00.000Z"),
    observedMetric: "duration"
  };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.topQueryStatistics.listByServer(
    resourceGroupName,
    serverName,
    parameters
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

topQueryStatisticsListByServer().catch(console.error);
