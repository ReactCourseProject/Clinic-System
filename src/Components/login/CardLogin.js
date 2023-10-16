import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardLogin.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../Nav/Navbar";

function CardLogin() {
  return (
    <div className="body">
      <Navbar />
      <Container>
        <Row>
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Card.Title>Sign In for the Doctor</Card.Title>
                <Card.Text>
                  The user enters this place to log in to the doctor.
                </Card.Text>
                <Button
                  variant="primary"
                  className="doctor-button"
                  href="/src/Components/login/SignInForDoctor.js"
                >
                  Doctor
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Card.Title>Sign In for the Patient</Card.Title>
                <Card.Text>
                  The user enters this place to log in to the patient.
                </Card.Text>
                <Button
                  variant="primary"
                  className="patient-button"
                  href="/src/Components/login/SignInSignUp.js"
                >
                  Patient
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardLogin;
