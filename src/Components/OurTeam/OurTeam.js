import React from "react";

import "../OurTeam/OurTeam.css";
import Doc1 from "../Assets/Doctor1.png";
import Doc2 from "../Assets/Doctor2.png";
import Doc3 from "../Assets/Doctor3.png";
// import { Navbar } from "react-bootstrap";
import Navbar from "../Nav/Navbar";

function OurTeams() {
  return (
    <>
      <Navbar />
      <div class="team" id="team">
        <h2 class="main-title-1">Team Members</h2>

        <div class="Cardd">
          <div class="myCard">
            <div class="innerCard">
              <img src={Doc1} />
              <div class="frontSide">
                <p class="title">Dr. David Mitchell</p>
                <p>MORE</p>
              </div>
              <div class="backSide">
                <div class="social-menu">
                  <ul>
                    <li>
                      <a href="">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  <br></br>
                  Dr. David Mitchell is a dedicated pediatrician with a thriving
                  practice in a suburban community. His typical day involves
                  seeing a variety of young patients, from infants to
                  adolescents.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="myCard">
            <div class="innerCard">
              <img src={Doc2} />
              <div class="frontSide">
                <p class="title">Dr. Mark Turner</p>
                <p>MORE</p>
              </div>
              <div class="backSide">
                <div class="social-menu">
                  <ul>
                    <li>
                      <a href="">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Dr. Mark Turner is a seasoned emergency room physician with
                  extensive experience in a busy metropolitan hospital.
                </p>
              </div>
            </div>
          </div>

          <div class="myCard">
            <div class="innerCard">
              <img src={Doc3} />
              <div class="frontSide">
                <p class="title">Dr. Emily Anderson</p>
                <p>MORE</p>
              </div>
              <div class="backSide">
                <div class="social-menu">
                  <ul>
                    <li>
                      <a href="">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p class="title"></p>
                <p>
                  <br></br>
                  <br></br>
                  Dr. Emily Anderson is a skilled surgeon specializing in
                  orthopedics. She works in a bustling urban hospital and has
                  gained recognition for her expertise in joint replacements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container">
          <div class="box">
            <div class="data">
              <img
                decoding="async"
                src={Doc1}
                alt=""
                style={{ marginLeft: "60px" }}
              />
              <div class="social">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="info">
              <h3 style={{ marginTop: "50px" }}>Dr. David Mitchell</h3>
              <p>Simple Short Description</p>
            </div>
          </div>

          <div class="box">
            <div class="data">
              <img
                decoding="async"
                src={Doc2}
                alt=""
                style={{ marginLeft: "50px" }}
              />
              <div class="social">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="info">
              <h3 style={{ marginTop: "70px" }}>Dr. Mark Turner</h3>
              <p>Simple Short Description</p>
            </div>
          </div>

          <div class="box">
            <div class="data">
              <img
                decoding="async"
                src={Doc3}
                alt=""
                style={{ width: "500%", marginLeft: "30px" }}
              />
              <div class="social">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="info">
              <h3 style={{ marginTop: "70px" }}>Dr. Emily Anderson</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default OurTeams;
