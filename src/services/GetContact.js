import { getUrlByEnvironment } from "../Utility";

export const GetContact = async () => {
  return await fetch(getUrlByEnvironment() + "/contact").then((response) =>
    response.json()
  );
};
