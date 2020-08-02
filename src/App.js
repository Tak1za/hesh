import React, { useState } from "react";
import "./App.scss";
import { Row, Col } from "react-bootstrap";
import RequestArea from "./components/RequestArea/RequestArea";
import ResponseArea from "./components/ResponseArea/ResponseArea";

function App() {
  const [jsonResponse, setJsonResponse] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  return (
    <div id="app" className="App">
      <div className="main-container">
        <Row>
          <Col className="main-columns"></Col>
          <Col xs={6} className="main-columns">
            <RequestArea
              setResponse={setJsonResponse}
              setMessage={setResponseMessage}
            />
          </Col>
          <Col className="main-columns">
            <ResponseArea
              responseBody={jsonResponse}
              responseMessage={responseMessage}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
