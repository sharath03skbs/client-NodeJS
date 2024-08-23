import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <h3 className="text-center">About Us</h3>
      <Row className="justify-content-center">
        <Col md={4}>
          <span className="fst-italic">
            A Repository that contains a well structured API . This API was
            created using Node.js and to practice Node.js. Thanks to my
            instructor ♚ PH⑦ de Soria™♛ (https://github.com/pH-7)
          </span>
        </Col>
      </Row>
    </Layout>
  );
};

export default About;
