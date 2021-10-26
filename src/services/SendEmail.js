import { getUrlByEnvironment } from "../Utility";

export const SendEmail = async ({ name, email, message }) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  };

  return await fetch(getUrlByEnvironment() + "/sendEmail", requestOptions);
};
