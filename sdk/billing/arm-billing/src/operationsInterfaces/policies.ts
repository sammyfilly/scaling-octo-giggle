/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PoliciesGetByBillingProfileOptionalParams,
  PoliciesGetByBillingProfileResponse,
  Policy,
  PoliciesUpdateOptionalParams,
  PoliciesUpdateResponse,
  PoliciesGetByCustomerOptionalParams,
  PoliciesGetByCustomerResponse,
  CustomerPolicy,
  PoliciesUpdateCustomerOptionalParams,
  PoliciesUpdateCustomerResponse
} from "../models";

/** Interface representing a Policies. */
export interface Policies {
  /**
   * Lists the policies for a billing profile. This operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  getByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: PoliciesGetByBillingProfileOptionalParams
  ): Promise<PoliciesGetByBillingProfileResponse>;
  /**
   * Updates the policies for a billing profile. This operation is supported only for billing accounts
   * with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param parameters Request parameters that are provided to the update policies operation.
   * @param options The options parameters.
   */
  update(
    billingAccountName: string,
    billingProfileName: string,
    parameters: Policy,
    options?: PoliciesUpdateOptionalParams
  ): Promise<PoliciesUpdateResponse>;
  /**
   * Lists the policies for a customer. This operation is supported only for billing accounts with
   * agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  getByCustomer(
    billingAccountName: string,
    customerName: string,
    options?: PoliciesGetByCustomerOptionalParams
  ): Promise<PoliciesGetByCustomerResponse>;
  /**
   * Updates the policies for a customer. This operation is supported only for billing accounts with
   * agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param parameters Request parameters that are provided to the update policies operation.
   * @param options The options parameters.
   */
  updateCustomer(
    billingAccountName: string,
    customerName: string,
    parameters: CustomerPolicy,
    options?: PoliciesUpdateCustomerOptionalParams
  ): Promise<PoliciesUpdateCustomerResponse>;
}
