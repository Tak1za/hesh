import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./RequestUrl.scss";

const RequestUrl = () => {
  return (
    <Form.Group as={Row}>
      <Col sm="9">
        <Form.Control
          type="text"
          placeholder="Enter URL here..."
          className="request-url"
        />
      </Col>
      <Col sm="3">
        <Button
          variant="outline-primary"
          type="submit"
          className="request-button"
        >
          Send
        </Button>
      </Col>
    </Form.Group>
  );
};

export default RequestUrl;
