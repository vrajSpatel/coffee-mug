import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./css/SignupModal.css";
import apiContext from "../Context/apiContext";

const SignupModal = () => {
  const { goals, roles, industries, signupData, setSignupData, signupAPI } =
    useContext(apiContext);

  const processRef = useRef();
  const changeSignupData = (e) => {
    setSignupData((signupdata) => {
      return { ...signupdata, [e.target.name]: e.target.value };
    });
  };

  const signupHandler = async () => {
    // console.log(goals, roles, industries);
    console.log(await signupAPI(goals, roles, industries, signupData));
  };

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Coffee Mug
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="modalHeader">
              <div className="modalTitle">Sign up</div>
              <div className="loginButton">
                Already a Member? <Link>Login</Link>
              </div>
            </div>
            <div className="inputBoxes">
              <input
                type="textbox"
                name="email"
                className="emailInput"
                placeholder="Enter Email"
                value={signupData.email}
                onChange={changeSignupData}
              />
              <input
                type="password"
                name="password"
                className="passwordInput"
                placeholder="Enter Password"
                value={signupData.password}
                onChange={changeSignupData}
              />
            </div>
            <div className="buttonsCover">
              <Link
                className="signupButton"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                onClick={signupHandler}
              >
                Signup
              </Link>
              <Link to="/process-profile" ref={processRef}></Link>
              <span>or continue with</span>
              <button className="googleButton">Google</button>
            </div>
            <div className="signupFooter">
              By signing up, you are agreeing to our <Link>Terms </Link>
              and <Link> Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
