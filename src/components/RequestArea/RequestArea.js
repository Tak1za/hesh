import React from "react";
import "./RequestArea.scss";
import { Form } from "react-bootstrap";
import RequestMethods from "./RequestMethods/RequestMethods";
import RequestUrl from "./RequestUrl/RequestUrl";

const RequestArea = (props) => {
  return (
    <div className="request-area">
      <Form>
        <RequestMethods />
        <RequestUrl />
      </Form>
    </div>
  );
};

export default RequestArea;
