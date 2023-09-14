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
  Sku as SkuMapper,
  PrivateCloud as PrivateCloudMapper,
  PrivateCloudUpdate as PrivateCloudUpdateMapper,
  Cluster as ClusterMapper,
  ClusterUpdate as ClusterUpdateMapper,
  Datastore as DatastoreMapper,
  HcxEnterpriseSite as HcxEnterpriseSiteMapper,
  ExpressRouteAuthorization as ExpressRouteAuthorizationMapper,
  GlobalReachConnection as GlobalReachConnectionMapper,
  WorkloadNetworkSegment as WorkloadNetworkSegmentMapper,
  WorkloadNetworkDhcp as WorkloadNetworkDhcpMapper,
  WorkloadNetworkPortMirroring as WorkloadNetworkPortMirroringMapper,
  WorkloadNetworkVMGroup as WorkloadNetworkVMGroupMapper,
  WorkloadNetworkDnsService as WorkloadNetworkDnsServiceMapper,
  WorkloadNetworkDnsZone as WorkloadNetworkDnsZoneMapper,
  WorkloadNetworkPublicIP as WorkloadNetworkPublicIPMapper,
  CloudLink as CloudLinkMapper,
  Addon as AddonMapper,
  VirtualMachineRestrictMovement as VirtualMachineRestrictMovementMapper,
  PlacementPolicy as PlacementPolicyMapper,
  PlacementPolicyUpdate as PlacementPolicyUpdateMapper,
  ScriptExecution as ScriptExecutionMapper
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
    defaultValue: "2022-05-01",
    isConstant: true,
    serializedName: "api-version",
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

