import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

// import img01 from "../../public/images/img-01.png";
// import img02 from "../../public/images/img-02.png";
// import img03 from "../../public/images/img-03.jpg";
import img04 from "../../public/images/hero.png";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <p>
              I am a talented,ambitious,driven,hardworking and self-motivated developer with broad skills and experience on software development,I constantly learn and experiment new technologies,techniques and tools. Furthermore, I am adept at handling multiple tasks daily competently, Maintaining a reputation for quality and efficiency in project Management,communication,and problem resolution.
            </p>
                <SectionSubtitle subtitle="Skills" />
            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  JavaScript Libraries and Frameworks
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Full Software Development LifeCycle
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 Deadline Adherence
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 Database Skills
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 Critical Thinking
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 Time Management
                </h6>
              </div>
              
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="https://github.com/sunday-odum" passHref><a target="_blank">Github</a></Link>
              </button>

              <button className="secondary__btn">
                <Link href="/cv/odum.pdf" passHref><a target="_blank">Download CV</a></Link>
              </button>
            </div>
          </Col>

          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="Tech Stack" />       

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-2 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  JavaScript,Reactjs/Nextjs,vuejs
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  MongoDB,MSQL,Firebase
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 Tailwind/Material UI
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 PHP and Wordpress
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 HTML/CSS/Figma
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                 API
                </h6>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;