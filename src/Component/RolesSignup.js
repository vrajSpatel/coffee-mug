import React, { useContext, useState } from "react";
import apiContext from "../Context/apiContext";

const RolesSignup = () => {
  const { roles, setRoles, signup } = useContext(apiContext);
  const [selectedRoles, setSelectedRoles] = useState(0);
  const [rolesWarning, setRolesWarning] = useState(false);
  const [navigatorHighlight, setNavigatorHighlight] = useState("Popular");

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
