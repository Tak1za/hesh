import React from "react";
import "./App.scss";
import { Row, Col } from "react-bootstrap";

function App() {
  let data = {
    test: "test test test",
    test2: "test2 test2 test2",
  };
  return (
    <div id="app" className="App">
      <div className="main-container">
        <Row>
          <Col className="main-columns"></Col>
          <Col xs={6} className="main-columns"></Col>
          <Col className="main-columns response-area">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
