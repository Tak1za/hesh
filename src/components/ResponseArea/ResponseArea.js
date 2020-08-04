import React from "react";
import "./ResponseArea.scss";
import ResponseBody from "./ResponseBody/ResponseBody";
import ResponseMessage from "./ResponseMessage/ResponseMessage";

const ResponseArea = (props) => {
  return (
    <div className="response-area">
      {props.resMessage == null ? null : (
        <ResponseMessage message={props.resMessage} />
      )}
      {props.resBody == null ? null : (
        <ResponseBody data={props.resBody} />
      )}
    </div>
  );
};

export default ResponseArea;
