// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,  
  weatherApiBaseUrl:'https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25',
  XRapidAPIKey:'32e5e00b80msh573591e78035d20p1698e3jsnb344b56e6d80',
  XRapidAPIHost:'weatherapi-com.p.rapidapi.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
