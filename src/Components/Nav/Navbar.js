import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import logo from "../../Assets/logo.png";
const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="active">Home</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Service Details
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <button>Login</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
