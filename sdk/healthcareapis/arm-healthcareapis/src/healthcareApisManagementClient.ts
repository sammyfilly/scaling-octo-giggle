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
  ServicesImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  WorkspacesImpl,
  DicomServicesImpl,
  IotConnectorsImpl,
  FhirDestinationsImpl,
  IotConnectorFhirDestinationImpl,
  FhirServicesImpl,
  WorkspacePrivateEndpointConnectionsImpl,
  WorkspacePrivateLinkResourcesImpl,
  OperationsImpl,
  OperationResultsImpl
} from "./operations";
import {
  Services,
  PrivateEndpointConnections,
  PrivateLinkResources,
  Workspaces,
  DicomServices,
  IotConnectors,
  FhirDestinations,
  IotConnectorFhirDestination,
  FhirServices,
  WorkspacePrivateEndpointConnections,
  WorkspacePrivateLinkResources,
  Operations,
  OperationResults
} from "./operationsInterfaces";
import { HealthcareApisManagementClientOptionalParams } from "./models";

export class HealthcareApisManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the HealthcareApisManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: HealthcareApisManagementClientOptionalParams
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
    const defaults: HealthcareApisManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-healthcareapis/2.1.1`;
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
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-11-01";
    this.services = new ServicesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.workspaces = new WorkspacesImpl(this);
    this.dicomServices = new DicomServicesImpl(this);
    this.iotConnectors = new IotConnectorsImpl(this);
    this.fhirDestinations = new FhirDestinationsImpl(this);
    this.iotConnectorFhirDestination = new IotConnectorFhirDestinationImpl(
      this
    );
    this.fhirServices = new FhirServicesImpl(this);
    this.workspacePrivateEndpointConnections = new WorkspacePrivateEndpointConnectionsImpl(
      this
    );
    this.workspacePrivateLinkResources = new WorkspacePrivateLinkResourcesImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.operationResults = new OperationResultsImpl(this);
  }

  services: Services;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  workspaces: Workspaces;
  dicomServices: DicomServices;
  iotConnectors: IotConnectors;
  fhirDestinations: FhirDestinations;
  iotConnectorFhirDestination: IotConnectorFhirDestination;
  fhirServices: FhirServices;
  workspacePrivateEndpointConnections: WorkspacePrivateEndpointConnections;
  workspacePrivateLinkResources: WorkspacePrivateLinkResources;
  operations: Operations;
  operationResults: OperationResults;
}
