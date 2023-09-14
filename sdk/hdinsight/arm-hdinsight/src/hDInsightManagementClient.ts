/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  ClustersImpl,
  ApplicationsImpl,
  LocationsImpl,
  ConfigurationsImpl,
  ExtensionsImpl,
  ScriptActionsImpl,
  ScriptExecutionHistoryImpl,
  OperationsImpl,
  VirtualMachinesImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl
} from "./operations";
import {
  Clusters,
  Applications,
  Locations,
  Configurations,
  Extensions,
  ScriptActions,
  ScriptExecutionHistory,
  Operations,
  VirtualMachines,
  PrivateEndpointConnections,
  PrivateLinkResources
} from "./operationsInterfaces";
import { HDInsightManagementClientOptionalParams } from "./models";

export class HDInsightManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the HDInsightManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription credentials which uniquely identify Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: HDInsightManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: HDInsightManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-hdinsight/1.1.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-06-01";
    this.clusters = new ClustersImpl(this);
    this.applications = new ApplicationsImpl(this);
    this.locations = new LocationsImpl(this);
    this.configurations = new ConfigurationsImpl(this);
    this.extensions = new ExtensionsImpl(this);
    this.scriptActions = new ScriptActionsImpl(this);
    this.scriptExecutionHistory = new ScriptExecutionHistoryImpl(this);
    this.operations = new OperationsImpl(this);
    this.virtualMachines = new VirtualMachinesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
  }

  clusters: Clusters;
  applications: Applications;
  locations: Locations;
  configurations: Configurations;
  extensions: Extensions;
  scriptActions: ScriptActions;
  scriptExecutionHistory: ScriptExecutionHistory;
  operations: Operations;
  virtualMachines: VirtualMachines;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
}
