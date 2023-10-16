import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import clinic1 from "../Assets/clinic.jpg";
import clinic2 from "../Assets/clinic2.jpg";
import clinic3 from "../Assets/clinic3.jpg";

function Card(props) {
  let [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <div className="modal-container">
        <Modal
          show={show}
          onHide={handleShow}
          centered
          style={{ color: "#00C6AC" }}
        >
          <Modal.Header
            closeButton
            style={{ backgroundColor: "rgb(14,45,59)" }}
          >
            <Modal.Title style={{ fontWeight: "700", fontSize: "30px" }}>
              {props.titleCardOne}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#37688e",
              backgroundColor: "white",
            }}
          >
            {props.descriptionOne}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "rgb(14,45,59)" }}>
            <Button
              variant="primary"
              onClick={handleShow}
              style={{
                backgroundColor: "#00C6AC",
                width: "500px",
                fontWeight: "bold",
              }}
            >
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div class="features" id="features">
        <h2 class="main-title">Features</h2>
        <div class="container">
          <div class="box quality">
            <div class="img-holder">
              <img decoding="async" src={clinic1} alt="" />
            </div>
            <h2>Convenient Location</h2>
            <p>
              Wellcare clinic is strategically located in the heart of the city,
              making it easily accessible to a large number of residents. Its
              central location ensures that patients can reach the clinic
              quickly, whether they are coming from work, home, or other parts
              of the city.
            </p>

            <br></br>
            <br></br>
            <a href="#" onClick={handleShow}>
              More
            </a>
          </div>
          <div class="box time">
            <div class="img-holder">
              <img decoding="async" src={clinic2} alt="" />
            </div>
            <h2>Exceptional Experience</h2>
            <p>
              Wellcare clinic is renowned for its commitment to providing an
              exceptional patient experience. The clinic's staff, including
              doctors, nurses, and administrative personnel, prioritize patient
              comfort, satisfaction, and well-being.
            </p>
            <a href="#" onClick={handleShow}>
              More
            </a>
          </div>
          <div class="box passion">
            <div class="img-holder">
              <img decoding="async" src={clinic3} alt="" />
            </div>
            <h2>Comprehensive Services</h2>
            <p>
              Wellcare clinic offers a wide range of medical services under one
              roof. From primary care and preventive health screenings to
              specialized treatments and diagnostic tests, patients can access a
              variety of healthcare services without the need to visit multiple
              facilities.
            </p>
            <a href="#" onClick={handleShow}>
              More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
