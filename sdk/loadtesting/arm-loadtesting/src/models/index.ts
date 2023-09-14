/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** List of quota bucket objects. It contains a URL link to get the next set of results. */
export interface QuotaResourceList {
  /**
   * List of quota bucket objects provided by the loadtestservice.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: QuotaResource[];
  /**
   * URL to get the next set of quota bucket objects results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Dimensions for new quota request. */
export interface QuotaBucketRequestPropertiesDimensions {
  /** Subscription Id dimension for new quota request of the quota bucket. */
  subscriptionId?: string;
  /** Location dimension for new quota request of the quota bucket. */
  location?: string;
}

/** List of resources page result. */
export interface LoadTestResourcePageList {
  /** List of resources in current page. */
  value?: LoadTestResource[];
  /** Link to next page of resources. */
  nextLink?: string;
}

/** Key and identity details for Customer Managed Key encryption of load test resource */
export interface EncryptionProperties {
  /** All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. */
  identity?: EncryptionPropertiesIdentity;
  /** key encryption key Url, versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. */
  keyUrl?: string;
}

/** All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. */
export interface EncryptionPropertiesIdentity {
  /** Managed identity type to use for accessing encryption key Url */
  type?: Type;
  /** user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId */
  resourceId?: string;
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /**
   * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
  type: ManagedServiceIdentityType;
  /** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. */
  userAssignedIdentities?: {
    [propertyName: string]: UserAssignedIdentity | null;
  };
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /**
   * The principal ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
}

/** LoadTest resource patch request body. */
export interface LoadTestResourcePatchRequestBody {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The type of identity used for the resource. */
  identity?: ManagedServiceIdentity;
  /** Description of the resource. */
  description?: string;
  /** CMK Encryption property. */
  encryption?: EncryptionProperties;
}

/** Values returned by the List operation. */
export interface OutboundEnvironmentEndpointCollection {
  /**
   * The collection of outbound network dependency endpoints returned by the listing operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: OutboundEnvironmentEndpoint[];
  /** The continuation token. */
  nextLink?: string;
}

/** A collection of related endpoints from the same service for which the Batch service requires outbound access. */
export interface OutboundEnvironmentEndpoint {
  /**
   * The type of service that Azure Load Testing connects to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly category?: string;
  /**
   * The endpoints for this service to which the Batch service makes outbound calls.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endpoints?: EndpointDependency[];
}

/** A domain name and connection details used to access a dependency. */
export interface EndpointDependency {
  /**
   * The domain name of the dependency. Domain names may be fully qualified or may contain a * wildcard.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly domainName?: string;
  /**
   * Human-readable supplemental information about the dependency and when it is applicable.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * The list of connection details for this endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endpointDetails?: EndpointDetail[];
}

/** Details about the connection between the Batch service and the endpoint. */
export interface EndpointDetail {
  /**
   * The port an endpoint is connected to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly port?: number;
}

/** Quota bucket details object. */
export interface QuotaResource extends Resource {
  /** Current quota limit of the quota bucket. */
  limit?: number;
  /** Current quota usage of the quota bucket. */
  usage?: number;
  /**
   * Resource provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ResourceState;
}

/** Request object of new quota for a quota bucket. */
export interface QuotaBucketRequest extends Resource {
  /** Current quota usage of the quota bucket. */
  currentUsage?: number;
  /** Current quota limit of the quota bucket. */
  currentQuota?: number;
  /** New quota limit of the quota bucket. */
  newQuota?: number;
  /** Dimensions for new quota request. */
  dimensions?: QuotaBucketRequestPropertiesDimensions;
}

/** Check quota availability response object. */
export interface CheckQuotaAvailabilityResponse extends Resource {
  /** True/False indicating whether the quota request be granted based on availability. */
  isAvailable?: boolean;
  /** Message indicating additional details to add to quota support request. */
  availabilityStatus?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** LoadTest details */
export interface LoadTestResource extends TrackedResource {
  /** The type of identity used for the resource. */
  identity?: ManagedServiceIdentity;
  /** Description of the resource. */
  description?: string;
  /**
   * Resource provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ResourceState;
  /**
   * Resource data plane URI.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataPlaneURI?: string;
  /** CMK Encryption property. */
  encryption?: EncryptionProperties;
}

/** Defines headers for LoadTests_createOrUpdate operation. */
export interface LoadTestsCreateOrUpdateHeaders {
  /** URL to query for status of the operation. */
  azureAsyncOperation?: string;
}

/** Defines headers for LoadTests_update operation. */
export interface LoadTestsUpdateHeaders {
  /** URL to query for status of the operation. */
  azureAsyncOperation?: string;
}

/** Defines headers for LoadTests_delete operation. */
export interface LoadTestsDeleteHeaders {
  /** URL to query for status of the operation. */
  location?: string;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link ResourceState} that the service accepts. */
export enum KnownResourceState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Deleted */
  Deleted = "Deleted"
}

/**
 * Defines values for ResourceState. \
 * {@link KnownResourceState} can be used interchangeably with ResourceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Deleted**
 */
export type ResourceState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link Type} that the service accepts. */
export enum KnownType {
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned"
}

/**
 * Defines values for Type. \
 * {@link KnownType} can be used interchangeably with Type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **UserAssigned**
 */
export type Type = string;

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAssignedUserAssigned */
  SystemAssignedUserAssigned = "SystemAssigned,UserAssigned"
}

/**
 * Defines values for ManagedServiceIdentityType. \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export type ManagedServiceIdentityType = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface QuotasListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type QuotasListResponse = QuotaResourceList;

/** Optional parameters. */
export interface QuotasGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type QuotasGetResponse = QuotaResource;

/** Optional parameters. */
export interface QuotasCheckAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkAvailability operation. */
export type QuotasCheckAvailabilityResponse = CheckQuotaAvailabilityResponse;

/** Optional parameters. */
export interface QuotasListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type QuotasListNextResponse = QuotaResourceList;

/** Optional parameters. */
export interface LoadTestsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type LoadTestsListBySubscriptionResponse = LoadTestResourcePageList;

/** Optional parameters. */
export interface LoadTestsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type LoadTestsListByResourceGroupResponse = LoadTestResourcePageList;

/** Optional parameters. */
export interface LoadTestsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type LoadTestsGetResponse = LoadTestResource;

/** Optional parameters. */
export interface LoadTestsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type LoadTestsCreateOrUpdateResponse = LoadTestResource;

/** Optional parameters. */
export interface LoadTestsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type LoadTestsUpdateResponse = LoadTestResource;

/** Optional parameters. */
export interface LoadTestsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface LoadTestsListOutboundNetworkDependenciesEndpointsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOutboundNetworkDependenciesEndpoints operation. */
export type LoadTestsListOutboundNetworkDependenciesEndpointsResponse = OutboundEnvironmentEndpointCollection;

/** Optional parameters. */
export interface LoadTestsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type LoadTestsListBySubscriptionNextResponse = LoadTestResourcePageList;

/** Optional parameters. */
export interface LoadTestsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type LoadTestsListByResourceGroupNextResponse = LoadTestResourcePageList;

/** Optional parameters. */
export interface LoadTestsListOutboundNetworkDependenciesEndpointsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOutboundNetworkDependenciesEndpointsNext operation. */
export type LoadTestsListOutboundNetworkDependenciesEndpointsNextResponse = OutboundEnvironmentEndpointCollection;

/** Optional parameters. */
export interface LoadTestClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
