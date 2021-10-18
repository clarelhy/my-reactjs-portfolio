const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const GetFooter = async () => {
  return await fetch(url + "/footer").then((response) => response.json());
};
