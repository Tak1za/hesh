import React from "react";
import { Form } from "react-bootstrap";
import "./RequestMethods.scss";

const RequestMethods = (props) => {
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
          value={type}
          selected={props.method}
          checked={props.method === type}
          key={type}
          onChange={(e) => props.setMethod(e.target.value)}
        />
      ))}
    </Form.Group>
  );
};

export default RequestMethods;
