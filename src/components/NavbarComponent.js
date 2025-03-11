import React, { Component } from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar expand="lg" variant='dark' >
      <Container>
        <Navbar.Brand as ={Link} to="/">Wasirr App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="/sukses" exact>Home</Nav.Link>
            <Nav.Link as={Link} to="/apa-aja" exact>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as ={Link} to="/" exact>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}
