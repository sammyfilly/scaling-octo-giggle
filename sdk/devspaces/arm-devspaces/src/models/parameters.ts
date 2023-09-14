/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  ContainerHostMapping as ContainerHostMappingMapper,
  Controller as ControllerMapper,
  ControllerUpdateParameters as ControllerUpdateParametersMapper,
  ListConnectionDetailsParameters as ListConnectionDetailsParametersMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const containerHostMapping: OperationParameter = {
  parameterPath: "containerHostMapping",
  mapper: ContainerHostMappingMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]([_-]*[a-zA-Z0-9])*$"),
      MaxLength: 63,
      MinLength: 1
    },
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const controller: OperationParameter = {
  parameterPath: "controller",
  mapper: ControllerMapper
};

export const controllerUpdateParameters: OperationParameter = {
  parameterPath: "controllerUpdateParameters",
  mapper: ControllerUpdateParametersMapper
};

export const listConnectionDetailsParameters: OperationParameter = {
  parameterPath: "listConnectionDetailsParameters",
  mapper: ListConnectionDetailsParametersMapper
};
