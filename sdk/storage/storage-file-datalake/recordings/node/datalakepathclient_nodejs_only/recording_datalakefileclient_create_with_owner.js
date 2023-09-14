let nock = require('nock');

module.exports.hash = "2ae2bfe60be680c935e10fe5ad2c3fe4";

module.exports.testInfo = {"uniqueName":{"filesystem":"filesystem168230688293505497","file":"file168230688359201337","testfile":"testfile168230688440108099"},"newDate":{}}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem168230688293505497')
  .query(true)
  .reply(201, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 24 Apr 2023 03:28:03 GMT',
  'ETag',
  '"0x8DB4473E9BD0163"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b232d579-401e-000c-035c-766e09000000',
  'x-ms-client-request-id',
  '01fc9aef-d76e-4204-98c4-c2a74004c9f7',
  'x-ms-version',
  '2023-01-03',
  'Date',
  'Mon, 24 Apr 2023 03:28:02 GMT'
]);

nock('https://fakestorageaccount.dfs.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem168230688293505497/file168230688359201337')
  .query(true)
  .reply(201, "", [
  'Last-Modified',
  'Mon, 24 Apr 2023 03:28:04 GMT',
  'ETag',
  '"0x8DB4473EA186437"',
  'Server',
  'Windows-Azure-HDFS/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-request-id',
  '33f48e74-201f-001a-6a5c-7698de000000',
  'x-ms-version',
  '2023-01-03',
  'x-ms-client-request-id',
  'e115b802-7147-4f45-829c-93cc8f6d0e60',
  'Date',
  'Mon, 24 Apr 2023 03:28:03 GMT',
  'Content-Length',
  '0'
]);

nock('https://fakestorageaccount.dfs.core.windows.net:443', {"encodedQueryParams":true})
  .patch('/filesystem168230688293505497/file168230688359201337', "Hello World")
  .query(true)
  .reply(202, "", [
  'Server',
  'Windows-Azure-HDFS/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-request-id',
  '33f48e75-201f-001a-6b5c-7698de000000',
  'x-ms-version',
  '2023-01-03',
  'x-ms-client-request-id',
  '7ca34e31-e4df-4aa6-be33-1c3d4d875383',
  'Date',
  'Mon, 24 Apr 2023 03:28:03 GMT',
  'Content-Length',
  '0'
]);

nock('https://fakestorageaccount.dfs.core.windows.net:443', {"encodedQueryParams":true})
  .patch('/filesystem168230688293505497/file168230688359201337')
  .query(true)
  .reply(200, "", [
  'Last-Modified',
  'Mon, 24 Apr 2023 03:28:04 GMT',
  'ETag',
  '"0x8DB4473EA3C68B6"',
  'Server',
  'Windows-Azure-HDFS/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-server-encrypted',
  'false',
  'x-ms-request-id',
  '33f48e76-201f-001a-6c5c-7698de000000',
  'x-ms-version',
  '2023-01-03',
  'x-ms-client-request-id',
  '39d9274c-df1b-4630-8d7e-acfb767c05b6',
  'Date',
  'Mon, 24 Apr 2023 03:28:03 GMT',
  'Content-Length',
  '0'
]);

nock('https://fakestorageaccount.dfs.core.windows.net:443', {"encodedQueryParams":true})
  .put('/filesystem168230688293505497/testfile168230688440108099')
  .query(true)
  .reply(201, "", [
  'Last-Modified',
  'Mon, 24 Apr 2023 03:28:04 GMT',
  'ETag',
  '"0x8DB4473EA4E720A"',
  'Server',
  'Windows-Azure-HDFS/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-request-id',
  '33f48e77-201f-001a-6d5c-7698de000000',
  'x-ms-version',
  '2023-01-03',
  'x-ms-client-request-id',
  'b5c88738-d9c9-42ec-a752-0cbb88c174b9',
  'Date',
  'Mon, 24 Apr 2023 03:28:03 GMT',
  'Content-Length',
  '0'
]);

nock('https://fakestorageaccount.dfs.core.windows.net:443', {"encodedQueryParams":true})
  .head('/filesystem168230688293505497/testfile168230688440108099')
  .query(true)
  .reply(200, "", [
  'Last-Modified',
  'Mon, 24 Apr 2023 03:28:04 GMT',
  'ETag',
  '"0x8DB4473EA4E720A"',
  'Server',
  'Windows-Azure-HDFS/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-owner',
  '25fb43dd-e251-48a8-903b-e924f405299a',
  'x-ms-group',
  '$superuser',
  'x-ms-permissions',
  'rw-r-----',
  'x-ms-acl',
  'user::rw-,group::r--,other::---',
  'x-ms-request-id',
  '33f48e78-201f-001a-6e5c-7698de000000',
  'x-ms-version',
  '2023-01-03',
  'x-ms-client-request-id',
  'eb7c1b1c-6b0e-4add-9635-a1e54d8dd225',
  'Access-Control-Expose-Headers',
  'Content-Length,Date,ETag,Last-Modified,Server,x-ms-acl,x-ms-client-request-id,x-ms-group,x-ms-owner,x-ms-permissions,x-ms-request-id,x-ms-version',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 24 Apr 2023 03:28:03 GMT'
]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/filesystem168230688293505497/testfile168230688440108099')
  .reply(200, "", [
  'Content-Length',
  '0',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Mon, 24 Apr 2023 03:28:04 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8DB4473EA4E720A"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b232d63c-401e-000c-125c-766e09000000',
  'x-ms-client-request-id',
  '4f5b8622-67e9-4902-87ad-5df27904cdc0',
  'x-ms-version',
  '2023-01-03',
  'x-ms-resource-type',
  'file',
  'x-ms-creation-time',
  'Mon, 24 Apr 2023 03:28:04 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Hot',
  'x-ms-access-tier-inferred',
  'true',
  'x-ms-owner',
  '25fb43dd-e251-48a8-903b-e924f405299a',
  'x-ms-group',
  '$superuser',
  'x-ms-permissions',
  'rw-r-----',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-resource-type,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,x-ms-owner,x-ms-group,x-ms-permissions,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 24 Apr 2023 03:28:03 GMT'
]);

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/filesystem168230688293505497')
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b232d64f-401e-000c-1f5c-766e09000000',
  'x-ms-client-request-id',
  'ab1aeae3-224a-4c8e-862f-ec9720b808b7',
  'x-ms-version',
  '2023-01-03',
  'Date',
  'Mon, 24 Apr 2023 03:28:03 GMT'
]);
