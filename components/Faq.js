"use client";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <Accordion
      defaultActiveKey="collapseTwo"
      className="accordion wow fadeInUp delay-0-4s"
      id="faq-accordion"
    >
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button"
            eventKey="collapseOne"
          >
            What Service We Provide ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseOne"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <p>
              We offer wide variety of services like Logo Design, Logo
              Animation, Branding, Social Media Marketing, Promo Videos, Youtube
              Shorts, Instagram Reels, Website Design & Development, Motion
              Graphics Product Promo, Digital Marketing, Search Engine
              Optimization and detailed Competetior Analysis, What's App
              Marketing, Product Package Design, Motion Poster, Digital
              Brochures, Digital Visiting Cards & Pamplets.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseTwo"
          >
            How Many Years Of Experience ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseTwo"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>
              3 years of experience in diversified fields like Graphic Design,
              Programming and Video Editing.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseThree"
          >
            Have Any Professional Team Member ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseThree"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>Yes</p>
          </div>
        </Accordion.Collapse>
      </div>
      {/* <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseFour"
          >
            Are You Awards Winning Agency ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseFour"
          className="accordion-collapse "
        >
          <div className="accordion-body">
            <p>
              To take a trivial example which undertakes laborious physical
              exercise except to obtain some advantage pleasure annoying
              consequences
            </p>
          </div>
        </Accordion.Collapse>
      </div> */}
    </Accordion>
  );
};
export default Faq;
