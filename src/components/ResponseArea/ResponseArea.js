import React from "react";
import "./ResponseArea.scss";
import ResponseBody from "./ResponseBody/ResponseBody";
import ResponseMessage from "./ResponseMessage/ResponseMessage";

const ResponseArea = (props) => {
  return (
    <div className="response-area">
      {props.responseMessage == null ? null : (
        <ResponseMessage message={props.responseMessage} />
      )}
      {props.responseBody == null ? null : (
        <ResponseBody data={props.responseBody} />
      )}
    </div>
  );
};

export default ResponseArea;
