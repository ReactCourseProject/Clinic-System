import React from "react";
import "../Page/Home.css";
import landing from "../Assets/Doctors.png";
import clinic1 from "../Assets/clinic.jpg";
import clinic2 from "../Assets/clinic2.jpg";
import clinic3 from "../Assets/clinic3.jpg";
import partner1 from "../Assets/partner1.png";
import partner2 from "../Assets/partner2.png";
import partner3 from "../Assets/partner3.png";
import partner4 from "../Assets/partner4.png";
import partner5 from "../Assets/partner5.png";
import partner6 from "../Assets/partner6.png";

const Home = () => {
  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>
              Welcome <span class="span-1">,</span> WellCare{" "}
              <span class="span-1">Clinic</span>
            </h1>
            <p>
              At Wellcare, we are committed to providing comprehensive and
              compassionate medical services to enhance your well-being and
              quality of life.
            </p>
          </div>
          <div className="image">
            <img decoding="async" src={landing} alt="" />
          </div>
        </div>
        <a href="#features" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
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
            <a href="#">More</a>
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
            <a href="#">More</a>
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
            <a href="#">More</a>
          </div>
        </div>
      </div>

      <div class="features" id="features">
        <h2 class="main-title">Our Partners</h2>
        <div class="container">
          <div class="slider-area">
            <div class="wrapper">
              <div class="item">
                <img decoding="async" src={partner1} alt="" />
              </div>

              <div class="item">
                <img decoding="async" src={partner2} alt="" />
              </div>

              <div class="item">
                <img decoding="async" src={partner3} alt="" />
              </div>

              <div class="item">
                <img decoding="async" src={partner4} alt="" />
              </div>

              <div class="item">
                <img decoding="async" src={partner5} alt="" />
              </div>

              <div class="item">
                <img decoding="async" src={partner6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
