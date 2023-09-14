/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const QuotaResourceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaResourceList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QuotaResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const QuotaBucketRequestPropertiesDimensions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaBucketRequestPropertiesDimensions",
    modelProperties: {
      subscriptionId: {
        constraints: {
          MinLength: 1
        },
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      location: {
        constraints: {
          MinLength: 1
        },
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LoadTestResourcePageList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadTestResourcePageList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LoadTestResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionProperties",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "EncryptionPropertiesIdentity"
        }
      },
      keyUrl: {
        serializedName: "keyUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionPropertiesIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionPropertiesIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedServiceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedServiceIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserAssignedIdentity" }
          }
        }
      }
    }
  }
};

export const UserAssignedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const LoadTestResourcePatchRequestBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadTestResourcePatchRequestBody",
    modelProperties: {
      tags: {
        serializedName: "tags",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity"
        }
      },
      description: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionProperties"
        }
      }
    }
  }
};

export const OutboundEnvironmentEndpointCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEnvironmentEndpointCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OutboundEnvironmentEndpoint"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OutboundEnvironmentEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEnvironmentEndpoint",
    modelProperties: {
      category: {
        serializedName: "category",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      endpoints: {
        serializedName: "endpoints",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointDependency"
            }
          }
        }
      }
    }
  }
};

export const EndpointDependency: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EndpointDependency",
    modelProperties: {
      domainName: {
        serializedName: "domainName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      endpointDetails: {
        serializedName: "endpointDetails",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointDetail"
            }
          }
        }
      }
    }
  }
};

export const EndpointDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EndpointDetail",
    modelProperties: {
      port: {
        serializedName: "port",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QuotaResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      limit: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "properties.limit",
        type: {
          name: "Number"
        }
      },
      usage: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "properties.usage",
        type: {
          name: "Number"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuotaBucketRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaBucketRequest",
    modelProperties: {
      ...Resource.type.modelProperties,
      currentUsage: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "properties.currentUsage",
        type: {
          name: "Number"
        }
      },
      currentQuota: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "properties.currentQuota",
        type: {
          name: "Number"
        }
      },
      newQuota: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "properties.newQuota",
        type: {
          name: "Number"
        }
      },
      dimensions: {
        serializedName: "properties.dimensions",
        type: {
          name: "Composite",
          className: "QuotaBucketRequestPropertiesDimensions"
        }
      }
    }
  }
};

export const CheckQuotaAvailabilityResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckQuotaAvailabilityResponse",
    modelProperties: {
      ...Resource.type.modelProperties,
      isAvailable: {
        serializedName: "properties.isAvailable",
        type: {
          name: "Boolean"
        }
      },
      availabilityStatus: {
        serializedName: "properties.availabilityStatus",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LoadTestResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadTestResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity"
        }
      },
      description: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      dataPlaneURI: {
        constraints: {
          MaxLength: 2083
        },
        serializedName: "properties.dataPlaneURI",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionProperties"
        }
      }
    }
  }
};

export const LoadTestsCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadTestsCreateOrUpdateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LoadTestsUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadTestsUpdateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LoadTestsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadTestsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
