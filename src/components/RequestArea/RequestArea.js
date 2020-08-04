import React from "react";
import "./RequestArea.scss";
import { Form } from "react-bootstrap";
import RequestMethods from "./RequestMethods/RequestMethods";
import RequestUrl from "./RequestUrl/RequestUrl";

const RequestArea = (props) => {
  return (
    <div className="request-area">
      <Form onSubmit={(e) => props.onSendRequest(e)}>
        <RequestMethods setMethod={props.setMethod} method={props.method} />
        <RequestUrl setUrl={props.setUrl} url={props.url} />
      </Form>
    </div>
  );
};

export default RequestArea;
