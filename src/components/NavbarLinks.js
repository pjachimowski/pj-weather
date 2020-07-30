import React from 'react';
// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarLinks() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand>PJ-WEATHER <i class="fas fa-cloud-sun-rain"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link target="_blank" href="https://openweathermap.org/current">API</Nav.Link>
          <Nav.Link target="_blank" href="https://github.com/pjachimowski/pj-weather">Repo</Nav.Link>
          <NavDropdown title="Author" id="basic-nav-dropdown">
            <NavDropdown.Item target="_blank" href="https://github.com/pjachimowski"><i class="fab fa-github"></i> github</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/patryk-jachimowski/"><i class="fab fa-linkedin-in"></i> linkedin
            </NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://dribbble.com/Jachimowski"><i class="fab fa-dribbble"></i> dribbble</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item target="_blank" href="https://jachimowski89.wixsite.com/patryk-jachimowski">
            <i class="fas fa-globe"></i>  website
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarLinks;
