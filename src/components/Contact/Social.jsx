import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiBiolink, SiStackoverflow } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <Container style={{ padding: '30px' }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className='contact-text'>
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/Amrish-Amy"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/amrish-up/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://stackoverflow.com/users/2594135/amrish"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiStackoverflow />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://amrish-portfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <SiBiolink />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Social