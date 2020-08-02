import React, { useState } from "react";
import "./RequestArea.scss";
import { Form } from "react-bootstrap";
import RequestMethods from "./RequestMethods/RequestMethods";
import RequestUrl from "./RequestUrl/RequestUrl";

const RequestArea = (props) => {
  const [requestUrl, setRequestUrl] = useState("");
  const [requestMethod, setRequestMethod] = useState("GET");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Sending: ${requestUrl} with method: ${requestMethod}`);
    fetch(requestUrl, {
      method: requestMethod,
    })
      .then((res) => {
        props.setMessage(res.status);
        return res.json();
      })
      .then((data) => props.setResponse(data))
      .catch((err) => {
        console.log(err);
        props.setResponse(err);
      });
  };
  return (
    <div className="request-area">
      <Form onSubmit={handleSubmit}>
        <RequestMethods setMethod={setRequestMethod} method={requestMethod} />
        <RequestUrl setUrl={setRequestUrl} url={requestUrl} />
      </Form>
    </div>
  );
};

export default RequestArea;
