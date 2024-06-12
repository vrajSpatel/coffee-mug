import React, { useState } from "react";

const RolesSignup = () => {
  const [selectedRoles, setSelectedRoles] = useState(0);
  const [rolesWarning, setRolesWarning] = useState(false);
  const [navigatorHighlight, setNavigatorHighlight] = useState("Popular");
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
              <a className="roleLinks" key={element} href={`#${element}`}>
                {element}
              </a>
            ) : (
              <a className="roleLinks" key={element} href={`#${element}`}>
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
  );
};

export default RolesSignup;
