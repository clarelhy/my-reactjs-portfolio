/**
 * AboutVM.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file View model for ProjectList component
 */

import { SERVICE_RESPONSE_STATUS_OK } from "../Constants";
import { GetProjects } from "../services";
import { log, isNullOrEmpty } from "../Utility";

export async function GetProjectsData() {
  const response = await GetProjects();
  log("GetProjects - Service", response);

  let data = response.data;
  if (response.status === SERVICE_RESPONSE_STATUS_OK && !isNullOrEmpty(data)) {
    data = data ? data : [];
    data = data.sort((a, b) => Number(b.yearStart) - Number(a.yearStart));
  }
  return data;
}
