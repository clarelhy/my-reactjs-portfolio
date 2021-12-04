/**
 * AboutVM.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file View model for Home component
 */

import { SERVICE_RESPONSE_STATUS_OK } from "../Constants";
import { GetAbout } from "../services";
import { log, isNullOrEmpty } from "../Utility";

export async function GetFilteredAboutData(query) {
  const response = await GetAbout(query);
  log("GetAbout - Service", response);

  let data = response.data;
  if (response.status === SERVICE_RESPONSE_STATUS_OK && !isNullOrEmpty(data)) {
    data = data ? data : {};
  }
  return data;
}
