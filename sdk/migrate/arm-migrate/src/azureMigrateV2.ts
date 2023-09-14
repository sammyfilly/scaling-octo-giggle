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
  ProjectsImpl,
  MachinesImpl,
  GroupsImpl,
  AssessmentsImpl,
  AssessedMachinesImpl,
  HyperVCollectorsImpl,
  ServerCollectorsImpl,
  VMwareCollectorsImpl,
  ImportCollectorsImpl,
  PrivateEndpointConnectionOperationsImpl,
  PrivateLinkResourceOperationsImpl,
  OperationsImpl
} from "./operations";
import {
  Projects,
  Machines,
  Groups,
  Assessments,
  AssessedMachines,
  HyperVCollectors,
  ServerCollectors,
  VMwareCollectors,
  ImportCollectors,
  PrivateEndpointConnectionOperations,
  PrivateLinkResourceOperations,
  Operations
} from "./operationsInterfaces";
import { AzureMigrateV2OptionalParams } from "./models";

export class AzureMigrateV2 extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AzureMigrateV2 class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Azure Subscription Id in which project was created.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureMigrateV2OptionalParams
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
    const defaults: AzureMigrateV2OptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-migrate/2.0.0`;
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
    this.apiVersion = options.apiVersion || "2019-10-01";
    this.projects = new ProjectsImpl(this);
    this.machines = new MachinesImpl(this);
    this.groups = new GroupsImpl(this);
    this.assessments = new AssessmentsImpl(this);
    this.assessedMachines = new AssessedMachinesImpl(this);
    this.hyperVCollectors = new HyperVCollectorsImpl(this);
    this.serverCollectors = new ServerCollectorsImpl(this);
    this.vMwareCollectors = new VMwareCollectorsImpl(this);
    this.importCollectors = new ImportCollectorsImpl(this);
    this.privateEndpointConnectionOperations = new PrivateEndpointConnectionOperationsImpl(
      this
    );
    this.privateLinkResourceOperations = new PrivateLinkResourceOperationsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
  }

  projects: Projects;
  machines: Machines;
  groups: Groups;
  assessments: Assessments;
  assessedMachines: AssessedMachines;
  hyperVCollectors: HyperVCollectors;
  serverCollectors: ServerCollectors;
  vMwareCollectors: VMwareCollectors;
  importCollectors: ImportCollectors;
  privateEndpointConnectionOperations: PrivateEndpointConnectionOperations;
  privateLinkResourceOperations: PrivateLinkResourceOperations;
  operations: Operations;
}
