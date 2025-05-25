import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import visible from "../assets/projects/visible.jpeg";
import football from "../assets/projects/find-football.jpeg";
import krypto from "../assets/projects/krypto.png";
import straightTalk from "../assets/projects/straightTalk.jpeg";
import amrishportfolio from "../assets/projects/amrishportfolio.jpeg";
import nexiawellness from "../assets/projects/nexiaWellness.jpeg";
import dnb from "../assets/projects/dnb.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={true}
              title="Find England Football"
              description="The Find Football website (https://find.englandfootball.com/) is a ReactJS-based platform provided by England Football that allows users to locate football activities, facilities, and opportunities across England. The Find Football platform acts as a centralized hub to discover football-related opportunities, catering to players, coaches, and football enthusiasts of all ages and skill levels. It simplifies the process of finding local football events, clubs, and facilities while promoting inclusivity and community engagement."
              ghLink="https://find.englandfootball.com/"
              showIcon={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visible}
              isBlog={true}
              title="Visible by verizon"
              description="Visible (https://www.visible.com/) is a U.S.-based, all-digital wireless service provider owned by Verizon Communications. Launched in 2018, it operates as a mobile virtual network operator (MVNO), delivering prepaid, contract-free mobile plans exclusively through its website and mobile app, without any physical retail locations. Visible is designed for digitally savvy consumers seeking affordable, straightforward mobile service without the complexities of traditional carriers. Its app-based model appeals to users comfortable managing their mobile plans online."
              ghLink="https://www.visible.com/"
              showIcon={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={straightTalk}
              isBlog={true}
              title="straighttalk - Telecom Website"
              description="Straight Talk Wireless is a U.S.-based prepaid mobile service provider offering no-contract plans and devices. Owned by Verizon and sold exclusively through Walmart and its online platforms, Straight Talk operates as a mobile virtual network operator (MVNO), utilizing Verizon's extensive 4G LTE and 5G networks to deliver nationwide coverage. Straight Talk provides a variety of prepaid plans without long-term commitments, catering to diverse user needs."
              ghLink="https://www.straighttalk.com/"
              showIcon={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnb}
              isBlog={true}
              title="Dun & Bradstreet India"
              description="Dun & Bradstreet India (https://www.dnb.co.in/) is a leading provider of business decisioning data and analytics, enabling companies to enhance performance through comprehensive insights. Leveraging the extensive Dun & Bradstreet Data Cloud, which encompasses over 595 million business records, the platform offers solutions across finance, risk, compliance, ESG (Environmental, Social, and Governance), and sales & marketing domains."
              ghLink="https://www.dnb.co.in/"
              showIcon={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexiawellness}
              isBlog={true}
              title="Nexia Wellness"
              description="Nexia Wellness is an online health and wellness consultation marketplace designed to connect individuals with holistic health practitioners. The platform emphasizes a 'wholistic' approach, integrating conventional Western medicine with holistic practices to address the mind, body, and spirit. "
              ghLink="https://www.nexiawellness.com/"
              showIcon={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amrishportfolio}
              isBlog={false}
              title="Portfolio Website"
              description="The portfolio website at amrish-portfolio.vercel.app is a personal showcase built using React.js and deployed via Vercel. Given the deployment on Vercel and the use of React.js, it's likely that the site features a responsive design, interactive components, and modern web development practices."
              demoLink="https://amrish-portfolio.vercel.app/"
              ghLink="https://github.com/Amrish-Amy/amrish-portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects