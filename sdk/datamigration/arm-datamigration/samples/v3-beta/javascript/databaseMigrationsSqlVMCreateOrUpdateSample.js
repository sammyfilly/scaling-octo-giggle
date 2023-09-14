/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update Database Migration resource.
 *
 * @summary Create or Update Database Migration resource.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/SqlVmCreateOrUpdateDatabaseMigrationMAX.json
 */
async function createOrUpdateDatabaseMigrationResourceWithMaximumParameters() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineName = "testvm";
  const targetDbName = "db1";
  const parameters = {
    properties: {
      backupConfiguration: {
        sourceLocation: {
          fileShare: {
            path: "C:\\aaa\\bbb\\ccc",
            password: "placeholder",
            username: "name",
          },
        },
        targetLocation: {
          accountKey: "abcd",
          storageAccountResourceId: "account.database.windows.net",
        },
      },
      kind: "SqlVm",
      migrationService:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DataMigration/sqlMigrationServices/testagent",
      offlineConfiguration: {
        lastBackupName: "last_backup_file_name",
        offline: true,
      },
      scope:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm",
      sourceDatabaseName: "aaa",
      sourceSqlConnection: {
        authentication: "WindowsAuthentication",
        dataSource: "aaa",
        encryptConnection: true,
        password: "placeholder",
        trustServerCertificate: true,
        userName: "bbb",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.databaseMigrationsSqlVm.beginCreateOrUpdateAndWait(
    resourceGroupName,
    sqlVirtualMachineName,
    targetDbName,
    parameters
  );
  console.log(result);
}

createOrUpdateDatabaseMigrationResourceWithMaximumParameters().catch(console.error);

/**
 * This sample demonstrates how to Create or Update Database Migration resource.
 *
 * @summary Create or Update Database Migration resource.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/SqlVmCreateOrUpdateDatabaseMigrationMIN.json
 */
async function createOrUpdateDatabaseMigrationResourceWithMinimumParameters() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineName = "testvm";
  const targetDbName = "db1";
  const parameters = {
    properties: {
      backupConfiguration: {
        sourceLocation: {
          fileShare: {
            path: "C:\\aaa\\bbb\\ccc",
            password: "placeholder",
            username: "name",
          },
        },
        targetLocation: {
          accountKey: "abcd",
          storageAccountResourceId: "account.database.windows.net",
        },
      },
      kind: "SqlVm",
      migrationService:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DataMigration/sqlMigrationServices/testagent",
      offlineConfiguration: {
        lastBackupName: "last_backup_file_name",
        offline: true,
      },
      scope:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm",
      sourceDatabaseName: "aaa",
      sourceSqlConnection: {
        authentication: "WindowsAuthentication",
        dataSource: "aaa",
        encryptConnection: true,
        password: "placeholder",
        trustServerCertificate: true,
        userName: "bbb",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.databaseMigrationsSqlVm.beginCreateOrUpdateAndWait(
    resourceGroupName,
    sqlVirtualMachineName,
    targetDbName,
    parameters
  );
  console.log(result);
}

createOrUpdateDatabaseMigrationResourceWithMinimumParameters().catch(console.error);
