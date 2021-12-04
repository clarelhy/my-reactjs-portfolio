/**
 * AboutVM.js
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file View model for ContactForm component
 */

import { SendEmail } from "../services";
import { log } from "../Utility";

export async function TriggerSendEmail({ name, email, message }) {
  const response = await SendEmail({ name, email, message });
  log("SendEmail - Service", response);
  return response;
}
