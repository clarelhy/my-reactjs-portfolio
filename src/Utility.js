/**
 * Utility.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Utility functions used in components/services
 */

/**
 * Use this function to form a REST request path with data filter
 * to reduce the size of the returned data
 * @param queryFields An array of field names
 * @returns a REST request path string
 */
export function formUrlWithArgs(queryFields) {
  let result = "/?fields=" + JSON.stringify(queryFields);
  return result;
}

/**
 * Form the url to be used to query data from the backend
 * based on the environment: DEVELOPMENT/PRODUCTION
 * @returns a URL string
 */
export function getUrlByEnvironment() {
  const location = window.location;
  const protocol = location.protocol;
  const hostName = location.hostname;

  if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
    return `${protocol}//${hostName}:${process.env.REACT_APP_BACKEND_PORT_DEV}`;
  } else {
    return location.origin;
  }
}

/**
 * Controls visibility of console logs
 * based on the environment: DEVELOPMENT/PRODUCTION
 */
export function log(component, ...message) {
  if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
    console.log(`[${component}]`, ...message);
  }
}
