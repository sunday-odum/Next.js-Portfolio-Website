import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              RD 12, Rumuagholu pipeline, Port Harcourt. RS
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Port Harcourt - Nigeria</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>sundayodum@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+2348061517238</p>
              </li>
            </ul>
             <h5 className="mt-4 mb-4">Social Link</h5>
            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/sunday-odum" passHref>
                <a target="_blank"><i className="ri-github-line"></i></a>
              </Link>
              <Link href="https://web.facebook.com/sundayodum" passHref>
                <a target="_blank"><i className="ri-facebook-line"></i></a>
              </Link>
              <Link href="https://www.linkedin.com/in/odum-sunday-928727ba" passHref>
                <a target="_blank"><i className="ri-linkedin-line"></i></a>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;