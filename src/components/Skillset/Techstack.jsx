import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiMaterialui,
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiTailwindcss,
  SiStyledcomponents
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <span className="tech-name">HTML5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="tech-name">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="tech-name">Node JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="tech-name">React JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <span className="tech-name">Redux</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <span className="tech-name">MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents />
        <span className="tech-name">Styled Components</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <span className="tech-name">Tailwind CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <span className="tech-name">Material UI</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="tech-name">GIT</span>
      </Col>
    </Row>
  );
}

export default Techstack;
