import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import logo from "../Assets/download.png";

const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/src/Components/Nav/Navbar.js">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/src/Components/Nav/Navbar.js" className="active">
                Home
              </Nav.Link>
              <NavDropdown
                title="Pages"
                id="basic-nav-dropdown"
                style={{ marginBottom: "10px" }}
              >
                <NavDropdown.Item href="/src/Components/AboutPage/About.js">
                  About us
                </NavDropdown.Item>
                <NavDropdown.Item href="/src/Components/OurTeam/OurTeam.js">
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="/src/Components/login/CardLogin.js">
                  Booking
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                style={{ marginBottom: "10px" }}
              >
                <NavDropdown.Item href="/src/Components/service/serviceDetails">
                  Service Details
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <a
                href="/src/Components/login/CardLogin.js"
                className="login-button"
              >
                <button
                  class="login-button btn btn-primary"
                  className="login-button"
                  variant="primary"
                >
                  Login
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
