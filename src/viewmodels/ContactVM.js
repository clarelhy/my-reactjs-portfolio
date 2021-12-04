/**
 * AboutVM.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file View model for Contact component
 */

import { SERVICE_RESPONSE_STATUS_OK } from "../Constants";
import { GetContact } from "../services";
import { log, isNullOrEmpty } from "../Utility";

export async function GetContactData() {
  const response = await GetContact([]);
  log("GetContact - Service", response);

  let data = response.data;
  if (response.status === SERVICE_RESPONSE_STATUS_OK && !isNullOrEmpty(data)) {
    data = data ? data : {};
  }
  return data;
}
