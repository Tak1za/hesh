import React, { useState, useEffect } from "react";
import "./App.scss";
import { Row, Col, Button } from "react-bootstrap";
import RequestArea from "./components/RequestArea/RequestArea";
import ResponseArea from "./components/ResponseArea/ResponseArea";

function App() {
  const [jsonResponse, setJsonResponse] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [requestUrl, setRequestUrl] = useState("");
  const [requestMethod, setRequestMethod] = useState("GET");

  const initializeStates = () => {
    setJsonResponse(null);
    setResponseMessage(null);
    setRequestUrl("");
    setRequestMethod("GET");
  }

  useEffect(() => {
    if(localStorage.getItem("hesh") == null) {
      initializeStates();
      localStorage.setItem("hesh", []);
    }
  })

  const addRequest = () => {
    console.log("add request");
    initializeStates();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Sending: ${requestUrl} with method: ${requestMethod}`);
    fetch(requestUrl, {
      method: requestMethod,
    })
      .then((res) => {
        setResponseMessage(`${res.status} ${res.statusText}`);
        if(res.ok){
          return res.json();
        }
        throw res.json();
      })
      .then((data) => setJsonResponse(data))
      .catch((err) => {
        setJsonResponse(err);
      });
  };

  return (
    <div id="app" className="App">
      <div className="main-container">
        <Row>
          <Col xs={2} className="main-columns">
            <div className="add-request-button-container">
              <Button
                variant="outline-primary"
                className="add-request-button"
                type="submit"
                onClick={addRequest}
              >
                Add Request
              </Button>
            </div>
          </Col>
          <Col xs={5} className="main-columns">
            <RequestArea
              url={requestUrl}
              method={requestMethod}
              setUrl={setRequestUrl}
              setMethod={setRequestMethod}
              onSendRequest={handleSubmit}
            />
          </Col>
          <Col className="main-columns">
            <ResponseArea
              resBody={jsonResponse}
              resMessage={responseMessage}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
