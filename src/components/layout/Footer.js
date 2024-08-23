import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Nav } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="fixed-bottom p-2 mt-2 mb-2 border border-dark">
      <Row className="justify-content-center">
        <Col md={{ span: 3, offset: 1 }}>
          <NavLink to="/contact">
            <h4>Contact</h4>
          </NavLink>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <NavLink to="/create">
            <h4>Create User</h4>
          </NavLink>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <NavLink to="/about">
            <h4>About Us</h4>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
