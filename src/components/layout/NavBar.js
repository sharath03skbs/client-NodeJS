import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar sticky="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          UserApp
        </Navbar.Brand>
        <Nav className="flex-grow-1 justify-content-end">
          <Nav.Link
            as={NavLink}
            to="/create"
            className="badge bg-light text-dark d-flex align-items-center p-2"
          >
            Create User
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
