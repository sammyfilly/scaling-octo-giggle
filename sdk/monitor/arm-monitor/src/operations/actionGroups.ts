/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ActionGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ActionGroupResource,
  ActionGroupsListBySubscriptionIdOptionalParams,
  ActionGroupsListByResourceGroupOptionalParams,
  ActionGroupsCreateOrUpdateOptionalParams,
  ActionGroupsCreateOrUpdateResponse,
  ActionGroupsGetOptionalParams,
  ActionGroupsGetResponse,
  ActionGroupsDeleteOptionalParams,
  ActionGroupPatchBody,
  ActionGroupsUpdateOptionalParams,
  ActionGroupsUpdateResponse,
  NotificationRequestBody,
  ActionGroupsPostTestNotificationsOptionalParams,
  ActionGroupsPostTestNotificationsResponse,
  ActionGroupsGetTestNotificationsOptionalParams,
  ActionGroupsGetTestNotificationsResponse,
  ActionGroupsListBySubscriptionIdResponse,
  ActionGroupsListByResourceGroupResponse,
  EnableRequest,
  ActionGroupsEnableReceiverOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ActionGroups operations. */
export class ActionGroupsImpl implements ActionGroups {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class ActionGroups class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Get a list of all action groups in a subscription.
   * @param options The options parameters.
   */
  public listBySubscriptionId(
    options?: ActionGroupsListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<ActionGroupResource> {
    const iter = this.listBySubscriptionIdPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionIdPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionIdPagingPage(
    options?: ActionGroupsListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<ActionGroupResource[]> {
    let result = await this._listBySubscriptionId(options);
    yield result.value || [];
  }

  private async *listBySubscriptionIdPagingAll(
    options?: ActionGroupsListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<ActionGroupResource> {
    for await (const page of this.listBySubscriptionIdPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all action groups in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ActionGroupResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ActionGroupResource[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ActionGroupResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a new action group or update an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param actionGroup The action group to create or use for the update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    actionGroupName: string,
    actionGroup: ActionGroupResource,
    options?: ActionGroupsCreateOrUpdateOptionalParams
  ): Promise<ActionGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, actionGroup, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Get an action group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsGetOptionalParams
  ): Promise<ActionGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Delete an action group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates an existing action group's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param actionGroupPatch Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    actionGroupName: string,
    actionGroupPatch: ActionGroupPatchBody,
    options?: ActionGroupsUpdateOptionalParams
  ): Promise<ActionGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, actionGroupPatch, options },
      updateOperationSpec
    );
  }

  /**
   * Send test notifications to a set of provided receivers
   * @param notificationRequest The notification request body which includes the contact details
   * @param options The options parameters.
   */
  async beginPostTestNotifications(
    notificationRequest: NotificationRequestBody,
    options?: ActionGroupsPostTestNotificationsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ActionGroupsPostTestNotificationsResponse>,
      ActionGroupsPostTestNotificationsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ActionGroupsPostTestNotificationsResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { notificationRequest, options },
      postTestNotificationsOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Send test notifications to a set of provided receivers
   * @param notificationRequest The notification request body which includes the contact details
   * @param options The options parameters.
   */
  async beginPostTestNotificationsAndWait(
    notificationRequest: NotificationRequestBody,
    options?: ActionGroupsPostTestNotificationsOptionalParams
  ): Promise<ActionGroupsPostTestNotificationsResponse> {
    const poller = await this.beginPostTestNotifications(
      notificationRequest,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the test notifications by the notification id
   * @param notificationId The notification id
   * @param options The options parameters.
   */
  getTestNotifications(
    notificationId: string,
    options?: ActionGroupsGetTestNotificationsOptionalParams
  ): Promise<ActionGroupsGetTestNotificationsResponse> {
    return this.client.sendOperationRequest(
      { notificationId, options },
      getTestNotificationsOperationSpec
    );
  }

  /**
   * Get a list of all action groups in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscriptionId(
    options?: ActionGroupsListBySubscriptionIdOptionalParams
  ): Promise<ActionGroupsListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionIdOperationSpec
    );
  }

  /**
   * Get a list of all action groups in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams
  ): Promise<ActionGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Enable a receiver in an action group. This changes the receiver's status from Disabled to Enabled.
   * This operation is only supported for Email or SMS receivers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param enableRequest The receiver to re-enable.
   * @param options The options parameters.
   */
  enableReceiver(
    resourceGroupName: string,
    actionGroupName: string,
    enableRequest: EnableRequest,
    options?: ActionGroupsEnableReceiverOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, enableRequest, options },
      enableReceiverOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource
    },
    201: {
      bodyMapper: Mappers.ActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.actionGroup,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.actionGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.actionGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.actionGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.actionGroupPatch,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.actionGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postTestNotificationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/createNotifications",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TestNotificationResponse
    },
    201: {
      bodyMapper: Mappers.TestNotificationResponse
    },
    202: {
      bodyMapper: Mappers.TestNotificationResponse
    },
    204: {
      bodyMapper: Mappers.TestNotificationResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.notificationRequest,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getTestNotificationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/notificationStatus/{notificationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TestNotificationDetailsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.notificationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/actionGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const enableReceiverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}/subscribe",
  httpMethod: "POST",
  responses: {
    200: {},
    409: {
      isError: true
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.enableRequest,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.actionGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
