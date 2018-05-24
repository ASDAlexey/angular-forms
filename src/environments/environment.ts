// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  'HOST_API_AUTH': JSON.stringify('https://qa-meta-v6.5thkind.net/auth'),
  'HOST_API_META': JSON.stringify('https://qa-meta-v6.5thkind.net'),
  'HOST_API_CDS': JSON.stringify('https://qa-cds-v6.5thkind.net'),
  'HOST_API_CRS': JSON.stringify('https://qa-crs-v6.5thkind.net'),
  'HOST_API_QUEUES': JSON.stringify('https://qa-queues-v6.5thkind.net'),
  // 'WEB_SOCKET_ENDPOINT': JSON.stringify('ws://127.0.0.1:8080'),
  'WEB_SOCKET_ENDPOINT': JSON.stringify('wss://qa-ws-v6.5thkind.net:443'),
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
