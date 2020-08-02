import React from "react";
import "./ResponseMessage.scss";

const ResponseMessage = (props) => {
  return <div className="response-code">{props.message}</div>;
};

export default ResponseMessage;
