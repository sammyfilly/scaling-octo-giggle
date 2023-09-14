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
  RecoverableDatabasesImpl,
  DataMaskingPoliciesImpl,
  DataMaskingRulesImpl,
  GeoBackupPoliciesImpl,
  DatabasesImpl,
  ElasticPoolsImpl,
  ReplicationLinksImpl,
  ServerCommunicationLinksImpl,
  ServiceObjectivesImpl,
  ElasticPoolActivitiesImpl,
  ElasticPoolDatabaseActivitiesImpl,
  ServerUsagesImpl,
  ExtendedDatabaseBlobAuditingPoliciesImpl,
  ExtendedServerBlobAuditingPoliciesImpl,
  ServerBlobAuditingPoliciesImpl,
  DatabaseBlobAuditingPoliciesImpl,
  DatabaseAdvisorsImpl,
  DatabaseAutomaticTuningOperationsImpl,
  DatabaseColumnsImpl,
  DatabaseRecommendedActionsImpl,
  DatabaseSchemasImpl,
  DatabaseSecurityAlertPoliciesImpl,
  DatabaseTablesImpl,
  DatabaseVulnerabilityAssessmentRuleBaselinesImpl,
  DatabaseVulnerabilityAssessmentsImpl,
  DatabaseVulnerabilityAssessmentScansImpl,
  DataWarehouseUserActivitiesOperationsImpl,
  DeletedServersImpl,
  ElasticPoolOperationsImpl,
  EncryptionProtectorsImpl,
  FailoverGroupsImpl,
  FirewallRulesImpl,
  InstanceFailoverGroupsImpl,
  InstancePoolsImpl,
  JobAgentsImpl,
  JobCredentialsImpl,
  JobExecutionsImpl,
  JobsImpl,
  JobStepExecutionsImpl,
  JobStepsImpl,
  JobTargetExecutionsImpl,
  JobTargetGroupsImpl,
  JobVersionsImpl,
  CapabilitiesImpl,
  LongTermRetentionPoliciesImpl,
  MaintenanceWindowOptionsOperationsImpl,
  MaintenanceWindowsOperationsImpl,
  ManagedBackupShortTermRetentionPoliciesImpl,
  ManagedDatabaseColumnsImpl,
  ManagedDatabaseQueriesImpl,
  ManagedDatabaseRestoreDetailsImpl,
  ManagedDatabasesImpl,
  ManagedDatabaseSchemasImpl,
  ManagedDatabaseSecurityAlertPoliciesImpl,
  ManagedDatabaseSecurityEventsImpl,
  ManagedDatabaseSensitivityLabelsImpl,
  ManagedDatabaseRecommendedSensitivityLabelsImpl,
  ManagedDatabaseTablesImpl,
  ManagedDatabaseTransparentDataEncryptionImpl,
  ManagedDatabaseVulnerabilityAssessmentRuleBaselinesImpl,
  ManagedDatabaseVulnerabilityAssessmentsImpl,
  ManagedDatabaseVulnerabilityAssessmentScansImpl,
  ManagedInstanceAdministratorsImpl,
  ManagedInstanceAzureADOnlyAuthenticationsImpl,
  ManagedInstanceEncryptionProtectorsImpl,
  ManagedInstanceKeysImpl,
  ManagedInstanceLongTermRetentionPoliciesImpl,
  ManagedInstanceOperationsImpl,
  ManagedInstancePrivateEndpointConnectionsImpl,
  ManagedInstancePrivateLinkResourcesImpl,
  ManagedInstanceTdeCertificatesImpl,
  ManagedInstanceVulnerabilityAssessmentsImpl,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesImpl,
  ManagedServerSecurityAlertPoliciesImpl,
  OperationsImpl,
  OperationsHealthOperationsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  RecoverableManagedDatabasesImpl,
  RestorePointsImpl,
  SensitivityLabelsImpl,
  RecommendedSensitivityLabelsImpl,
  ServerAdvisorsImpl,
  ServerAutomaticTuningOperationsImpl,
  ServerAzureADAdministratorsImpl,
  ServerAzureADOnlyAuthenticationsImpl,
  ServerDevOpsAuditSettingsImpl,
  ServerDnsAliasesImpl,
  ServerKeysImpl,
  ServerOperationsImpl,
  ServerSecurityAlertPoliciesImpl,
  ServerTrustGroupsImpl,
  ServerVulnerabilityAssessmentsImpl,
  SqlAgentImpl,
  SubscriptionUsagesImpl,
  SyncAgentsImpl,
  SyncGroupsImpl,
  SyncMembersImpl,
  TdeCertificatesImpl,
  TimeZonesImpl,
  VirtualClustersImpl,
  VirtualNetworkRulesImpl,
  WorkloadClassifiersImpl,
  WorkloadGroupsImpl,
  TransparentDataEncryptionsImpl,
  BackupShortTermRetentionPoliciesImpl,
  DatabaseExtensionsOperationsImpl,
  DatabaseOperationsImpl,
  DatabaseUsagesImpl,
  LedgerDigestUploadsOperationsImpl,
  OutboundFirewallRulesImpl,
  ServersImpl,
  UsagesImpl,
  LongTermRetentionBackupsImpl,
  LongTermRetentionManagedInstanceBackupsImpl,
  ManagedInstancesImpl,
  RestorableDroppedDatabasesImpl,
  RestorableDroppedManagedDatabasesImpl,
  ServerConnectionPoliciesImpl
} from "./operations";
import {
  RecoverableDatabases,
  DataMaskingPolicies,
  DataMaskingRules,
  GeoBackupPolicies,
  Databases,
  ElasticPools,
  ReplicationLinks,
  ServerCommunicationLinks,
  ServiceObjectives,
  ElasticPoolActivities,
  ElasticPoolDatabaseActivities,
  ServerUsages,
  ExtendedDatabaseBlobAuditingPolicies,
  ExtendedServerBlobAuditingPolicies,
  ServerBlobAuditingPolicies,
  DatabaseBlobAuditingPolicies,
  DatabaseAdvisors,
  DatabaseAutomaticTuningOperations,
  DatabaseColumns,
  DatabaseRecommendedActions,
  DatabaseSchemas,
  DatabaseSecurityAlertPolicies,
  DatabaseTables,
  DatabaseVulnerabilityAssessmentRuleBaselines,
  DatabaseVulnerabilityAssessments,
  DatabaseVulnerabilityAssessmentScans,
  DataWarehouseUserActivitiesOperations,
  DeletedServers,
  ElasticPoolOperations,
  EncryptionProtectors,
  FailoverGroups,
  FirewallRules,
  InstanceFailoverGroups,
  InstancePools,
  JobAgents,
  JobCredentials,
  JobExecutions,
  Jobs,
  JobStepExecutions,
  JobSteps,
  JobTargetExecutions,
  JobTargetGroups,
  JobVersions,
  Capabilities,
  LongTermRetentionPolicies,
  MaintenanceWindowOptionsOperations,
  MaintenanceWindowsOperations,
  ManagedBackupShortTermRetentionPolicies,
  ManagedDatabaseColumns,
  ManagedDatabaseQueries,
  ManagedDatabaseRestoreDetails,
  ManagedDatabases,
  ManagedDatabaseSchemas,
  ManagedDatabaseSecurityAlertPolicies,
  ManagedDatabaseSecurityEvents,
  ManagedDatabaseSensitivityLabels,
  ManagedDatabaseRecommendedSensitivityLabels,
  ManagedDatabaseTables,
  ManagedDatabaseTransparentDataEncryption,
  ManagedDatabaseVulnerabilityAssessmentRuleBaselines,
  ManagedDatabaseVulnerabilityAssessments,
  ManagedDatabaseVulnerabilityAssessmentScans,
  ManagedInstanceAdministrators,
  ManagedInstanceAzureADOnlyAuthentications,
  ManagedInstanceEncryptionProtectors,
  ManagedInstanceKeys,
  ManagedInstanceLongTermRetentionPolicies,
  ManagedInstanceOperations,
  ManagedInstancePrivateEndpointConnections,
  ManagedInstancePrivateLinkResources,
  ManagedInstanceTdeCertificates,
  ManagedInstanceVulnerabilityAssessments,
  ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies,
  ManagedServerSecurityAlertPolicies,
  Operations,
  OperationsHealthOperations,
  PrivateEndpointConnections,
  PrivateLinkResources,
  RecoverableManagedDatabases,
  RestorePoints,
  SensitivityLabels,
  RecommendedSensitivityLabels,
  ServerAdvisors,
  ServerAutomaticTuningOperations,
  ServerAzureADAdministrators,
  ServerAzureADOnlyAuthentications,
  ServerDevOpsAuditSettings,
  ServerDnsAliases,
  ServerKeys,
  ServerOperations,
  ServerSecurityAlertPolicies,
  ServerTrustGroups,
  ServerVulnerabilityAssessments,
  SqlAgent,
  SubscriptionUsages,
  SyncAgents,
  SyncGroups,
  SyncMembers,
  TdeCertificates,
  TimeZones,
  VirtualClusters,
  VirtualNetworkRules,
  WorkloadClassifiers,
  WorkloadGroups,
  TransparentDataEncryptions,
  BackupShortTermRetentionPolicies,
  DatabaseExtensionsOperations,
  DatabaseOperations,
  DatabaseUsages,
  LedgerDigestUploadsOperations,
  OutboundFirewallRules,
  Servers,
  Usages,
  LongTermRetentionBackups,
  LongTermRetentionManagedInstanceBackups,
  ManagedInstances,
  RestorableDroppedDatabases,
  RestorableDroppedManagedDatabases,
  ServerConnectionPolicies
} from "./operationsInterfaces";
import { SqlManagementClientOptionalParams } from "./models";

