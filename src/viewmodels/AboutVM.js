/**
 * AboutVM.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file View model for About component
 */

import { SERVICE_RESPONSE_STATUS_OK } from "../Constants";
import { GetAbout } from "../services";
import { log, isNullOrEmpty, getDuration } from "../Utility";

export async function GetAboutData() {
  const response = await GetAbout([]);
  log("GetAbout - Service", response);

  const data = response.data;
  if (response.status === SERVICE_RESPONSE_STATUS_OK && !isNullOrEmpty(data)) {
    data.yoe = getDuration(data.startWorkDate);
  }
  return data;
}
