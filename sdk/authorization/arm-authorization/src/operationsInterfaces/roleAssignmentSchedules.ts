/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RoleAssignmentSchedule,
  RoleAssignmentSchedulesListForScopeOptionalParams,
  RoleAssignmentSchedulesGetOptionalParams,
  RoleAssignmentSchedulesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RoleAssignmentSchedules. */
export interface RoleAssignmentSchedules {
  /**
   * Gets role assignment schedules for a resource scope.
   * @param scope The scope of the role assignments schedules.
   * @param options The options parameters.
   */
  listForScope(
    scope: string,
    options?: RoleAssignmentSchedulesListForScopeOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignmentSchedule>;
  /**
   * Get the specified role assignment schedule for a resource scope
   * @param scope The scope of the role assignment schedule.
   * @param roleAssignmentScheduleName The name (guid) of the role assignment schedule to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleAssignmentScheduleName: string,
    options?: RoleAssignmentSchedulesGetOptionalParams
  ): Promise<RoleAssignmentSchedulesGetResponse>;
}
