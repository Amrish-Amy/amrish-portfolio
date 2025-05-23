import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="tech-name">VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="tech-name">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <span className="tech-name">Vercel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <span className="tech-name">Netlify</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <span className="tech-name">Heroku</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
