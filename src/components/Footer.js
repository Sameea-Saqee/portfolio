import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github.jpg";
import vercelIcon from "../assets/img/vercel.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Sameea Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/sameea-adnan" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Sameea-Saqee" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://vercel.com/sameea-saqees-projects" target="_blank" rel="noopener noreferrer">
                <img src={vercelIcon} alt="Vercel" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved by Sameea</p>
            <p style={{ fontSize: '12px', color: '#B8B8B8', marginTop: '5px' }}>
              Software Engineer | WordPress & React.js Developer
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}