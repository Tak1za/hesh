import React, { useState } from "react";
import "./ResponseBody.scss";
import ClipboardButton from "./ClipboardButton/ClipboardButton";

const ResponseBody = (props) => {
  const [showClipboard, setShowClipboard] = useState(false);
  return (
    <div
      className="response"
      onMouseEnter={() => setShowClipboard(true)}
      onMouseLeave={() => setShowClipboard(false)}
    >
      <ClipboardButton show={showClipboard} />
      <pre id="json-response">{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
};

export default ResponseBody;
