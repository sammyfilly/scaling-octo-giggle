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
  Workspace as WorkspaceMapper,
  WorkspaceUpdateParameters as WorkspaceUpdateParametersMapper,
  DiagnoseWorkspaceParameters as DiagnoseWorkspaceParametersMapper,
  QuotaUpdateParameters as QuotaUpdateParametersMapper,
  ComputeResource as ComputeResourceMapper,
  ClusterUpdateParameters as ClusterUpdateParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  WorkspaceConnection as WorkspaceConnectionMapper
} from "../models/mappers";

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
    defaultValue: "2021-07-01",
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
    constraints: {
      MinLength: 1
    },
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

export const workspaceName: OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    serializedName: "workspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspaceMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspaceUpdateParametersMapper
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: DiagnoseWorkspaceParametersMapper
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

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$")
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: QuotaUpdateParametersMapper
};

export const computeName: OperationURLParameter = {
  parameterPath: "computeName",
  mapper: {
    serializedName: "computeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: ComputeResourceMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterUpdateParametersMapper
};

export const underlyingResourceAction: OperationQueryParameter = {
  parameterPath: "underlyingResourceAction",
  mapper: {
    serializedName: "underlyingResourceAction",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: PrivateEndpointConnectionMapper
};

export const target: OperationQueryParameter = {
  parameterPath: ["options", "target"],
  mapper: {
    serializedName: "target",
    type: {
      name: "String"
    }
  }
};

export const category: OperationQueryParameter = {
  parameterPath: ["options", "category"],
  mapper: {
    serializedName: "category",
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspaceConnectionMapper
};

export const connectionName: OperationURLParameter = {
  parameterPath: "connectionName",
  mapper: {
    serializedName: "connectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};