export const sku: OperationParameter = {
  parameterPath: ["options", "sku"],
  mapper: SkuMapper
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

export const privateCloudName: OperationURLParameter = {
  parameterPath: "privateCloudName",
  mapper: {
    serializedName: "privateCloudName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateCloud: OperationParameter = {
  parameterPath: "privateCloud",
  mapper: PrivateCloudMapper
};

export const privateCloudUpdate: OperationParameter = {
  parameterPath: "privateCloudUpdate",
  mapper: PrivateCloudUpdateMapper
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cluster: OperationParameter = {
  parameterPath: "cluster",
  mapper: ClusterMapper
};

export const clusterUpdate: OperationParameter = {
  parameterPath: "clusterUpdate",
  mapper: ClusterUpdateMapper
};

export const datastoreName: OperationURLParameter = {
  parameterPath: "datastoreName",
  mapper: {
    serializedName: "datastoreName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const datastore: OperationParameter = {
  parameterPath: "datastore",
  mapper: DatastoreMapper
};

export const hcxEnterpriseSiteName: OperationURLParameter = {
  parameterPath: "hcxEnterpriseSiteName",
  mapper: {
    serializedName: "hcxEnterpriseSiteName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const hcxEnterpriseSite: OperationParameter = {
  parameterPath: "hcxEnterpriseSite",
  mapper: HcxEnterpriseSiteMapper
};

export const authorizationName: OperationURLParameter = {
  parameterPath: "authorizationName",
  mapper: {
    serializedName: "authorizationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const authorization: OperationParameter = {
  parameterPath: "authorization",
  mapper: ExpressRouteAuthorizationMapper
};

export const globalReachConnectionName: OperationURLParameter = {
  parameterPath: "globalReachConnectionName",
  mapper: {
    serializedName: "globalReachConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const globalReachConnection: OperationParameter = {
  parameterPath: "globalReachConnection",
  mapper: GlobalReachConnectionMapper
};

export const workloadNetworkName: OperationURLParameter = {
  parameterPath: "workloadNetworkName",
  mapper: {
    serializedName: "workloadNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const segmentId: OperationURLParameter = {
  parameterPath: "segmentId",
  mapper: {
    serializedName: "segmentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workloadNetworkSegment: OperationParameter = {
  parameterPath: "workloadNetworkSegment",
  mapper: WorkloadNetworkSegmentMapper
};

export const dhcpId: OperationURLParameter = {
  parameterPath: "dhcpId",
  mapper: {
    serializedName: "dhcpId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workloadNetworkDhcp: OperationParameter = {
  parameterPath: "workloadNetworkDhcp",
  mapper: WorkloadNetworkDhcpMapper
};

export const gatewayId: OperationURLParameter = {
  parameterPath: "gatewayId",
  mapper: {
    serializedName: "gatewayId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const portMirroringId: OperationURLParameter = {
  parameterPath: "portMirroringId",
  mapper: {
    serializedName: "portMirroringId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workloadNetworkPortMirroring: OperationParameter = {
  parameterPath: "workloadNetworkPortMirroring",
  mapper: WorkloadNetworkPortMirroringMapper
};

export const vmGroupId: OperationURLParameter = {
  parameterPath: "vmGroupId",
  mapper: {
    serializedName: "vmGroupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workloadNetworkVMGroup: OperationParameter = {
  parameterPath: "workloadNetworkVMGroup",
  mapper: WorkloadNetworkVMGroupMapper
};

export const virtualMachineId: OperationURLParameter = {
  parameterPath: "virtualMachineId",
  mapper: {
    serializedName: "virtualMachineId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const dnsServiceId: OperationURLParameter = {
  parameterPath: "dnsServiceId",
  mapper: {
    serializedName: "dnsServiceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workloadNetworkDnsService: OperationParameter = {
  parameterPath: "workloadNetworkDnsService",
  mapper: WorkloadNetworkDnsServiceMapper
};

export const dnsZoneId: OperationURLParameter = {
  parameterPath: "dnsZoneId",
  mapper: {
    serializedName: "dnsZoneId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workloadNetworkDnsZone: OperationParameter = {
  parameterPath: "workloadNetworkDnsZone",
  mapper: WorkloadNetworkDnsZoneMapper
};

export const publicIPId: OperationURLParameter = {
  parameterPath: "publicIPId",
  mapper: {
    serializedName: "publicIPId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workloadNetworkPublicIP: OperationParameter = {
  parameterPath: "workloadNetworkPublicIP",
  mapper: WorkloadNetworkPublicIPMapper
};

export const cloudLinkName: OperationURLParameter = {
  parameterPath: "cloudLinkName",
  mapper: {
    serializedName: "cloudLinkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cloudLink: OperationParameter = {
  parameterPath: "cloudLink",
  mapper: CloudLinkMapper
};

export const addonName: OperationURLParameter = {
  parameterPath: "addonName",
  mapper: {
    serializedName: "addonName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const addon: OperationParameter = {
  parameterPath: "addon",
  mapper: AddonMapper
};

export const restrictMovement: OperationParameter = {
  parameterPath: "restrictMovement",
  mapper: VirtualMachineRestrictMovementMapper
};

export const placementPolicyName: OperationURLParameter = {
  parameterPath: "placementPolicyName",
  mapper: {
    serializedName: "placementPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const placementPolicy: OperationParameter = {
  parameterPath: "placementPolicy",
  mapper: PlacementPolicyMapper
};

export const placementPolicyUpdate: OperationParameter = {
  parameterPath: "placementPolicyUpdate",
  mapper: PlacementPolicyUpdateMapper
};

export const scriptPackageName: OperationURLParameter = {
  parameterPath: "scriptPackageName",
  mapper: {
    serializedName: "scriptPackageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scriptCmdletName: OperationURLParameter = {
  parameterPath: "scriptCmdletName",
  mapper: {
    serializedName: "scriptCmdletName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scriptExecutionName: OperationURLParameter = {
  parameterPath: "scriptExecutionName",
  mapper: {
    serializedName: "scriptExecutionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scriptExecution: OperationParameter = {
  parameterPath: "scriptExecution",
  mapper: ScriptExecutionMapper
};

export const scriptOutputStreamType: OperationParameter = {
  parameterPath: ["options", "scriptOutputStreamType"],
  mapper: {
    serializedName: "scriptOutputStreamType",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  }
};
