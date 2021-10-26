import { getUrlByEnvironment } from "../Utility";

export const GetFooter = async () => {
  return await fetch(getUrlByEnvironment() + "/footer").then((response) =>
    response.json()
  );
};
