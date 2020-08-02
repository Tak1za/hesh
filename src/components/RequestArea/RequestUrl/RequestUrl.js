import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./RequestUrl.scss";

const RequestUrl = (props) => {
  return (
    <Form.Group as={Row}>
      <Col sm="9">
        <Form.Control
          type="text"
          placeholder="Enter URL here..."
          className="request-url"
          onChange={(e) => props.setUrl(e.target.value)}
          value={props.url}
        />
      </Col>
      <Col sm="3">
        <Button
          variant="outline-primary"
          className="request-button"
          type="submit"
        >
          Send
        </Button>
      </Col>
    </Form.Group>
  );
};

export default RequestUrl;
