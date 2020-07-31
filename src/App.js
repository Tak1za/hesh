import React from "react";
import "./App.scss";
import { Row, Col } from "react-bootstrap";
import RequestArea from './components/RequestArea/RequestArea';
import ResponseArea from './components/ResponseArea/ResponseArea';

function App() {
  return (
    <div id="app" className="App">
      <div className="main-container">
        <Row>
          <Col className="main-columns"></Col>
          <Col xs={6} className="main-columns">
            <RequestArea />
          </Col>
          <Col className="main-columns">
            <ResponseArea />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;