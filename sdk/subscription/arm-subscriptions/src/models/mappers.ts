/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const LocationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Location"
            }
          }
        }
      }
    }
  }
};

export const Location: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Location",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
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
      displayName: {
        serializedName: "displayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      latitude: {
        serializedName: "latitude",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      longitude: {
        serializedName: "longitude",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Subscription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Subscription",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Enabled", "Warned", "PastDue", "Disabled", "Deleted"]
        }
      },
      subscriptionPolicies: {
        serializedName: "subscriptionPolicies",
        type: {
          name: "Composite",
          className: "SubscriptionPolicies"
        }
      },
      authorizationSource: {
        serializedName: "authorizationSource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionPolicies: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionPolicies",
    modelProperties: {
      locationPlacementId: {
        serializedName: "locationPlacementId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      quotaId: {
        serializedName: "quotaId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      spendingLimit: {
        serializedName: "spendingLimit",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["On", "Off", "CurrentPeriodOff"]
        }
      }
    }
  }
};

export const SubscriptionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subscription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TenantListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TenantIdDescription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantIdDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TenantIdDescription",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CanceledSubscriptionId: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CanceledSubscriptionId",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponseBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
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

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
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

export const SubscriptionName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionName",
    modelProperties: {
      subscriptionName: {
        serializedName: "subscriptionName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RenamedSubscriptionId: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RenamedSubscriptionId",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EnabledSubscriptionId: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EnabledSubscriptionId",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
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
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
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

export const PutAliasRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PutAliasRequest",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PutAliasRequestProperties"
        }
      }
    }
  }
};

export const PutAliasRequestProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PutAliasRequestProperties",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      workload: {
        serializedName: "workload",
        type: {
          name: "String"
        }
      },
      billingScope: {
        serializedName: "billingScope",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      resellerId: {
        serializedName: "resellerId",
        type: {
          name: "String"
        }
      },
      additionalProperties: {
        serializedName: "additionalProperties",
        type: {
          name: "Composite",
          className: "PutAliasRequestAdditionalProperties"
        }
      }
    }
  }
};

export const PutAliasRequestAdditionalProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PutAliasRequestAdditionalProperties",
    modelProperties: {
      managementGroupId: {
        serializedName: "managementGroupId",
        type: {
          name: "String"
        }
      },
      subscriptionTenantId: {
        serializedName: "subscriptionTenantId",
        type: {
          name: "String"
        }
      },
      subscriptionOwnerId: {
        serializedName: "subscriptionOwnerId",
        type: {
          name: "String"
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

export const SubscriptionAliasResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionAliasResponse",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SubscriptionAliasResponseProperties"
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

export const SubscriptionAliasResponseProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionAliasResponseProperties",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      acceptOwnershipUrl: {
        serializedName: "acceptOwnershipUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      acceptOwnershipState: {
        serializedName: "acceptOwnershipState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      billingScope: {
        serializedName: "billingScope",
        type: {
          name: "String"
        }
      },
      workload: {
        serializedName: "workload",
        type: {
          name: "String"
        }
      },
      resellerId: {
        serializedName: "resellerId",
        type: {
          name: "String"
        }
      },
      subscriptionOwnerId: {
        serializedName: "subscriptionOwnerId",
        type: {
          name: "String"
        }
      },
      managementGroupId: {
        serializedName: "managementGroupId",
        type: {
          name: "String"
        }
      },
      createdTime: {
        serializedName: "createdTime",
        type: {
          name: "String"
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

export const SubscriptionAliasListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionAliasListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubscriptionAliasResponse"
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

export const AcceptOwnershipRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcceptOwnershipRequest",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AcceptOwnershipRequestProperties"
        }
      }
    }
  }
};

export const AcceptOwnershipRequestProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcceptOwnershipRequestProperties",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      },
      managementGroupId: {
        serializedName: "managementGroupId",
        type: {
          name: "String"
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

export const AcceptOwnershipStatusResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcceptOwnershipStatusResponse",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      acceptOwnershipState: {
        serializedName: "acceptOwnershipState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      billingOwner: {
        serializedName: "billingOwner",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionTenantId: {
        serializedName: "subscriptionTenantId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
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

export const PutTenantPolicyRequestProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PutTenantPolicyRequestProperties",
    modelProperties: {
      blockSubscriptionsLeavingTenant: {
        serializedName: "blockSubscriptionsLeavingTenant",
        type: {
          name: "Boolean"
        }
      },
      blockSubscriptionsIntoTenant: {
        serializedName: "blockSubscriptionsIntoTenant",
        type: {
          name: "Boolean"
        }
      },
      exemptedPrincipals: {
        serializedName: "exemptedPrincipals",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      }
    }
  }
};

export const GetTenantPolicyResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTenantPolicyResponse",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "TenantPolicy"
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

export const TenantPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TenantPolicy",
    modelProperties: {
      policyId: {
        serializedName: "policyId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      blockSubscriptionsLeavingTenant: {
        serializedName: "blockSubscriptionsLeavingTenant",
        type: {
          name: "Boolean"
        }
      },
      blockSubscriptionsIntoTenant: {
        serializedName: "blockSubscriptionsIntoTenant",
        type: {
          name: "Boolean"
        }
      },
      exemptedPrincipals: {
        serializedName: "exemptedPrincipals",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      }
    }
  }
};

export const GetTenantPolicyListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetTenantPolicyListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GetTenantPolicyResponse"
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

export const BillingAccountPoliciesResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BillingAccountPoliciesResponse",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "BillingAccountPoliciesResponseProperties"
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

export const BillingAccountPoliciesResponseProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BillingAccountPoliciesResponseProperties",
    modelProperties: {
      serviceTenants: {
        serializedName: "serviceTenants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceTenantResponse"
            }
          }
        }
      },
      allowTransfers: {
        serializedName: "allowTransfers",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServiceTenantResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceTenantResponse",
    modelProperties: {
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      tenantName: {
        serializedName: "tenantName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionAcceptOwnershipHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubscriptionAcceptOwnershipHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};
