/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/usersMappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";

/** Class representing a Users. */
export class Users {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Create a Users.
   * @param {GraphRbacManagementClientContext} client Reference to the service client.
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Create a new user.
   * @param parameters Parameters to create a user.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersCreateResponse>
   */
  create(parameters: Models.UserCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.UsersCreateResponse>;
  /**
   * @param parameters Parameters to create a user.
   * @param callback The callback
   */
  create(parameters: Models.UserCreateParameters, callback: msRest.ServiceCallback<Models.User>): void;
  /**
   * @param parameters Parameters to create a user.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(parameters: Models.UserCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.User>): void;
  create(parameters: Models.UserCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.User>, callback?: msRest.ServiceCallback<Models.User>): Promise<Models.UsersCreateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.UsersCreateResponse>;
  }

  /**
   * Gets list of users for the current tenant.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersListResponse>
   */
  list(options?: Models.UsersListOptionalParams): Promise<Models.UsersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.UserListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.UsersListOptionalParams, callback: msRest.ServiceCallback<Models.UserListResult>): void;
  list(options?: Models.UsersListOptionalParams | msRest.ServiceCallback<Models.UserListResult>, callback?: msRest.ServiceCallback<Models.UserListResult>): Promise<Models.UsersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsersListResponse>;
  }

  /**
   * Gets user information from the directory.
   * @param upnOrObjectId The object ID or principal name of the user for which to get information.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersGetResponse>
   */
  get(upnOrObjectId: string, options?: msRest.RequestOptionsBase): Promise<Models.UsersGetResponse>;
  /**
   * @param upnOrObjectId The object ID or principal name of the user for which to get information.
   * @param callback The callback
   */
  get(upnOrObjectId: string, callback: msRest.ServiceCallback<Models.User>): void;
  /**
   * @param upnOrObjectId The object ID or principal name of the user for which to get information.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(upnOrObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.User>): void;
  get(upnOrObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.User>, callback?: msRest.ServiceCallback<Models.User>): Promise<Models.UsersGetResponse> {
    return this.client.sendOperationRequest(
      {
        upnOrObjectId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.UsersGetResponse>;
  }

  /**
   * Updates a user.
   * @param upnOrObjectId The object ID or principal name of the user to update.
   * @param parameters Parameters to update an existing user.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(upnOrObjectId: string, parameters: Models.UserUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param upnOrObjectId The object ID or principal name of the user to update.
   * @param parameters Parameters to update an existing user.
   * @param callback The callback
   */
  update(upnOrObjectId: string, parameters: Models.UserUpdateParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param upnOrObjectId The object ID or principal name of the user to update.
   * @param parameters Parameters to update an existing user.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(upnOrObjectId: string, parameters: Models.UserUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(upnOrObjectId: string, parameters: Models.UserUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        upnOrObjectId,
        parameters,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Delete a user.
   * @param upnOrObjectId The object ID or principal name of the user to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(upnOrObjectId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param upnOrObjectId The object ID or principal name of the user to delete.
   * @param callback The callback
   */
  deleteMethod(upnOrObjectId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param upnOrObjectId The object ID or principal name of the user to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(upnOrObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(upnOrObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        upnOrObjectId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a collection that contains the object IDs of the groups of which the user is a member.
   * @param objectId The object ID of the user for which to get group membership.
   * @param parameters User filtering parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersGetMemberGroupsResponse>
   */
  getMemberGroups(objectId: string, parameters: Models.UserGetMemberGroupsParameters, options?: msRest.RequestOptionsBase): Promise<Models.UsersGetMemberGroupsResponse>;
  /**
   * @param objectId The object ID of the user for which to get group membership.
   * @param parameters User filtering parameters.
   * @param callback The callback
   */
  getMemberGroups(objectId: string, parameters: Models.UserGetMemberGroupsParameters, callback: msRest.ServiceCallback<Models.UserGetMemberGroupsResult>): void;
  /**
   * @param objectId The object ID of the user for which to get group membership.
   * @param parameters User filtering parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  getMemberGroups(objectId: string, parameters: Models.UserGetMemberGroupsParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserGetMemberGroupsResult>): void;
  getMemberGroups(objectId: string, parameters: Models.UserGetMemberGroupsParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UserGetMemberGroupsResult>, callback?: msRest.ServiceCallback<Models.UserGetMemberGroupsResult>): Promise<Models.UsersGetMemberGroupsResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        parameters,
        options
      },
      getMemberGroupsOperationSpec,
      callback) as Promise<Models.UsersGetMemberGroupsResponse>;
  }

  /**
   * Gets a list of users for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersListNextResponse>
   */
  listNext(nextLink: string, options?: msRest.RequestOptionsBase): Promise<Models.UsersListNextResponse>;
  /**
   * @param nextLink Next link for the list operation.
   * @param callback The callback
   */
  listNext(nextLink: string, callback: msRest.ServiceCallback<Models.UserListResult>): void;
  /**
   * @param nextLink Next link for the list operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserListResult>): void;
  listNext(nextLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UserListResult>, callback?: msRest.ServiceCallback<Models.UserListResult>): Promise<Models.UsersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UsersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{tenantID}/users",
  urlParameters: [
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.UserCreateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/users",
  urlParameters: [
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UserListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/users/{upnOrObjectId}",
  urlParameters: [
    Parameters.upnOrObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{tenantID}/users/{upnOrObjectId}",
  urlParameters: [
    Parameters.upnOrObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.UserUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{tenantID}/users/{upnOrObjectId}",
  urlParameters: [
    Parameters.upnOrObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const getMemberGroupsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{tenantID}/users/{objectId}/getMemberGroups",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.UserGetMemberGroupsParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.UserGetMemberGroupsResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/{nextLink}",
  urlParameters: [
    Parameters.nextLink,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UserListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};
