import React from "react";
import Navbars from "../Nav/Navbar";
import "../AboutPage/About.css";
import log from "../Assets/logo.png";

function AboutUs() {
  return (
    <>
      <div class="features" id="features">
        <h2 class="main-title">About US</h2>
        <div class="centered-card">
          <div class="book">
            <p>
              <span>Wellcare Clinic</span> Is a trusted healthcare institution
              dedicated to delivering comprehensive medical services and
              promoting wellness within the community. With a commitment to
              patient-centric care and a team of skilled healthcare
              professionals, Wellcare has established itself as a beacon of
              health and well-being.
              <br />
              <br />
              At Wellcare, our mission is to provide accessible, high-quality
              healthcare services that empower individuals to lead healthier
              lives. We believe in the value of prevention, early intervention,
              and patient education as essential components of holistic
              healthcare.
            </p>
            <div class="cover">
              <img src={log} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
