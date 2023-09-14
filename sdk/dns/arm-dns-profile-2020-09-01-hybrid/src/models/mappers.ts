/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const RecordSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecordSet",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      ttl: {
        serializedName: "properties.TTL",
        type: {
          name: "Number"
        }
      },
      fqdn: {
        serializedName: "properties.fqdn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      aRecords: {
        serializedName: "properties.ARecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ARecord"
            }
          }
        }
      },
      aaaaRecords: {
        serializedName: "properties.AAAARecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AaaaRecord"
            }
          }
        }
      },
      mxRecords: {
        serializedName: "properties.MXRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MxRecord"
            }
          }
        }
      },
      nsRecords: {
        serializedName: "properties.NSRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NsRecord"
            }
          }
        }
      },
      ptrRecords: {
        serializedName: "properties.PTRRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PtrRecord"
            }
          }
        }
      },
      srvRecords: {
        serializedName: "properties.SRVRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SrvRecord"
            }
          }
        }
      },
      txtRecords: {
        serializedName: "properties.TXTRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TxtRecord"
            }
          }
        }
      },
      cnameRecord: {
        serializedName: "properties.CNAMERecord",
        type: {
          name: "Composite",
          className: "CnameRecord"
        }
      },
      soaRecord: {
        serializedName: "properties.SOARecord",
        type: {
          name: "Composite",
          className: "SoaRecord"
        }
      }
    }
  }
};

export const ARecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ARecord",
    modelProperties: {
      ipv4Address: {
        serializedName: "ipv4Address",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AaaaRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AaaaRecord",
    modelProperties: {
      ipv6Address: {
        serializedName: "ipv6Address",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MxRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MxRecord",
    modelProperties: {
      preference: {
        serializedName: "preference",
        type: {
          name: "Number"
        }
      },
      exchange: {
        serializedName: "exchange",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NsRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NsRecord",
    modelProperties: {
      nsdname: {
        serializedName: "nsdname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PtrRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PtrRecord",
    modelProperties: {
      ptrdname: {
        serializedName: "ptrdname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SrvRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SrvRecord",
    modelProperties: {
      priority: {
        serializedName: "priority",
        type: {
          name: "Number"
        }
      },
      weight: {
        serializedName: "weight",
        type: {
          name: "Number"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TxtRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TxtRecord",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CnameRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CnameRecord",
    modelProperties: {
      cname: {
        serializedName: "cname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SoaRecord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SoaRecord",
    modelProperties: {
      host: {
        serializedName: "host",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      serialNumber: {
        serializedName: "serialNumber",
        type: {
          name: "Number"
        }
      },
      refreshTime: {
        serializedName: "refreshTime",
        type: {
          name: "Number"
        }
      },
      retryTime: {
        serializedName: "retryTime",
        type: {
          name: "Number"
        }
      },
      expireTime: {
        serializedName: "expireTime",
        type: {
          name: "Number"
        }
      },
      minimumTtl: {
        serializedName: "minimumTTL",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CloudErrorBody"
        }
      }
    }
  }
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
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
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      }
    }
  }
};

export const RecordSetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecordSetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecordSet"
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
      }
    }
  }
};

export const ZoneDeleteResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ZoneDeleteResult",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azureAsyncOperation",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Enum",
          allowedValues: ["InProgress", "Succeeded", "Failed"]
        }
      },
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Enum",
          allowedValues: [
            "Continue",
            "SwitchingProtocols",
            "OK",
            "Created",
            "Accepted",
            "NonAuthoritativeInformation",
            "NoContent",
            "ResetContent",
            "PartialContent",
            "MultipleChoices",
            "Ambiguous",
            "MovedPermanently",
            "Moved",
            "Found",
            "Redirect",
            "SeeOther",
            "RedirectMethod",
            "NotModified",
            "UseProxy",
            "Unused",
            "TemporaryRedirect",
            "RedirectKeepVerb",
            "BadRequest",
            "Unauthorized",
            "PaymentRequired",
            "Forbidden",
            "NotFound",
            "MethodNotAllowed",
            "NotAcceptable",
            "ProxyAuthenticationRequired",
            "RequestTimeout",
            "Conflict",
            "Gone",
            "LengthRequired",
            "PreconditionFailed",
            "RequestEntityTooLarge",
            "RequestUriTooLong",
            "UnsupportedMediaType",
            "RequestedRangeNotSatisfiable",
            "ExpectationFailed",
            "UpgradeRequired",
            "InternalServerError",
            "NotImplemented",
            "BadGateway",
            "ServiceUnavailable",
            "GatewayTimeout",
            "HttpVersionNotSupported"
          ]
        }
      },
      requestId: {
        serializedName: "requestId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ZoneListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ZoneListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Zone"
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

export const RecordSetUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecordSetUpdateParameters",
    modelProperties: {
      recordSet: {
        serializedName: "RecordSet",
        type: {
          name: "Composite",
          className: "RecordSet"
        }
      }
    }
  }
};

export const SubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
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

export const Zone: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Zone",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      maxNumberOfRecordSets: {
        serializedName: "properties.maxNumberOfRecordSets",
        type: {
          name: "Number"
        }
      },
      maxNumberOfRecordsPerRecordSet: {
        serializedName: "properties.maxNumberOfRecordsPerRecordSet",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      numberOfRecordSets: {
        serializedName: "properties.numberOfRecordSets",
        type: {
          name: "Number"
        }
      },
      nameServers: {
        serializedName: "properties.nameServers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      zoneType: {
        defaultValue: "Public",
        serializedName: "properties.zoneType",
        type: {
          name: "Enum",
          allowedValues: ["Public", "Private"]
        }
      }
    }
  }
};
