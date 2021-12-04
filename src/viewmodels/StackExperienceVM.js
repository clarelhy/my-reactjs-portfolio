/**
 * AboutVM.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file View model for StackExperience component
 */

import { SERVICE_RESPONSE_STATUS_OK } from "../Constants";
import { GetExperience, GetTechStack } from "../services";
import { log, isNullOrEmpty, getDuration } from "../Utility";

export async function GetExperienceData() {
  const response = await GetExperience([]);
  log("GetExperience - Service", response);

  let data = response.data;
  if (response.status === SERVICE_RESPONSE_STATUS_OK && !isNullOrEmpty(data)) {
    data.forEach((experience) => {
      experience.duration = getDuration(experience.joined, experience.left);
    });

    data = data.sort((a, b) => Number(b.yearJoined) - Number(a.yearJoined));
  }

  return data;
}

export async function GetTechStackData() {
  const response = await GetTechStack([]);
  log("GetTechStack - Service", response);

  let data = response.data;
  if (response.status === SERVICE_RESPONSE_STATUS_OK && !isNullOrEmpty(data)) {
    data.forEach((stack) => {
      stack.yoe = getDuration(stack.start);
    });

    data = data.sort((a, b) => Number(b.yoe) - Number(a.yoe));
  }
  return data;
}
