/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  EventSubscription,
  DomainEventSubscriptionsListOptionalParams,
  DomainEventSubscriptionsGetOptionalParams,
  DomainEventSubscriptionsGetResponse,
  DomainEventSubscriptionsCreateOrUpdateOptionalParams,
  DomainEventSubscriptionsCreateOrUpdateResponse,
  DomainEventSubscriptionsDeleteOptionalParams,
  EventSubscriptionUpdateParameters,
  DomainEventSubscriptionsUpdateOptionalParams,
  DomainEventSubscriptionsUpdateResponse,
  DomainEventSubscriptionsGetFullUrlOptionalParams,
  DomainEventSubscriptionsGetFullUrlResponse,
  DomainEventSubscriptionsGetDeliveryAttributesOptionalParams,
  DomainEventSubscriptionsGetDeliveryAttributesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DomainEventSubscriptions. */
export interface DomainEventSubscriptions {
  /**
   * List all event subscriptions that have been created for a specific topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    domainName: string,
    options?: DomainEventSubscriptionsListOptionalParams
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * Get properties of an event subscription of a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be found. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetOptionalParams
  ): Promise<DomainEventSubscriptionsGetResponse>;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainEventSubscriptionsCreateOrUpdateResponse>,
      DomainEventSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<DomainEventSubscriptionsCreateOrUpdateResponse>;
  /**
   * Delete an existing event subscription for a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be deleted. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete an existing event subscription for a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be deleted. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainEventSubscriptionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainEventSubscriptionsUpdateResponse>,
      DomainEventSubscriptionsUpdateResponse
    >
  >;
  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainEventSubscriptionsUpdateOptionalParams
  ): Promise<DomainEventSubscriptionsUpdateResponse>;
  /**
   * Get the full endpoint URL for an event subscription for domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetFullUrlOptionalParams
  ): Promise<DomainEventSubscriptionsGetFullUrlResponse>;
  /**
   * Get all delivery attributes for an event subscription for domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetDeliveryAttributesOptionalParams
  ): Promise<DomainEventSubscriptionsGetDeliveryAttributesResponse>;
}
