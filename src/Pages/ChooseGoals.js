import React   from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import SignupModal from "../Component/SignupModal";
import "./css/ChooseGoals.css";
import Goals from "../Component/Goals";
import IndustriesSignup from "../Component/IndustriesSignup";
import RolesSignup from "../Component/RolesSignup";
import CompleteProfile from "../Component/CompleteProfile";

function ChooseGoals({ page }) {
  return (
    <>
      <Navbar onlyLogo={true} />
      <div className="chooseGoalsMain">
        <div className="chooseGoals">
          <div className="headerSection">
            <div className="title">Join For Free!</div>
            <div className="text">
              Already a Member? <Link to="/signin">Login</Link>
            </div>
          </div>
          <div className="progressLine">
            <div className="name">
              <div>1</div>Goals
            </div>
            <div className="dashedLine"></div>
            <div className="name">
              <div>2</div>Preferences
            </div>
            <div className="dashedLine"></div>
            <div className="name">
              <div>3</div>Profile
            </div>
          </div>

          <div className="optionSelectorMain">
            <div className="relationshipManager"></div>
            {page === 1 && <Goals />}
            {page === 2 && <IndustriesSignup />}
            {page === 3 && <RolesSignup />}
            {page === 4 && <CompleteProfile />}
          </div>
        </div>
      </div>
      <div className="continueButtonArea">
        {page === 1 && (
          <Link to="/choose-industries" className="continueButton">
            Continue
          </Link>
        )}
        {page === 2 && (
          <div className="continueBinder">
            <Link to="/choose-goals" className="prevButton">
              <i className="fa-solid fa-chevron-left"></i>
              Prev
            </Link>
            <Link to="/choose-roles" className="continueButton">
              Continue
            </Link>
          </div>
        )}
        {page === 3 && (
          <div className="continueBinder">
            <Link to="/choose-industries" className="prevButton">
              <i className="fa-solid fa-chevron-left"></i>
              Prev
            </Link>
            <Link
              className="continueButton"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Continue
            </Link>
          </div>
        )}
        {page === 4 && <Link className="continueButton">Continue</Link>}
        <SignupModal />
      </div>
    </>
  );
}

export default ChooseGoals;
