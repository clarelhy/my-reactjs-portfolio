import { formUrlWithArgs } from "../Utility";

const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const GetAbout = async (queryFields) => {
  const path = queryFields ? formUrlWithArgs(queryFields) : "";
  return await fetch(url + "/about" + path).then((response) => response.json());
};
