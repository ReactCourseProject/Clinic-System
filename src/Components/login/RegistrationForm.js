import React from "react";
import "./RegistrationForm.css";
import logoo from "./download.png";

function RegistrationForm() {
  return (
    <>
      <img src={logoo} />
      <div className="container-1">
        <header>Registration</header>
        <form action="#" className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter phone number" required />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required />
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  defaultChecked
                />
                <label htmlFor="check-male">male</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" required />
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Country</option>
                  <option>Jordan</option>
                  <option>Palestine</option>
                  <option>Syria</option>
                  <option>Egypt</option>
                  <option>Iraq</option>
                  <option>Saudi Arabia</option>
                  <option>Another country</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div className="column"></div>
          </div>
          <a href="/src/Components/login/SignInSignUp.js">
            <button className="Btn-css">Submit</button>
          </a>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
