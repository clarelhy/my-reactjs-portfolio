import { getUrlByEnvironment } from "../Utility";

export async function GetTechStack() {
  return await fetch(getUrlByEnvironment() + "/techstack").then((response) =>
    response.json()
  );
}
