const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export async function GetTechStack() {
  return await fetch(url + "/techstack").then((response) => {
    const responseJson = response.json();
    console.log("[Service Response] GetTechStack", responseJson);
    return responseJson;
  });
}
