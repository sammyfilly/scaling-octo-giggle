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
  VpnConnectionPacketCaptureStartParameters,
  VpnConnectionsStartPacketCaptureOptionalParams,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Starts packet capture on Vpn connection in the specified resource group.
 *
 * @summary Starts packet capture on Vpn connection in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VpnConnectionStartPacketCaptureFilterData.json
 */
async function startPacketCaptureOnVpnConnectionWithFilter() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const gatewayName = "gateway1";
  const vpnConnectionName = "vpnConnection1";
  const parameters: VpnConnectionPacketCaptureStartParameters = {
    filterData:
      "{'TracingFlags': 11,'MaxPacketBufferSize': 120,'MaxFileSize': 200,'Filters': [{'SourceSubnets': ['20.1.1.0/24'],'DestinationSubnets': ['10.1.1.0/24'],'SourcePort': [500],'DestinationPort': [4500],'Protocol': 6,'TcpFlags': 16,'CaptureSingleDirectionTrafficOnly': true}]}",
    linkConnectionNames: ["siteLink1", "siteLink2"]
  };
  const options: VpnConnectionsStartPacketCaptureOptionalParams = {
    parameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnConnections.beginStartPacketCaptureAndWait(
    resourceGroupName,
    gatewayName,
    vpnConnectionName,
    options
  );
  console.log(result);
}

startPacketCaptureOnVpnConnectionWithFilter().catch(console.error);

/**
 * This sample demonstrates how to Starts packet capture on Vpn connection in the specified resource group.
 *
 * @summary Starts packet capture on Vpn connection in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VpnConnectionStartPacketCapture.json
 */
async function startPacketCaptureOnVpnConnectionWithoutFilter() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const gatewayName = "gateway1";
  const vpnConnectionName = "vpnConnection1";
  const parameters: VpnConnectionPacketCaptureStartParameters = {
    linkConnectionNames: ["siteLink1", "siteLink2"]
  };
  const options: VpnConnectionsStartPacketCaptureOptionalParams = {
    parameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnConnections.beginStartPacketCaptureAndWait(
    resourceGroupName,
    gatewayName,
    vpnConnectionName,
    options
  );
  console.log(result);
}

startPacketCaptureOnVpnConnectionWithoutFilter().catch(console.error);
