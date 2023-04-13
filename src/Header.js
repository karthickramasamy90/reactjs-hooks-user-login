import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const header = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/propsdrilling">
            <Nav.Link>Props Drilling</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/propsnondrilling">
            <Nav.Link>Props Not Drilling</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/localstorage">
            <Nav.Link>Local Storage</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
