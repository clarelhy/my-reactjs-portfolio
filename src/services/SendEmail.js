const url = process.env.REACT_APP_BACKEND_ENDPOINT;

export const SendEmail = async ({ name, email, message }) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  };

  return await fetch(url + "/sendEmail", requestOptions).then((response) => {
    const responseJson = response.json();
    console.log("[Service Response] SendEmail", responseJson);
    return responseJson;
  });
};
