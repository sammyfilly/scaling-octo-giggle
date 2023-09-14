/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Response for batch list operation. */
export interface SparkBatchJobCollection {
  /** The start index of fetched sessions. */
  from: number;
  /** Number of sessions fetched. */
  total: number;
  /** Batch list */
  sessions?: SparkBatchJob[];
}

export interface SparkBatchJob {
  livyInfo?: SparkBatchJobState;
  /** The batch name. */
  name?: string;
  /** The workspace name. */
  workspaceName?: string;
  /** The Spark pool name. */
  sparkPoolName?: string;
  /** The submitter name. */
  submitterName?: string;
  /** The submitter identifier. */
  submitterId?: string;
  /** The artifact identifier. */
  artifactId?: string;
  /** The job type. */
  jobType?: SparkJobType;
  /** The Spark batch job result. */
  result?: SparkBatchJobResultType;
  /** The scheduler information. */
  scheduler?: SparkScheduler;
  /** The plugin information. */
  plugin?: SparkServicePlugin;
  /** The error information. */
  errors?: SparkServiceError[];
  /** The tags. */
  tags?: { [propertyName: string]: string };
  /** The session Id. */
  id: number;
  /** The application id of this session */
  appId?: string;
  /** The detailed application info. */
  appInfo?: { [propertyName: string]: string };
  /** The batch state */
  state?: LivyStates;
  /** The log lines. */
  logLines?: string[];
}

export interface SparkBatchJobState {
  /** the time that at which "not_started" livy state was first seen. */
  notStartedAt?: Date;
  /** the time that at which "starting" livy state was first seen. */
  startingAt?: Date;
  /** the time that at which "running" livy state was first seen. */
  runningAt?: Date;
  /** time that at which "dead" livy state was first seen. */
  deadAt?: Date;
  /** the time that at which "success" livy state was first seen. */
  successAt?: Date;
  /** the time that at which "killed" livy state was first seen. */
  terminatedAt?: Date;
  /** the time that at which "recovering" livy state was first seen. */
  recoveringAt?: Date;
  /** the Spark job state. */
  currentState?: string;
  jobCreationRequest?: SparkRequest;
}

export interface SparkRequest {
  name?: string;
  file?: string;
  className?: string;
  arguments?: string[];
  jars?: string[];
  pythonFiles?: string[];
  files?: string[];
  archives?: string[];
  /** Dictionary of <string> */
  configuration?: { [propertyName: string]: string };
  driverMemory?: string;
  driverCores?: number;
  executorMemory?: string;
  executorCores?: number;
  executorCount?: number;
}

export interface SparkScheduler {
  submittedAt?: Date;
  scheduledAt?: Date;
  endedAt?: Date;
  cancellationRequestedAt?: Date;
  currentState?: SchedulerCurrentState;
}

export interface SparkServicePlugin {
  preparationStartedAt?: Date;
  resourceAcquisitionStartedAt?: Date;
  submissionStartedAt?: Date;
  monitoringStartedAt?: Date;
  cleanupStartedAt?: Date;
  currentState?: PluginCurrentState;
}

export interface SparkServiceError {
  message?: string;
  errorCode?: string;
  source?: SparkErrorSource;
}

export interface SparkBatchJobOptions {
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  artifactId?: string;
  name: string;
  file: string;
  className?: string;
  arguments?: string[];
  jars?: string[];
  pythonFiles?: string[];
  files?: string[];
  archives?: string[];
  /** Dictionary of <string> */
  configuration?: { [propertyName: string]: string };
  driverMemory?: string;
  driverCores?: number;
  executorMemory?: string;
  executorCores?: number;
  executorCount?: number;
}

export interface SparkSessionCollection {
  from: number;
  total: number;
  sessions?: SparkSession[];
}

export interface SparkSession {
  livyInfo?: SparkSessionState;
  name?: string;
  workspaceName?: string;
  sparkPoolName?: string;
  submitterName?: string;
  submitterId?: string;
  artifactId?: string;
  /** The job type. */
  jobType?: SparkJobType;
  result?: SparkSessionResultType;
  scheduler?: SparkScheduler;
  plugin?: SparkServicePlugin;
  errors?: SparkServiceError[];
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  id: number;
  appId?: string;
  /** Dictionary of <string> */
  appInfo?: { [propertyName: string]: string };
  /** The session state. */
  state?: LivyStates;
  logLines?: string[];
}

export interface SparkSessionState {
  notStartedAt?: Date;
  startingAt?: Date;
  idleAt?: Date;
  deadAt?: Date;
  shuttingDownAt?: Date;
  terminatedAt?: Date;
  recoveringAt?: Date;
  busyAt?: Date;
  errorAt?: Date;
  currentState?: string;
  jobCreationRequest?: SparkRequest;
}

