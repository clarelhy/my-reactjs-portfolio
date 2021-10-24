const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const GetExperience = async () => {
  return await fetch(url + "/experience").then((response) => {
    const responseJson = response.json();
    console.log("[Service Response] GetExperience", responseJson);
    return responseJson;
  });
};
