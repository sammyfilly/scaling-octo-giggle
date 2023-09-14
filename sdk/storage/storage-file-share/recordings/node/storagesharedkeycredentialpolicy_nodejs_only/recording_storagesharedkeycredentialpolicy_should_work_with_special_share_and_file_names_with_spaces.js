let nock = require('nock');

module.exports.testInfo = {"dir empty":"dir empty156816855324808027","file empty":"file empty156816855367509397"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156816855279902838/dir%20empty156816855324808027')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:33 GMT',
  'ETag',
  '"0x8D7365EE7906404"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '9e4a20ae-101a-0069-8047-683950000000',
  'x-ms-client-request-id',
  'a1183237-2b93-4537-a70b-78b989e26167',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-11T02:22:33.6039940Z',
  'x-ms-file-last-write-time',
  '2019-09-11T02:22:33.6039940Z',
  'x-ms-file-creation-time',
  '2019-09-11T02:22:33.6039940Z',
  'x-ms-file-permission-key',
  '15292852142319295125*13609941760923454748',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:32 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156816855279902838/dir%20empty156816855324808027/file%20empty156816855367509397')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:34 GMT',
  'ETag',
  '"0x8D7365EE7D0D41E"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'c373a03f-b01a-002b-3947-681244000000',
  'x-ms-client-request-id',
  'bfa50047-11b0-4e26-904f-da6149203b26',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-11T02:22:34.0262942Z',
  'x-ms-file-last-write-time',
  '2019-09-11T02:22:34.0262942Z',
  'x-ms-file-creation-time',
  '2019-09-11T02:22:34.0262942Z',
  'x-ms-file-permission-key',
  '1459396823544571282*13609941760923454748',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:33 GMT' ]);

