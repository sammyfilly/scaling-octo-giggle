/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Peering, PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 *
 * @summary Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreateDirectPeering.json
 */
async function createADirectPeering() {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringName = "peeringName";
  const peering: Peering = {
    direct: {
      connections: [
        {
          bandwidthInMbps: 10000,
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000,
            maxPrefixesAdvertisedV6: 100,
            md5AuthenticationKey: "test-md5-auth-key",
            sessionPrefixV4: "192.168.0.0/31",
            sessionPrefixV6: "fd00::0/127"
          },
          connectionIdentifier: "5F4CB5C7-6B43-4444-9338-9ABC72606C16",
          peeringDBFacilityId: 99999,
          sessionAddressProvider: "Peer",
          useForPeeringService: false
        },
        {
          bandwidthInMbps: 10000,
          connectionIdentifier: "8AB00818-D533-4504-A25A-03A17F61201C",
          peeringDBFacilityId: 99999,
          sessionAddressProvider: "Microsoft",
          useForPeeringService: true
        }
      ],
      directPeeringType: "Edge",
      peerAsn: {
        id: "/subscriptions/subId/providers/Microsoft.Peering/peerAsns/myAsn1"
      }
    },
    kind: "Direct",
    location: "eastus",
    peeringLocation: "peeringLocation0",
    sku: { name: "Basic_Direct_Free" }
  };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.peerings.createOrUpdate(
    resourceGroupName,
    peeringName,
    peering
  );
  console.log(result);
}

createADirectPeering().catch(console.error);

/**
 * This sample demonstrates how to Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 *
 * @summary Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreatePeeringWithExchangeRouteServer.json
 */
async function createAPeeringWithExchangeRouteServer() {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringName = "peeringName";
  const peering: Peering = {
    direct: {
      connections: [
        {
          bandwidthInMbps: 10000,
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000,
            maxPrefixesAdvertisedV6: 100,
            microsoftSessionIPv4Address: "192.168.0.123",
            peerSessionIPv4Address: "192.168.0.234",
            sessionPrefixV4: "192.168.0.0/24"
          },
          connectionIdentifier: "5F4CB5C7-6B43-4444-9338-9ABC72606C16",
          peeringDBFacilityId: 99999,
          sessionAddressProvider: "Peer",
          useForPeeringService: true
        }
      ],
      directPeeringType: "IxRs",
      peerAsn: {
        id: "/subscriptions/subId/providers/Microsoft.Peering/peerAsns/myAsn1"
      }
    },
    kind: "Direct",
    location: "eastus",
    peeringLocation: "peeringLocation0",
    sku: { name: "Premium_Direct_Free" }
  };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.peerings.createOrUpdate(
    resourceGroupName,
    peeringName,
    peering
  );
  console.log(result);
}

createAPeeringWithExchangeRouteServer().catch(console.error);

/**
 * This sample demonstrates how to Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 *
 * @summary Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreateExchangePeering.json
 */
async function createAnExchangePeering() {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringName = "peeringName";
  const peering: Peering = {
    exchange: {
      connections: [
        {
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000,
            maxPrefixesAdvertisedV6: 100,
            md5AuthenticationKey: "test-md5-auth-key",
            peerSessionIPv4Address: "192.168.2.1",
            peerSessionIPv6Address: "fd00::1"
          },
          connectionIdentifier: "CE495334-0E94-4E51-8164-8116D6CD284D",
          peeringDBFacilityId: 99999
        },
        {
          bgpSession: {
            maxPrefixesAdvertisedV4: 1000,
            maxPrefixesAdvertisedV6: 100,
            md5AuthenticationKey: "test-md5-auth-key",
            peerSessionIPv4Address: "192.168.2.2",
            peerSessionIPv6Address: "fd00::2"
          },
          connectionIdentifier: "CDD8E673-CB07-47E6-84DE-3739F778762B",
          peeringDBFacilityId: 99999
        }
      ],
      peerAsn: {
        id: "/subscriptions/subId/providers/Microsoft.Peering/peerAsns/myAsn1"
      }
    },
    kind: "Exchange",
    location: "eastus",
    peeringLocation: "peeringLocation0",
    sku: { name: "Basic_Exchange_Free" }
  };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.peerings.createOrUpdate(
    resourceGroupName,
    peeringName,
    peering
  );
  console.log(result);
}

createAnExchangePeering().catch(console.error);
