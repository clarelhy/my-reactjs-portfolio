const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const GetContact = async () => {
  return await fetch(url + "/contact").then((response) => {
    const responseJson = response.json();
    console.log("[Service Response] GetContact", responseJson);
    return responseJson;
  });
};
