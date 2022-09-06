import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Frontend Development" icon="ri-html5-fill" />
                
                 <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
                
              </div>

               <ServicesItem title="Web Development" icon="ri-computer-line" />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-4">Experience</h3>
            <p>
❖Designed and developed custom highly interactive websites/web applications using Javascript frameworks and popular MVC frameworks.<br/>
❖Designed and developed Modern Media Application in React JS,Material UI 5 and RapidAPI.<br/>
❖I transformed a figma Design to fully mobile and Desktop Responsive Bank Web Application with React JS and Tailwind.<br/>
❖I built an ecommerce website using Nextjs,Tailwind, MongoDB and paypal in couse of the project i designed a responsive web template,
  a user friendly frontend, and developed a scalable backend with MongoDB Atlas, finally i use online Cloud services to upload images,
  online payment gateway, and website deployment on vercel.<br/>
❖Installed and configured hypertext transfer protocol (HTTP) servers and associated operating systems.<br/>
❖Social Network- open source project.<br/>

            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;