export class SqlManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the SqlManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription ID that identifies an Azure subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: SqlManagementClientOptionalParams
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
    const defaults: SqlManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-sql/9.0.0`;
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
    this.recoverableDatabases = new RecoverableDatabasesImpl(this);
    this.dataMaskingPolicies = new DataMaskingPoliciesImpl(this);
    this.dataMaskingRules = new DataMaskingRulesImpl(this);
    this.geoBackupPolicies = new GeoBackupPoliciesImpl(this);
    this.databases = new DatabasesImpl(this);
    this.elasticPools = new ElasticPoolsImpl(this);
    this.replicationLinks = new ReplicationLinksImpl(this);
    this.serverCommunicationLinks = new ServerCommunicationLinksImpl(this);
    this.serviceObjectives = new ServiceObjectivesImpl(this);
    this.elasticPoolActivities = new ElasticPoolActivitiesImpl(this);
    this.elasticPoolDatabaseActivities = new ElasticPoolDatabaseActivitiesImpl(
      this
    );
    this.serverUsages = new ServerUsagesImpl(this);
    this.extendedDatabaseBlobAuditingPolicies = new ExtendedDatabaseBlobAuditingPoliciesImpl(
      this
    );
    this.extendedServerBlobAuditingPolicies = new ExtendedServerBlobAuditingPoliciesImpl(
      this
    );
    this.serverBlobAuditingPolicies = new ServerBlobAuditingPoliciesImpl(this);
    this.databaseBlobAuditingPolicies = new DatabaseBlobAuditingPoliciesImpl(
      this
    );
    this.databaseAdvisors = new DatabaseAdvisorsImpl(this);
    this.databaseAutomaticTuningOperations = new DatabaseAutomaticTuningOperationsImpl(
      this
    );
    this.databaseColumns = new DatabaseColumnsImpl(this);
    this.databaseRecommendedActions = new DatabaseRecommendedActionsImpl(this);
    this.databaseSchemas = new DatabaseSchemasImpl(this);
    this.databaseSecurityAlertPolicies = new DatabaseSecurityAlertPoliciesImpl(
      this
    );
    this.databaseTables = new DatabaseTablesImpl(this);
    this.databaseVulnerabilityAssessmentRuleBaselines = new DatabaseVulnerabilityAssessmentRuleBaselinesImpl(
      this
    );
    this.databaseVulnerabilityAssessments = new DatabaseVulnerabilityAssessmentsImpl(
      this
    );
    this.databaseVulnerabilityAssessmentScans = new DatabaseVulnerabilityAssessmentScansImpl(
      this
    );
    this.dataWarehouseUserActivitiesOperations = new DataWarehouseUserActivitiesOperationsImpl(
      this
    );
    this.deletedServers = new DeletedServersImpl(this);
    this.elasticPoolOperations = new ElasticPoolOperationsImpl(this);
    this.encryptionProtectors = new EncryptionProtectorsImpl(this);
    this.failoverGroups = new FailoverGroupsImpl(this);
    this.firewallRules = new FirewallRulesImpl(this);
    this.instanceFailoverGroups = new InstanceFailoverGroupsImpl(this);
    this.instancePools = new InstancePoolsImpl(this);
    this.jobAgents = new JobAgentsImpl(this);
    this.jobCredentials = new JobCredentialsImpl(this);
    this.jobExecutions = new JobExecutionsImpl(this);
    this.jobs = new JobsImpl(this);
    this.jobStepExecutions = new JobStepExecutionsImpl(this);
    this.jobSteps = new JobStepsImpl(this);
    this.jobTargetExecutions = new JobTargetExecutionsImpl(this);
    this.jobTargetGroups = new JobTargetGroupsImpl(this);
    this.jobVersions = new JobVersionsImpl(this);
    this.capabilities = new CapabilitiesImpl(this);
    this.longTermRetentionPolicies = new LongTermRetentionPoliciesImpl(this);
    this.maintenanceWindowOptionsOperations = new MaintenanceWindowOptionsOperationsImpl(
      this
    );
    this.maintenanceWindowsOperations = new MaintenanceWindowsOperationsImpl(
      this
    );
    this.managedBackupShortTermRetentionPolicies = new ManagedBackupShortTermRetentionPoliciesImpl(
      this
    );
    this.managedDatabaseColumns = new ManagedDatabaseColumnsImpl(this);
    this.managedDatabaseQueries = new ManagedDatabaseQueriesImpl(this);
    this.managedDatabaseRestoreDetails = new ManagedDatabaseRestoreDetailsImpl(
      this
    );
    this.managedDatabases = new ManagedDatabasesImpl(this);
    this.managedDatabaseSchemas = new ManagedDatabaseSchemasImpl(this);
    this.managedDatabaseSecurityAlertPolicies = new ManagedDatabaseSecurityAlertPoliciesImpl(
      this
    );
    this.managedDatabaseSecurityEvents = new ManagedDatabaseSecurityEventsImpl(
      this
    );
    this.managedDatabaseSensitivityLabels = new ManagedDatabaseSensitivityLabelsImpl(
      this
    );
    this.managedDatabaseRecommendedSensitivityLabels = new ManagedDatabaseRecommendedSensitivityLabelsImpl(
      this
    );
    this.managedDatabaseTables = new ManagedDatabaseTablesImpl(this);
    this.managedDatabaseTransparentDataEncryption = new ManagedDatabaseTransparentDataEncryptionImpl(
      this
    );
    this.managedDatabaseVulnerabilityAssessmentRuleBaselines = new ManagedDatabaseVulnerabilityAssessmentRuleBaselinesImpl(
      this
    );
    this.managedDatabaseVulnerabilityAssessments = new ManagedDatabaseVulnerabilityAssessmentsImpl(
      this
    );
    this.managedDatabaseVulnerabilityAssessmentScans = new ManagedDatabaseVulnerabilityAssessmentScansImpl(
      this
    );
    this.managedInstanceAdministrators = new ManagedInstanceAdministratorsImpl(
      this
    );
    this.managedInstanceAzureADOnlyAuthentications = new ManagedInstanceAzureADOnlyAuthenticationsImpl(
      this
    );
    this.managedInstanceEncryptionProtectors = new ManagedInstanceEncryptionProtectorsImpl(
      this
    );
    this.managedInstanceKeys = new ManagedInstanceKeysImpl(this);
    this.managedInstanceLongTermRetentionPolicies = new ManagedInstanceLongTermRetentionPoliciesImpl(
      this
    );
    this.managedInstanceOperations = new ManagedInstanceOperationsImpl(this);
    this.managedInstancePrivateEndpointConnections = new ManagedInstancePrivateEndpointConnectionsImpl(
      this
    );
    this.managedInstancePrivateLinkResources = new ManagedInstancePrivateLinkResourcesImpl(
      this
    );
    this.managedInstanceTdeCertificates = new ManagedInstanceTdeCertificatesImpl(
      this
    );
    this.managedInstanceVulnerabilityAssessments = new ManagedInstanceVulnerabilityAssessmentsImpl(
      this
    );
    this.managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies = new ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesImpl(
      this
    );
    this.managedServerSecurityAlertPolicies = new ManagedServerSecurityAlertPoliciesImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.operationsHealthOperations = new OperationsHealthOperationsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.recoverableManagedDatabases = new RecoverableManagedDatabasesImpl(
      this
    );
    this.restorePoints = new RestorePointsImpl(this);
    this.sensitivityLabels = new SensitivityLabelsImpl(this);
    this.recommendedSensitivityLabels = new RecommendedSensitivityLabelsImpl(
      this
    );
    this.serverAdvisors = new ServerAdvisorsImpl(this);
    this.serverAutomaticTuningOperations = new ServerAutomaticTuningOperationsImpl(
      this
    );
    this.serverAzureADAdministrators = new ServerAzureADAdministratorsImpl(
      this
    );
    this.serverAzureADOnlyAuthentications = new ServerAzureADOnlyAuthenticationsImpl(
      this
    );
    this.serverDevOpsAuditSettings = new ServerDevOpsAuditSettingsImpl(this);
    this.serverDnsAliases = new ServerDnsAliasesImpl(this);
    this.serverKeys = new ServerKeysImpl(this);
    this.serverOperations = new ServerOperationsImpl(this);
    this.serverSecurityAlertPolicies = new ServerSecurityAlertPoliciesImpl(
      this
    );
    this.serverTrustGroups = new ServerTrustGroupsImpl(this);
    this.serverVulnerabilityAssessments = new ServerVulnerabilityAssessmentsImpl(
      this
    );
    this.sqlAgent = new SqlAgentImpl(this);
    this.subscriptionUsages = new SubscriptionUsagesImpl(this);
    this.syncAgents = new SyncAgentsImpl(this);
    this.syncGroups = new SyncGroupsImpl(this);
    this.syncMembers = new SyncMembersImpl(this);
    this.tdeCertificates = new TdeCertificatesImpl(this);
    this.timeZones = new TimeZonesImpl(this);
    this.virtualClusters = new VirtualClustersImpl(this);
    this.virtualNetworkRules = new VirtualNetworkRulesImpl(this);
    this.workloadClassifiers = new WorkloadClassifiersImpl(this);
    this.workloadGroups = new WorkloadGroupsImpl(this);
    this.transparentDataEncryptions = new TransparentDataEncryptionsImpl(this);
    this.backupShortTermRetentionPolicies = new BackupShortTermRetentionPoliciesImpl(
      this
    );
    this.databaseExtensionsOperations = new DatabaseExtensionsOperationsImpl(
      this
    );
    this.databaseOperations = new DatabaseOperationsImpl(this);
    this.databaseUsages = new DatabaseUsagesImpl(this);
    this.ledgerDigestUploadsOperations = new LedgerDigestUploadsOperationsImpl(
      this
    );
    this.outboundFirewallRules = new OutboundFirewallRulesImpl(this);
    this.servers = new ServersImpl(this);
    this.usages = new UsagesImpl(this);
    this.longTermRetentionBackups = new LongTermRetentionBackupsImpl(this);
    this.longTermRetentionManagedInstanceBackups = new LongTermRetentionManagedInstanceBackupsImpl(
      this
    );
    this.managedInstances = new ManagedInstancesImpl(this);
    this.restorableDroppedDatabases = new RestorableDroppedDatabasesImpl(this);
    this.restorableDroppedManagedDatabases = new RestorableDroppedManagedDatabasesImpl(
      this
    );
    this.serverConnectionPolicies = new ServerConnectionPoliciesImpl(this);
  }

  recoverableDatabases: RecoverableDatabases;
  dataMaskingPolicies: DataMaskingPolicies;
  dataMaskingRules: DataMaskingRules;
  geoBackupPolicies: GeoBackupPolicies;
  databases: Databases;
  elasticPools: ElasticPools;
  replicationLinks: ReplicationLinks;
  serverCommunicationLinks: ServerCommunicationLinks;
  serviceObjectives: ServiceObjectives;
  elasticPoolActivities: ElasticPoolActivities;
  elasticPoolDatabaseActivities: ElasticPoolDatabaseActivities;
  serverUsages: ServerUsages;
  extendedDatabaseBlobAuditingPolicies: ExtendedDatabaseBlobAuditingPolicies;
  extendedServerBlobAuditingPolicies: ExtendedServerBlobAuditingPolicies;
  serverBlobAuditingPolicies: ServerBlobAuditingPolicies;
  databaseBlobAuditingPolicies: DatabaseBlobAuditingPolicies;
  databaseAdvisors: DatabaseAdvisors;
  databaseAutomaticTuningOperations: DatabaseAutomaticTuningOperations;
  databaseColumns: DatabaseColumns;
  databaseRecommendedActions: DatabaseRecommendedActions;
  databaseSchemas: DatabaseSchemas;
  databaseSecurityAlertPolicies: DatabaseSecurityAlertPolicies;
  databaseTables: DatabaseTables;
  databaseVulnerabilityAssessmentRuleBaselines: DatabaseVulnerabilityAssessmentRuleBaselines;
  databaseVulnerabilityAssessments: DatabaseVulnerabilityAssessments;
  databaseVulnerabilityAssessmentScans: DatabaseVulnerabilityAssessmentScans;
  dataWarehouseUserActivitiesOperations: DataWarehouseUserActivitiesOperations;
  deletedServers: DeletedServers;
  elasticPoolOperations: ElasticPoolOperations;
  encryptionProtectors: EncryptionProtectors;
  failoverGroups: FailoverGroups;
  firewallRules: FirewallRules;
  instanceFailoverGroups: InstanceFailoverGroups;
  instancePools: InstancePools;
  jobAgents: JobAgents;
  jobCredentials: JobCredentials;
  jobExecutions: JobExecutions;
  jobs: Jobs;
  jobStepExecutions: JobStepExecutions;
  jobSteps: JobSteps;
  jobTargetExecutions: JobTargetExecutions;
  jobTargetGroups: JobTargetGroups;
  jobVersions: JobVersions;
  capabilities: Capabilities;
  longTermRetentionPolicies: LongTermRetentionPolicies;
  maintenanceWindowOptionsOperations: MaintenanceWindowOptionsOperations;
  maintenanceWindowsOperations: MaintenanceWindowsOperations;
  managedBackupShortTermRetentionPolicies: ManagedBackupShortTermRetentionPolicies;
  managedDatabaseColumns: ManagedDatabaseColumns;
  managedDatabaseQueries: ManagedDatabaseQueries;
  managedDatabaseRestoreDetails: ManagedDatabaseRestoreDetails;
  managedDatabases: ManagedDatabases;
  managedDatabaseSchemas: ManagedDatabaseSchemas;
  managedDatabaseSecurityAlertPolicies: ManagedDatabaseSecurityAlertPolicies;
  managedDatabaseSecurityEvents: ManagedDatabaseSecurityEvents;
  managedDatabaseSensitivityLabels: ManagedDatabaseSensitivityLabels;
  managedDatabaseRecommendedSensitivityLabels: ManagedDatabaseRecommendedSensitivityLabels;
  managedDatabaseTables: ManagedDatabaseTables;
  managedDatabaseTransparentDataEncryption: ManagedDatabaseTransparentDataEncryption;
  managedDatabaseVulnerabilityAssessmentRuleBaselines: ManagedDatabaseVulnerabilityAssessmentRuleBaselines;
  managedDatabaseVulnerabilityAssessments: ManagedDatabaseVulnerabilityAssessments;
  managedDatabaseVulnerabilityAssessmentScans: ManagedDatabaseVulnerabilityAssessmentScans;
  managedInstanceAdministrators: ManagedInstanceAdministrators;
  managedInstanceAzureADOnlyAuthentications: ManagedInstanceAzureADOnlyAuthentications;
  managedInstanceEncryptionProtectors: ManagedInstanceEncryptionProtectors;
  managedInstanceKeys: ManagedInstanceKeys;
  managedInstanceLongTermRetentionPolicies: ManagedInstanceLongTermRetentionPolicies;
  managedInstanceOperations: ManagedInstanceOperations;
  managedInstancePrivateEndpointConnections: ManagedInstancePrivateEndpointConnections;
  managedInstancePrivateLinkResources: ManagedInstancePrivateLinkResources;
  managedInstanceTdeCertificates: ManagedInstanceTdeCertificates;
  managedInstanceVulnerabilityAssessments: ManagedInstanceVulnerabilityAssessments;
  managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies;
  managedServerSecurityAlertPolicies: ManagedServerSecurityAlertPolicies;
  operations: Operations;
  operationsHealthOperations: OperationsHealthOperations;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  recoverableManagedDatabases: RecoverableManagedDatabases;
  restorePoints: RestorePoints;
  sensitivityLabels: SensitivityLabels;
  recommendedSensitivityLabels: RecommendedSensitivityLabels;
  serverAdvisors: ServerAdvisors;
  serverAutomaticTuningOperations: ServerAutomaticTuningOperations;
  serverAzureADAdministrators: ServerAzureADAdministrators;
  serverAzureADOnlyAuthentications: ServerAzureADOnlyAuthentications;
  serverDevOpsAuditSettings: ServerDevOpsAuditSettings;
  serverDnsAliases: ServerDnsAliases;
  serverKeys: ServerKeys;
  serverOperations: ServerOperations;
  serverSecurityAlertPolicies: ServerSecurityAlertPolicies;
  serverTrustGroups: ServerTrustGroups;
  serverVulnerabilityAssessments: ServerVulnerabilityAssessments;
  sqlAgent: SqlAgent;
  subscriptionUsages: SubscriptionUsages;
  syncAgents: SyncAgents;
  syncGroups: SyncGroups;
  syncMembers: SyncMembers;
  tdeCertificates: TdeCertificates;
  timeZones: TimeZones;
  virtualClusters: VirtualClusters;
  virtualNetworkRules: VirtualNetworkRules;
  workloadClassifiers: WorkloadClassifiers;
  workloadGroups: WorkloadGroups;
  transparentDataEncryptions: TransparentDataEncryptions;
  backupShortTermRetentionPolicies: BackupShortTermRetentionPolicies;
  databaseExtensionsOperations: DatabaseExtensionsOperations;
  databaseOperations: DatabaseOperations;
  databaseUsages: DatabaseUsages;
  ledgerDigestUploadsOperations: LedgerDigestUploadsOperations;
  outboundFirewallRules: OutboundFirewallRules;
  servers: Servers;
  usages: Usages;
  longTermRetentionBackups: LongTermRetentionBackups;
  longTermRetentionManagedInstanceBackups: LongTermRetentionManagedInstanceBackups;
  managedInstances: ManagedInstances;
  restorableDroppedDatabases: RestorableDroppedDatabases;
  restorableDroppedManagedDatabases: RestorableDroppedManagedDatabases;
  serverConnectionPolicies: ServerConnectionPolicies;
}
