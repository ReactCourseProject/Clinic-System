import React from "react";
import "../Dashboard.css";
import "../FrameWork.css";
import image from "./logo.png";
import Human from "./team-01.png";
import Navbar from "react-bootstrap/Navbar";

function PatientDashboard_() {
  return (
    <div className="page d-flex">
      <div className="sidebar bg-black-c p-20 p-relative">
        {/* <h3 className="p-relative txt-c mt-0">WellCare</h3> */}
        {/* <img
          className="p-relative txt-c mt-0"
          src={image}
          href="/src/Components/Nav/Navbar.js"
          alt=""
        /> */}
        <Navbar.Brand
          style={{ marginLeft: "50px" }}
          href="/src/Components/Nav/Navbar.js"
        >
          <img style={{ width: "100px" }} src={image} alt="" />
        </Navbar.Brand>
        <ul>
          <li>
            <a
              className="active d-flex align-center fs-14 c-black rad-6 p-10"
              href="/src/Components/SideBar/PatientDashboard/PatientDashboard.js"
            >
              <i className="fa-regular fa-chart-bar fa-fw"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="/src/Components/SideBar/PatientDashboard/AppointmentsPatient.js"
            >
              <i class="fa-solid fa-calendar-check"></i>
              <span>Appointments</span>
            </a>
          </li>
          <li>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="/src/Components/SideBar/PatientDashboard/PatientDashboard.js"
            >
              <i className="fa-solid fa-gear fa-fw"></i>
              <span>Settings</span>
            </a>
          </li>
          {/* Add the rest of the list items here */}
        </ul>
      </div>
      <div className="content w-full">
        <div className="head bg-white p-15 between-flex">
          <div className="search p-relative">
            <input
              className="p-10 fs-14"
              type="search"
              placeholder="Type A Keyword"
            />
          </div>
          <div className="icons d-flex align-center">
            <span className="notification p-relative">
              <i
                style={{ padding: "20px" }}
                className="fa-regular fa-bell fa-lg"
              ></i>
            </span>
            <a href="/src/Components/login/SignInSignUp.js">
              <button>Logout</button>
            </a>

            {/* <img decoding="async" src={Human1} alt="" /> */}
          </div>
        </div>
        <h1 class="p-relative">Dashboard</h1>

        <div className="stats" id="stats">
          <div className="container">
            <div className="box">
              <i class="fa-solid fa-calendar-check"></i>
              <span className="number">10</span>
              <span className="text">Total Appointments</span>
              <a href="/src/Components/SideBar/PatientDashboard/AppointmentsPatient.js">
                <button className="btn-dash">Show</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard_;
