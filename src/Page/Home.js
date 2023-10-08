import React from "react";
import "../Page/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCompo from "./CradComp";
import data from "./Data.json";
import landing from "../Assets/Doctors.png";
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

      {data.map(function (Item, index) {
        // Add an index parameter to map function
        return (
          <div className="modal-container" key={index}>
            <CardCompo
              titleCardOne={Item.titleCardOne}
              descriptionOne={Item.descriptionOne}
            />
          </div>
        );
      })}

      <div class="features" id="features">
        <h2 class="main-title">Our Partners</h2>
        <div class="container">
          <div class="slider-area">
            <div class="wrapper">
              <div class="items-container">
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
      </div>
    </>
  );
};

export default Home;