export interface SparkSessionOptions {
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  artifactId?: string;
  name: string;
  file?: string;
  className?: string;
  arguments?: string[];
  jars?: string[];
  pythonFiles?: string[];
  files?: string[];
  archives?: string[];
  /** Dictionary of <string> */
  configuration?: { [propertyName: string]: string };
  driverMemory?: string;
  driverCores?: number;
  executorMemory?: string;
  executorCores?: number;
  executorCount?: number;
}

export interface SparkStatementCollection {
  total: number;
  statements?: SparkStatement[];
}

export interface SparkStatement {
  id: number;
  code?: string;
  state?: LivyStatementStates;
  output?: SparkStatementOutput;
}

export interface SparkStatementOutput {
  status?: string;
  executionCount: number;
  /** Any object */
  data?: Record<string, unknown>;
  errorName?: string;
  errorValue?: string;
  traceback?: string[];
}

export interface SparkStatementOptions {
  code?: string;
  kind?: SparkStatementLanguageType;
}

export interface SparkStatementCancellationResult {
  /** The msg property from the Livy API. The value is always "canceled". */
  message?: string;
}

/** Known values of {@link SparkJobType} that the service accepts. */
export enum KnownSparkJobType {
  SparkBatch = "SparkBatch",
  SparkSession = "SparkSession"
}

/**
 * Defines values for SparkJobType. \
 * {@link KnownSparkJobType} can be used interchangeably with SparkJobType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SparkBatch** \
 * **SparkSession**
 */
export type SparkJobType = string;

/** Known values of {@link SparkBatchJobResultType} that the service accepts. */
export enum KnownSparkBatchJobResultType {
  Uncertain = "Uncertain",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Cancelled = "Cancelled"
}

/**
 * Defines values for SparkBatchJobResultType. \
 * {@link KnownSparkBatchJobResultType} can be used interchangeably with SparkBatchJobResultType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Uncertain** \
 * **Succeeded** \
 * **Failed** \
 * **Cancelled**
 */
export type SparkBatchJobResultType = string;

/** Known values of {@link SchedulerCurrentState} that the service accepts. */
export enum KnownSchedulerCurrentState {
  Queued = "Queued",
  Scheduled = "Scheduled",
  Ended = "Ended"
}

/**
 * Defines values for SchedulerCurrentState. \
 * {@link KnownSchedulerCurrentState} can be used interchangeably with SchedulerCurrentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Queued** \
 * **Scheduled** \
 * **Ended**
 */
export type SchedulerCurrentState = string;

/** Known values of {@link PluginCurrentState} that the service accepts. */
export enum KnownPluginCurrentState {
  Preparation = "Preparation",
  ResourceAcquisition = "ResourceAcquisition",
  Queued = "Queued",
  Submission = "Submission",
  Monitoring = "Monitoring",
  Cleanup = "Cleanup",
  Ended = "Ended"
}

/**
 * Defines values for PluginCurrentState. \
 * {@link KnownPluginCurrentState} can be used interchangeably with PluginCurrentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Preparation** \
 * **ResourceAcquisition** \
 * **Queued** \
 * **Submission** \
 * **Monitoring** \
 * **Cleanup** \
 * **Ended**
 */
export type PluginCurrentState = string;

/** Known values of {@link SparkErrorSource} that the service accepts. */
export enum KnownSparkErrorSource {
  System = "System",
  User = "User",
  Unknown = "Unknown",
  Dependency = "Dependency"
}

/**
 * Defines values for SparkErrorSource. \
 * {@link KnownSparkErrorSource} can be used interchangeably with SparkErrorSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **System** \
 * **User** \
 * **Unknown** \
 * **Dependency**
 */
export type SparkErrorSource = string;

/** Known values of {@link LivyStates} that the service accepts. */
export enum KnownLivyStates {
  NotStarted = "not_started",
  Starting = "starting",
  Idle = "idle",
  Busy = "busy",
  ShuttingDown = "shutting_down",
  Error = "error",
  Dead = "dead",
  Killed = "killed",
  Success = "success",
  Running = "running",
  Recovering = "recovering"
}

/**
 * Defines values for LivyStates. \
 * {@link KnownLivyStates} can be used interchangeably with LivyStates,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **not_started** \
 * **starting** \
 * **idle** \
 * **busy** \
 * **shutting_down** \
 * **error** \
 * **dead** \
 * **killed** \
 * **success** \
 * **running** \
 * **recovering**
 */
export type LivyStates = string;

/** Known values of {@link SparkSessionResultType} that the service accepts. */
export enum KnownSparkSessionResultType {
  Uncertain = "Uncertain",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Cancelled = "Cancelled"
}

/**
 * Defines values for SparkSessionResultType. \
 * {@link KnownSparkSessionResultType} can be used interchangeably with SparkSessionResultType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Uncertain** \
 * **Succeeded** \
 * **Failed** \
 * **Cancelled**
 */
