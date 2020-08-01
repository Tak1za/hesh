import React from "react";
import { Form } from "react-bootstrap";

const RequestMethods = () => {
  let requestType = ["GET", "PUT", "POST", "DELETE"];
  return (
    <Form.Group>
      {requestType.map((type) => (
        <Form.Check
          inline
          type="radio"
          label={type}
          name="requestMethods"
          className="request-methods"
          key={type}
        />
      ))}
    </Form.Group>
  );
};

export default RequestMethods;
