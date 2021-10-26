import { formUrlWithArgs, getUrlByEnvironment } from "../Utility";

export const GetAbout = async (queryFields) => {
  const path = queryFields ? formUrlWithArgs(queryFields) : "";
  return await fetch(getUrlByEnvironment() + "/about" + path).then((response) =>
    response.json()
  );
};
