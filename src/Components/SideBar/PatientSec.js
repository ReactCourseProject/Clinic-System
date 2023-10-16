import React from "react";
import "./Dashboard.css";
import "./FrameWork.css";
import "./Appointments";
import image from "../Assets/logo.png";
import Human1 from "../Assets/team-01.png";
import Human2 from "../Assets/beard.png";
import Navbar from "react-bootstrap/Navbar";

function PatientSec() {
  return (
    <>
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
            <img src={image} alt="" />
          </Navbar.Brand>
          <ul>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/src/Components/SideBar/Dashboard.js"
              >
                <i className="fa-regular fa-chart-bar fa-fw"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li>
              <a
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
                href="/src/Components/SideBar/PatientSec.js"
              >
                <i class="fa-solid fa-person"></i>
                <span>Patients</span>
              </a>
            </li>

            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/src/Components/SideBar/Appointments.js"
              >
                <i class="fa-solid fa-calendar-check"></i>
                <span>Appointments</span>
              </a>
            </li>

            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="settings.html"
              >
                <i class="fa-solid fa-file"></i>
                <span>Day Sheets</span>
              </a>
            </li>

            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/src/Components/SideBar/Dashboard.js"
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

              <a href="/src/Components/login/SignInForDoctor.js">
                <button>Logout</button>
              </a>
              {/* <img decoding="async" src={Human1} alt="" /> */}
            </div>
          </div>
          <h1 class="p-relative">Total Patients</h1>
          <div class="projects p-20 bg-white rad-10 m-20">
            <h2 class="mt-0 mb-20">Patients</h2>
            <div class="responsive-table">
              <table class="fs-15 w-full">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Finish Date</td>
                    <td>Client</td>
                    <td>Price</td>
                    <td>Team</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>
                      <img decoding="async" src={Human2} alt="" />
                    </td>
                    <td>
                      <span class="label btn-shape bg-orange c-white">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>
                      <img decoding="async" src={Human2} alt="" />
                    </td>
                    <td>
                      <span class="label btn-shape bg-blue c-white">
                        In Progress
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>
                      <img decoding="async" src={Human2} alt="" />
                    </td>
                    <td>
                      <span class="label btn-shape bg-green c-white">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>
                      <img decoding="async" src={Human2} alt="" />
                    </td>
                    <td>
                      <span class="label btn-shape bg-green c-white">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>
                      <img decoding="async" src={Human2} alt="" />{" "}
                    </td>
                    <td>
                      <span class="label btn-shape bg-red c-white">
                        Rejected
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>
                      <img decoding="async" src={Human2} alt="" />
                    </td>
                    <td>
                      <span class="label btn-shape bg-green c-white">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientSec;