export type SparkSessionResultType = string;

/** Known values of {@link LivyStatementStates} that the service accepts. */
export enum KnownLivyStatementStates {
  Waiting = "waiting",
  Running = "running",
  Available = "available",
  Error = "error",
  Cancelling = "cancelling",
  Cancelled = "cancelled"
}

/**
 * Defines values for LivyStatementStates. \
 * {@link KnownLivyStatementStates} can be used interchangeably with LivyStatementStates,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **waiting** \
 * **running** \
 * **available** \
 * **error** \
 * **cancelling** \
 * **cancelled**
 */
export type LivyStatementStates = string;

/** Known values of {@link SparkStatementLanguageType} that the service accepts. */
export enum KnownSparkStatementLanguageType {
  Spark = "spark",
  PySpark = "pyspark",
  DotNetSpark = "dotnetspark",
  Sql = "sql"
}

/**
 * Defines values for SparkStatementLanguageType. \
 * {@link KnownSparkStatementLanguageType} can be used interchangeably with SparkStatementLanguageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **spark** \
 * **pyspark** \
 * **dotnetspark** \
 * **sql**
 */
export type SparkStatementLanguageType = string;

/** Optional parameters. */
export interface SparkBatchGetSparkBatchJobsOptionalParams
  extends coreClient.OperationOptions {
  /** Optional param specifying which index the list should begin from. */
  fromParam?: number;
  /**
   * Optional param specifying the size of the returned list.
   *             By default it is 20 and that is the maximum.
   */
  size?: number;
  /** Optional query param specifying whether detailed response is returned beyond plain livy. */
  detailed?: boolean;
}

/** Contains response data for the getSparkBatchJobs operation. */
export type SparkBatchGetSparkBatchJobsResponse = SparkBatchJobCollection;

/** Optional parameters. */
export interface SparkBatchCreateSparkBatchJobOptionalParams
  extends coreClient.OperationOptions {
  /** Optional query param specifying whether detailed response is returned beyond plain livy. */
  detailed?: boolean;
}

/** Contains response data for the createSparkBatchJob operation. */
export type SparkBatchCreateSparkBatchJobResponse = SparkBatchJob;

/** Optional parameters. */
export interface SparkBatchGetSparkBatchJobOptionalParams
  extends coreClient.OperationOptions {
  /** Optional query param specifying whether detailed response is returned beyond plain livy. */
  detailed?: boolean;
}

/** Contains response data for the getSparkBatchJob operation. */
export type SparkBatchGetSparkBatchJobResponse = SparkBatchJob;

/** Optional parameters. */
export interface SparkBatchCancelSparkBatchJobOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SparkSessionGetSparkSessionsOptionalParams
  extends coreClient.OperationOptions {
  /** Optional param specifying which index the list should begin from. */
  fromParam?: number;
  /**
   * Optional param specifying the size of the returned list.
   *             By default it is 20 and that is the maximum.
   */
  size?: number;
  /** Optional query param specifying whether detailed response is returned beyond plain livy. */
  detailed?: boolean;
}

/** Contains response data for the getSparkSessions operation. */
export type SparkSessionGetSparkSessionsResponse = SparkSessionCollection;

/** Optional parameters. */
export interface SparkSessionCreateSparkSessionOptionalParams
  extends coreClient.OperationOptions {
  /** Optional query param specifying whether detailed response is returned beyond plain livy. */
  detailed?: boolean;
}

/** Contains response data for the createSparkSession operation. */
export type SparkSessionCreateSparkSessionResponse = SparkSession;

/** Optional parameters. */
export interface SparkSessionGetSparkSessionOptionalParams
  extends coreClient.OperationOptions {
  /** Optional query param specifying whether detailed response is returned beyond plain livy. */
  detailed?: boolean;
}

/** Contains response data for the getSparkSession operation. */
export type SparkSessionGetSparkSessionResponse = SparkSession;

/** Optional parameters. */
export interface SparkSessionCancelSparkSessionOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SparkSessionResetSparkSessionTimeoutOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SparkSessionGetSparkStatementsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSparkStatements operation. */
export type SparkSessionGetSparkStatementsResponse = SparkStatementCollection;

/** Optional parameters. */
export interface SparkSessionCreateSparkStatementOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createSparkStatement operation. */
export type SparkSessionCreateSparkStatementResponse = SparkStatement;

/** Optional parameters. */
export interface SparkSessionGetSparkStatementOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSparkStatement operation. */
export type SparkSessionGetSparkStatementResponse = SparkStatement;

/** Optional parameters. */
export interface SparkSessionCancelSparkStatementOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the cancelSparkStatement operation. */
export type SparkSessionCancelSparkStatementResponse = SparkStatementCancellationResult;

/** Optional parameters. */
export interface SparkClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Valid api-version for the request. */
  livyApiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
