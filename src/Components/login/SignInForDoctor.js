import React, { useState } from "react";
import "./SignIn.css";
import logoo from "./download.png";

const SignInForDoctor = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const moveSliderRight = () => {
    document.getElementById("overlay").classList.remove("overlay-moveHalfLeft");
    document
      .getElementById("overlayInner")
      .classList.remove("overlayInner-moveHalfRight");
    document.getElementById("signInForm").classList.remove("shiftRight");

    document.getElementById("overlay").classList.add("overlay-moveHalfRight");
    document
      .getElementById("overlayInner")
      .classList.add("overlayInner-moveHalfLeft");
    document.getElementById("signUpForm").classList.add("shiftLeft");
  };

  const moveSliderLeft = () => {
    document
      .getElementById("overlay")
      .classList.remove("overlay-moveHalfRight");
    document
      .getElementById("overlayInner")
      .classList.remove("overlayInner-moveHalfLeft");
    document.getElementById("signUpForm").classList.remove("shiftLeft");

    document.getElementById("overlay").classList.add("overlay-moveHalfLeft");
    document
      .getElementById("overlayInner")
      .classList.add("overlayInner-moveHalfRight");
    document.getElementById("signInForm").classList.add("shiftRight");
  };

  return (
    <>
      <img src={logoo} />
      <div className="container">
        <div id="signInSignUpBox">
          <div id="overlay">
            <div id="overlayInner">
              <div id="signUp">
                <h1>Hello, Doctor!</h1>
                <p>Enter your email and start your journey with us.</p>
              </div>
              <div id="signIn">
                <h1>Hello, Doctor!</h1>
                <p>Enter your email and start your journey with us.</p>
              </div>
            </div>
          </div>
          <div id="forms">
            {/* <img src={logoo} /> */}
            <div
              id="signInForm"
              className={`holder ${isSignUp ? "shiftRight" : ""}`}
            ></div>
            <div
              id="signUpForm"
              className={`holder ${isSignUp ? "shiftLeft" : ""}`}
            >
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <input type="email" placeholder="Email" className="aaa" />
              <br />
              <a href="/src/Components/SideBar/Dashboard.js">
                <button>Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForDoctor;
