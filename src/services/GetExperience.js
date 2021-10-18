const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const GetExperience = async () => {
  return await fetch(url + "/experience").then((response) => response.json());
};
