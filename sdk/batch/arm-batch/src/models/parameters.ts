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
  BatchAccountCreateParameters as BatchAccountCreateParametersMapper,
  BatchAccountUpdateParameters as BatchAccountUpdateParametersMapper,
  BatchAccountRegenerateKeyParameters as BatchAccountRegenerateKeyParametersMapper,
  ActivateApplicationPackageParameters as ActivateApplicationPackageParametersMapper,
  ApplicationPackage as ApplicationPackageMapper,
  Application as ApplicationMapper,
  CheckNameAvailabilityParameters as CheckNameAvailabilityParametersMapper,
  CertificateCreateOrUpdateParameters as CertificateCreateOrUpdateParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Pool as PoolMapper
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: BatchAccountCreateParametersMapper
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

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accountName: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9]+$"),
      MaxLength: 24,
      MinLength: 3
    },
    serializedName: "accountName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-01-01",
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

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: BatchAccountUpdateParametersMapper
};

export const accountName1: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]+$"),
      MaxLength: 24,
      MinLength: 3
    },
    serializedName: "accountName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: BatchAccountRegenerateKeyParametersMapper
};

export const detectorId: OperationURLParameter = {
  parameterPath: "detectorId",
  mapper: {
    serializedName: "detectorId",
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

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ActivateApplicationPackageParametersMapper
};

export const applicationName: OperationURLParameter = {
  parameterPath: "applicationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_-]+$"),
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "applicationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const versionName: OperationURLParameter = {
  parameterPath: "versionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_-][a-zA-Z0-9_.-]*$"),
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "versionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: ApplicationPackageMapper
};

export const maxresults: OperationQueryParameter = {
  parameterPath: ["options", "maxresults"],
  mapper: {
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: ApplicationMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ApplicationMapper
};

export const locationName: OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    serializedName: "locationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckNameAvailabilityParametersMapper
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: CertificateCreateOrUpdateParametersMapper
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[\\w]+-[\\w]+$"),
      MaxLength: 45,
      MinLength: 5
    },
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const privateLinkResourceName: OperationURLParameter = {
  parameterPath: "privateLinkResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_-]+\\.?[a-fA-F0-9-]*$"),
      MaxLength: 101,
      MinLength: 1
    },
    serializedName: "privateLinkResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_-]+\\.?[a-fA-F0-9-]*$"),
      MaxLength: 101,
      MinLength: 1
    },
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: PoolMapper
};

export const poolName: OperationURLParameter = {
  parameterPath: "poolName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_-]+$"),
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "poolName",
    required: true,
    type: {
      name: "String"
    }
  }
};
