const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const GetProjects = async () => {
  return await fetch(url + "/projects").then((response) => response.json());
};
