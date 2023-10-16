import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import logoo from "./download.png";

const SignInSignUpForm = () => {
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
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us, please login with your personal
                  info.
                </p>
                <Link to="/src/Components/login/RegistrationForm.js">
                  <button>Registration</button>
                </Link>
              </div>
              <div id="signIn">
                <h1>Hello, Friend!</h1>
                <p>
                  Enter your personal details and start your journey with us.
                </p>
                <button onClick={moveSliderLeft}></button>
              </div>
            </div>
          </div>
          <div id="forms">
            <div
              id="signInForm"
              className={`holder ${isSignUp ? "shiftRight" : ""}`}
            >
              <h1>Sign in</h1>
              <a href="#" className="social-media-button">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social-media-button">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="social-media-button">
                <i className="fa fa-linkedin"></i>
              </a>
              <p>or use your account</p>
              <input type="email" placeholder="Email" />
              <br />
              <input type="password" placeholder="Password" />
              <p>Forgot your password?</p>
              <button>Sign In</button>
            </div>
            <div
              id="signUpForm"
              className={`holder ${isSignUp ? "shiftLeft" : ""}`}
            >
              <h1>Sign in</h1>
              <a href="#" className="social-media-button">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social-media-button">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="social-media-button">
                <i className="fa fa-linkedin"></i>
              </a>
              <p>or use your email for registration</p>
              <input type="email" placeholder="Email" />
              <br />
              <input type="password" placeholder="Password" />
              <a href="/src/Components/SideBar/PatientDashboard/PatientDashboard.js">
                <button class="BTN">Sign in</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInSignUpForm;
