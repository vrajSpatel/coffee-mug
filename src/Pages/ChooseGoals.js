import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import SignupModal from "../Component/SignupModal";
import "./css/ChooseGoals.css";

function ChooseGoals({ page }) {
  const [goals, setGoals] = useState({
    "Fundraising for my Startup": 0,
    "Invest in Startups": 0,
    "Find a Job": 0,
    "Hire Talent": 0,
    "Brainstorm Ideas": 0,
    "I don't have a specific Goal": 0,
  });

  const [industries, setIndustries] = useState({
    "Popular Industries": {
      "Consumer Internet": 0,
      "Investor/VC": 0,
      "Big data/AI/IOT/ Robotics": 0,
      Fintech: 0,
      "B2B Tech": 0,
      Recruitment: 0,
      Healthtech: 0,
      "E-commerce": 0,
      Edutech: 0,
      Adtech: 0,
    },
    "All Industries": {
      "Advertising/Digital Marketing": 0,
      Agritech: 0,
      Automotive: 0,
      "B2B Services": 0,
      Construction: 0,
      Consulting: 0,
      "Consumer Goods/CPG": 0,
      "Content Production": 0,
      Education: 0,
      Electronics: 0,
      Energy: 0,
      Entertainment: 0,
      "F&B": 0,
      FMCG: 0,
      "Fashion & Beauty": 0,
      "Financial Services": 0,
      Gaming: 0,
      "Healthcare/Pharma": 0,
      "Hospitality/Travel": 0,
      "Legal Services": 0,
      "Matrimony/Dating": 0,
      Media: 0,
      "Real estate": 0,
      Retail: 0,
      "Social Impact": 0,
      "Software Development": 0,
      Sports: 0,
      "Supply Chain/Logistics": 0,
      Sustainability: 0,
      Telecom: 0,
    },
  });

  const [roles, setRoles] = useState({
    Popular: {
      Founder: 0,
      "Investor / VC  ": 0,
      "Angel Investor": 0,
      "COO, CBO, CEO": 0,
      Technology: 0,
      "Growth / Digital Marketing": 0,
      Mentor: 0,
      Recruitment: 0,
      "big data / AI / ML": 0,
      "Sales / Revenue / BD": 0,
      Strategy: 0,
      HR: 0,
      "Advertising / Marketing": 0,
      "Supply chain": 0,
      Finance: 0,
      "Business operations": 0,
      "Investment Banker": 0,
      "Merchant banker": 0,
      "Leadership / Executive Coach": 0,
      "Mergers & Acquisition": 0,
    },
    "Business Functions": {
      "Advertising / Marketing": 0,
      "big data / AI / ML": 0,
      "Business operations": 0,
      "COO, CBO, CEO": 0,
      Finance: 0,
      "Growth / Digital Marketing": 0,
      HR: 0,
      "Human Resources": 0,
      International: 0,
      "Mergers & Acquisition": 0,
      Product: 0,
      Recruitment: 0,
      Research: 0,
      "Sales / Revenue / BD": 0,
      Strategy: 0,
      "Supply chain": 0,
      Technology: 0,
    },
    Design: {
      "Fashion Designer": 0,
      "Interior Designer / Decorator": 0,
    },
    Technology: {
      "big data / AI / ML": 0,
      Algorithms: 0,
      "Augmented Reality": 0,
      Cybersecurity: 0,
      "Dev Ops": 0,
      Drones: 0,
      "Game Development": 0,
      Hardware: 0,
      Innovator: 0,
      "IT Operations": 0,
      "Mobile Applications": 0,
      NLP: 0,
      QA: 0,
      Robotics: 0,
      "UI / UX": 0,
    },
    Finance: {
      Admin: 0,
      Audit: 0,
      Banking: 0,
      "Customer Service": 0,
      "Financial markets": 0,
      legal: 0,
      "Merchandising / Buying / Planning": 0,
      Outsourcing: 0,
      "Risk Management": 0,
      "Sourcing / Procurement": 0,
      Tax: 0,
      Training: 0,
      "Vendor Management": 0,
    },
    Investors: {
      "Angel Investor": 0,
      Founder: 0,
      "Investment Banker": 0,
      "Investor / VC": 0,
    },
    Marketing: {
      "Advertising / Marketing": 0,
      "Growth / Digital Marketing": 0,
      "Analytics / BI": 0,
      Content: 0,
      Events: 0,
      "Market Research": 0,
      "Media Professional": 0,
      PR: 0,
      SEO: 0,
      "Social Media": 0,
    },
    Mentorship: {
      "counsellors / therapists": 0,
      "fitness / spiritual / coach / nutritionist": 0,
      "Leadership / Executive Coach": 0,
      Mentor: 0,
    },
    Manufacturing: {
      "Civil Engineer / Architect": 0,
      "Manufacturing Engineer": 0,
    },
    Others: {
      "Actor / Creative Arts": 0,
      "Biologist / Zoologist / oceanographers": 0,
      Consultant: 0,
      "doctor / specialist": 0,
      "Editor / Director / Producer": 0,
      Entertainment: 0,
      "Govt. Policy": 0,
      "Journalist / News Anchor": 0,
      Pharmaceuticals: 0,
    },
  });
  const [warning, setWarning] = useState(false);

  const [selectedIndustries, setSelectedIndustries] = useState(0);
  const [industriesWarning, setIndustriesWarning] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState(0);
  const [rolesWarning, setRolesWarning] = useState(false);
  const [navigatorHighlight, setNavigatorHighlight] = useState("Popular");

  const goalSelector = (element) => {
    var count = 0;
    Object.values(goals).forEach((val) =>
      val === 1 ? (count = count + 1) : null
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

  const industrySelector = (element, subElement) => {
    if (selectedIndustries >= 10) {
      if (industries[element][subElement] === 0) {
        setIndustriesWarning(true);
        return;
      }
      if (roles[element][subElement] === 1) {
        setIndustriesWarning(false);
      }
    }
    setIndustries((industries) => {
      return industries[element][subElement] === 0
        ? {
            ...industries,
            [element]: { ...industries[element], [subElement]: 1 },
          }
        : {
            ...industries,
            [element]: { ...industries[element], [subElement]: 0 },
          };
    });
    industries[element][subElement] === 0
      ? setSelectedIndustries((value) => value + 1)
      : setSelectedIndustries((value) => value - 1);
  };

  const roleSelector = (element, subElement) => {
    if (selectedRoles >= 10) {
      if (roles[element][subElement] === 0) {
        setRolesWarning(true);
        return;
      }
      if (roles[element][subElement] === 1) {
        setRolesWarning(false);
      }
    }
    setRoles((roles) => {
      return roles[element][subElement] === 0
        ? {
            ...roles,
            [element]: { ...roles[element], [subElement]: 1 },
          }
        : {
            ...roles,
            [element]: { ...roles[element], [subElement]: 0 },
          };
    });
    roles[element][subElement] === 0
      ? setSelectedRoles((value) => value + 1)
      : setSelectedRoles((value) => value - 1);
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
            {page === 1 && (
              <>
                <div className="title">
                  Select goal(s) for which you want to connect
                </div>
                {warning && (
                  <div className="warning">you can select only 3 goals</div>
                )}

                <div className="options">
                  {Object.keys(goals).map((element) => {
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
              </>
            )}
            {page === 2 && (
              <>
                <div className="title">
                  Select upto 10 Industries in which you want to connect
                </div>
                {industriesWarning && (
                  <div className="warning">
                    you can select upto 10 industries
                  </div>
                )}
                <div className="industriesOptions">
                  {Object.keys(industries).map((element) => {
                    return (
                      <span key={element}>
                        <div className="categoryTitle">{element}</div>
                        <div className="categoryOptions">
                          {Object.keys(industries[element]).map(
                            (subElement) => {
                              return industries[element][subElement] === 0 ? (
                                <div
                                  key={subElement}
                                  className="nonHighlighted"
                                  onClick={() => {
                                    industrySelector(element, subElement);
                                  }}
                                >
                                  <i className="fa-solid fa-check"></i>
                                  {subElement}
                                </div>
                              ) : (
                                <div
                                  key={subElement}
                                  className="highlighted"
                                  onClick={() => {
                                    industrySelector(element, subElement);
                                  }}
                                >
                                  <i className="fa-solid fa-check"></i>
                                  {subElement}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </span>
                    );
                  })}
                </div>
              </>
            )}
            {page === 3 && (
              <>
                <div className="title">
                  Select upto 10 Roles in which you want to connect
                </div>
                {rolesWarning && (
                  <div className="warning">you can select upto 10 Roles</div>
                )}
                <div className="rolesOptionsMain">
                  <div className="rolesNavigator">
                    {Object.keys(roles).map((element) => {
                      return navigatorHighlight !== element ? (
                        <a
                          className="roleLinks"
                          key={element}
                          href={`#${element}`}
                        >
                          {element}
                        </a>
                      ) : (
                        <a
                          className="roleLinks"
                          key={element}
                          href={`#${element}`}
                        >
                          {element}
                        </a>
                      );
                    })}
                  </div>
                  <div className="rolesOptions">
                    {Object.keys(roles).map((element) => {
                      return (
                        <span key={element}>
                          <div className="rolesTitle" id={element}>
                            {element}
                          </div>
                          <div className="optionSelectors">
                            {Object.keys(roles[element]).map((subElement) => {
                              return roles[element][subElement] === 0 ? (
                                <div
                                  key={subElement}
                                  className="nonHighlighted"
                                  onClick={() => {
                                    roleSelector(element, subElement);
                                  }}
                                >
                                  {subElement}
                                </div>
                              ) : (
                                <div
                                  key={subElement}
                                  className="highlighted"
                                  onClick={() => {
                                    roleSelector(element, subElement);
                                  }}
                                >
                                  {subElement}
                                </div>
                              );
                            })}
                          </div>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
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
              // class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Continue
            </Link>
          </div>
        )}
        <SignupModal />
      </div>
    </>
  );
}

export default ChooseGoals;
