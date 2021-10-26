import { getUrlByEnvironment } from "../Utility";

export const GetProjects = async () => {
  return await fetch(getUrlByEnvironment() + "/projects").then((response) =>
    response.json()
  );
};
