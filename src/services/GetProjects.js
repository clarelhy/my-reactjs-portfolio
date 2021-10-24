const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const GetProjects = async () => {
  return await fetch(url + "/projects").then((response) => {
    const responseJson = response.json();
    console.log("[Service Response] GetProjects", responseJson);
    return responseJson;
  });
};
