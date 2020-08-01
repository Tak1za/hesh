import React from "react";
import "./ResponseArea.scss";
import ResponseBody from "./ResponseBody/ResponseBody";
import ResponseMessage from "./ResponseMessage/ResponseMessage";

const ResponseArea = (props) => {
  return (
    <div className="response-area">
      <ResponseMessage />
			<ResponseBody />
    </div>
  );
};

export default ResponseArea;
