import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiBiolink, SiStackoverflow } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, My name is <span className="yellow">Amrish Kumar </span>
                 and I am based in <span className="yellow"> Noida, India.</span>
                <br />
                <br />
                I hold a <span className="yellow">Master's degree</span> in Computer Applications.
                <br />
                <br />
                Myself as a proficient
                  <b className="yellow"> Front-End </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />My expertise lies in
                    <b className="yellow"> React JS, Javascript, Redux </b>
                    as well as have knowledge in React Hooks, Styled Components, and API
                    integration using Axios.
                  
                  <br />
                  <br />
                  I have alo skilled in 
                  <b className="yellow"> SonarQube, GIT, JIRA, Firebase, and Emotion CSS,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      Proficient in Agile methodologies, cross-functional team collaboration, and tools like NPM, Tailwind CSS, Material UI, and
                      Bootstrap. Adept at unit testing with Jest and delivering responsive, maintainable code.
                    </b>
                  </i>
                  
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Amrish-Amy"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/amrish-up/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://stackoverflow.com/users/2594135/amrish"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiStackoverflow />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://amrish-portfolio.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <SiBiolink />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About