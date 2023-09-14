/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ConsumptionManagementClient } = require("@azure/arm-consumption");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the reservations summaries for the defined scope daily or monthly grain.
 *
 * @summary Lists the reservations summaries for the defined scope daily or monthly grain.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationSummariesDailyWithBillingAccountId.json
 */
async function reservationSummariesDailyWithBillingAccountId() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope = "providers/Microsoft.Billing/billingAccounts/12345";
  const grain = "daily";
  const filter = "properties/usageDate ge 2017-10-01 AND properties/usageDate le 2017-11-20";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.reservationsSummaries.list(scope, grain, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

reservationSummariesDailyWithBillingAccountId().catch(console.error);

/**
 * This sample demonstrates how to Lists the reservations summaries for the defined scope daily or monthly grain.
 *
 * @summary Lists the reservations summaries for the defined scope daily or monthly grain.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationSummariesDailyWithBillingProfileId.json
 */
async function reservationSummariesDailyWithBillingProfileId() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:2468/billingProfiles/13579";
  const grain = "daily";
  const startDate = "2017-10-01";
  const endDate = "2017-11-20";
  const options = {
    startDate,
    endDate,
  };
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.reservationsSummaries.list(scope, grain, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

reservationSummariesDailyWithBillingProfileId().catch(console.error);

/**
 * This sample demonstrates how to Lists the reservations summaries for the defined scope daily or monthly grain.
 *
 * @summary Lists the reservations summaries for the defined scope daily or monthly grain.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationSummariesMonthlyWithBillingAccountId.json
 */
async function reservationSummariesMonthlyWithBillingAccountId() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope = "providers/Microsoft.Billing/billingAccounts/12345";
  const grain = "monthly";
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.reservationsSummaries.list(scope, grain)) {
    resArray.push(item);
  }
  console.log(resArray);
}

reservationSummariesMonthlyWithBillingAccountId().catch(console.error);

/**
 * This sample demonstrates how to Lists the reservations summaries for the defined scope daily or monthly grain.
 *
 * @summary Lists the reservations summaries for the defined scope daily or monthly grain.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationSummariesMonthlyWithBillingProfileId.json
 */
async function reservationSummariesMonthlyWithBillingProfileId() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:2468/billingProfiles/13579";
  const grain = "monthly";
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.reservationsSummaries.list(scope, grain)) {
    resArray.push(item);
  }
  console.log(resArray);
}

reservationSummariesMonthlyWithBillingProfileId().catch(console.error);

/**
 * This sample demonstrates how to Lists the reservations summaries for the defined scope daily or monthly grain.
 *
 * @summary Lists the reservations summaries for the defined scope daily or monthly grain.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationSummariesMonthlyWithBillingProfileIdReservationId.json
 */
async function reservationSummariesMonthlyWithBillingProfileIdReservationId() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:2468/billingProfiles/13579";
  const grain = "monthly";
  const reservationId = "1c6b6358-709f-484c-85f1-72e862a0cf3b";
  const reservationOrderId = "9f39ba10-794f-4dcb-8f4b-8d0cb47c27dc";
  const options = {
    reservationId,
    reservationOrderId,
  };
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.reservationsSummaries.list(scope, grain, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

reservationSummariesMonthlyWithBillingProfileIdReservationId().catch(console.error);
