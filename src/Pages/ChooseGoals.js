import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import "./css/ChooseGoals.css";
import { Link } from "react-router-dom";

function ChooseGoals() {
  const [goals, setGoals] = useState({
    "Fundraising for my Startup": 0,
    "Invest in Startups": 0,
    "Find a Job": 0,
    "Hire Talent": 0,
    "Brainstorm Ideas": 0,
    "I don't have a specific Goal": 0,
  });

  const [warning, setWarning] = useState(false);

  const goalSelector = (element) => {
    var count = 0;
    Object.values(goals).forEach((val) =>
      val === 1 ? (count = count + 1) : (null)
    );
    if (count >= 3) {
      if (goals[element] === 0) {
        setWarning(true);
        return;
      } else if (goals[element] === 1) {
        setWarning(false);
      }
    } else {
      setWarning(false);
    }
    setGoals((goals) => {
      return goals[element] === 1
        ? { ...goals, [element]: 0 }
        : { ...goals, [element]: 1 };
    });
  };
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
            <div className="title">
              Select goal(s) for which you want to connect
            </div>
            {warning && (
              <div className="warning">you can select only 3 goals</div>
            )}
            <div className="options">
              {Object.keys(goals).map((element) => {
                console.log(goals[element]);
                return goals[element] === 0 ? (
                  <div
                    key={element}
                    className="nonHighlighted"
                    onClick={() => {
                      goalSelector(element);
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                    {element}
                  </div>
                ) : (
                  <div
                    key={element}
                    className="highlighted"
                    onClick={() => {
                      goalSelector(element);
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                    {element}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="continueButtonArea">
        <button className="continueButton">Continue</button>
      </div>
    </>
  );
}

export default ChooseGoals;
