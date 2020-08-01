import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import "./RequestUrl.scss";

const RequestUrl = () => {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm="1">
        URL
      </Form.Label>
      <Col sm="11">
        <Form.Control
          type="text"
          placeholder="Enter URL here..."
          className="request-url"
        />
      </Col>
    </Form.Group>
  );
};

export default RequestUrl;
