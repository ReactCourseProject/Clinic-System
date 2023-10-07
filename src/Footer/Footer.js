import React from "react";
import "./Footer.css";
import logoo from "../Assets/download.png";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="container">
          <div class="box">
            <img src={logoo} />
            <ul class="social">
              <li>
                <a href="#" class="facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#" class="youtube">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <p class="text">
              Your well-being is not a luxury, It's a necessity. At WellCare
              Clinic, we believe in elevating your healthcare experience to
              match your expectations of opulence and excellence.
            </p>
          </div>

          <div class="box">
            <div class="line">
              <i class="fas fa-map-marker-alt fa-fw"></i>
              <div class="info">Jordan, Amman.</div>
            </div>
            <div class="line">
              <i class="far fa-clock fa-fw"></i>
              <div class="info">Business Hours: From 10:00 AM To 18:00 PM </div>
            </div>
            <div class="line">
              <i class="fas fa-phone-volume fa-fw"></i>
              <div class="info">
                <span>+962 792911284</span>
                <span>+962 798018709</span>
              </div>
            </div>
          </div>
          <div class="box">
            <ul class="links">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <p class="copyright">
          &copy; 2023 WellCare <span> Clinic </span> All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
