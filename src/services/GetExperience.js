import { getUrlByEnvironment } from "../Utility";

export const GetExperience = async (url) => {
  return await fetch(getUrlByEnvironment() + "/experience").then((response) =>
    response.json()
  );
};
