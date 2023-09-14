/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const DedicatedHsmOperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmOperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedHsmOperation"
            }
          }
        }
      }
    }
  }
};

export const DedicatedHsmOperation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmOperation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "DedicatedHsmOperationDisplay"
        }
      }
    }
  }
};

export const DedicatedHsmOperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmOperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DedicatedHsmError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
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
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorModel"
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

export const NetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkProfile",
    modelProperties: {
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "ApiEntityReference"
        }
      },
      networkInterfaces: {
        serializedName: "networkInterfaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NetworkInterface"
            }
          }
        }
      }
    }
  }
};

export const ApiEntityReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiEntityReference",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NetworkInterface: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkInterface",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateIpAddress: {
        serializedName: "privateIpAddress",
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
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DedicatedHsmPatchParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmPatchParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DedicatedHsmListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsmListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedHsm"
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

export const OutboundEnvironmentEndpointCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEnvironmentEndpointCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
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
        readOnly: true,
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
        type: {
          name: "String"
        }
      },
      endpoints: {
        serializedName: "endpoints",
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
        type: {
          name: "String"
        }
      },
      endpointDetails: {
        serializedName: "endpointDetails",
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
      ipAddress: {
        serializedName: "ipAddress",
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      protocol: {
        serializedName: "protocol",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Resource"
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

export const DedicatedHsm: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHsm",
    modelProperties: {
      ...Resource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile"
        }
      },
      managementNetworkProfile: {
        serializedName: "properties.managementNetworkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile"
        }
      },
      stampId: {
        serializedName: "properties.stampId",
        type: {
          name: "String"
        }
      },
      statusMessage: {
        serializedName: "properties.statusMessage",
        readOnly: true,
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
      }
    }
  }
};
