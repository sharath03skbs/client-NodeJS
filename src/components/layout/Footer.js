import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Nav } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="fixed-bottom p-1 mt-2 mb-2 border border-dark text-white bg-dark">
      <Row className="justify-content-center">
        <Col md={{ span: 3, offset: 1 }}>
          <NavLink to="/contact" className=" text-reset ">
            <h4>Contact</h4>
          </NavLink>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <NavLink to="/create" className=" text-reset ">
            <h4>Create User</h4>
          </NavLink>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <NavLink to="/about" className=" text-reset ">
            <h4>About Us</h4>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
