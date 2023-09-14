/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const PartnerResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PartnerResponse",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "Number"
        }
      },
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
      partnerId: {
        serializedName: "properties.partnerId",
        type: {
          name: "String"
        }
      },
      partnerName: {
        serializedName: "properties.partnerName",
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "properties.tenantId",
        type: {
          name: "String"
        }
      },
      objectId: {
        serializedName: "properties.objectId",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "Number"
        }
      },
      updatedTime: {
        serializedName: "properties.updatedTime",
        type: {
          name: "DateTime"
        }
      },
      createdTime: {
        serializedName: "properties.createdTime",
        type: {
          name: "DateTime"
        }
      },
      state: {
        serializedName: "properties.state",
        type: {
          name: "String"
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
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ExtendedErrorInfo"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExtendedErrorInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtendedErrorInfo",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationResponse"
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

export const OperationResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResponse",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
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
