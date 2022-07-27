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
Designed and developed custom highly interactive websites/web applications using content management systems and popular MVC frameworks.<br/>
Installed and configured hypertext transfer protocol (HTTP) servers and associated operating systems.<br/>
Developed databases that supported Web applications and Web sites. <br/>
Wrote supporting code for web applications and websites.<br/>
Developing complex and highly interactive web applications using web technologies <br/>
Developing cross platform mobile and desktop apps using latest application development standards and tools.<br/>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;