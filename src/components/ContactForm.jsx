/**
 * ContactForm.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Contact Form component for contact details page
 */

import { Form, Button, Badge } from "react-bootstrap/";
import Fade from "react-reveal/Fade";
import React, { useState } from "react";
import { SendEmail } from "../services/";
import "../styles/ContactForm.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleSubmit = async (event) => {
    setFeedbackMessage(""); // reset feedback message on click of submit button
    event.preventDefault(); // prevent page from refreshing
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    SendEmail({ name, email, message }).then((response) => {
      if (response.status === 200) {
        setFeedbackMessage("Email has been sent!");
        setEmailSuccess(true);
      } else {
        setFeedbackMessage("Failed to send email!", response.message);
        setEmailSuccess(false);
      }
    });
  };

  return (
    <Fade bottom duration={1000} delay={300} distance="30px">
      <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="controlTextarea">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>
        {emailSuccess === true ? (
          <Badge bg="success">{feedbackMessage ?? ""}</Badge>
        ) : (
          <Badge bg="error">{feedbackMessage ?? ""}</Badge>
        )}
        <Button variant="primary" type="submit" className="float-right">
          Submit
        </Button>
      </Form>
    </Fade>
  );
};
