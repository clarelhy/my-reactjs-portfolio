/**
 * Utility.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Utility functions used in components/services
 */

import { TIME_YEAR } from "./Constants";

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

/**
 * Checks if value is null, undefined or empty
 * Usable for: null, undefined, number, Date, string, [], {}, Set
 */
export function isNullOrEmpty(object) {
  if (object === null || object === undefined) {
    return true;
  } else if (typeof object === "number" || object instanceof Date) {
    return false;
  } else if (
    (typeof object === "string" || Array.isArray(object)) &&
    Object.keys(object).length <= 0
  ) {
    return true;
  } else if (typeof object === "object" && !Array.isArray(object)) {
    if (Object.keys(object).length > 0) {
      return false;
    } else {
      return object.size === undefined || object.size <= 0;
    }
  } else {
    return false;
  }
}

/**
 * Get duration (in years and months) between 2 dates
 * @param start the start date, in datetime string
 * @param end the end date, in datetime string, optional
 * If no end date, new Date() will be used
 * @returns a string with 1 dp, i.e. '5.45'
 */
export function getDuration(start, end) {
  let startDateMs = new Date(start).getTime();
  let endDateMs = new Date().getTime();
  if (!isNullOrEmpty(end)) {
    endDateMs = new Date(end).getTime();
  }

  const deltaMs = endDateMs - startDateMs;
  const deltaYear = deltaMs / TIME_YEAR;
  const deltaYearRoundUpperTenth = Math.round(deltaYear * 10) / 10;
  const deltaYearOneDP = deltaYearRoundUpperTenth.toFixed(1);
  return deltaYearOneDP;
}
