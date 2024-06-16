import React, { useContext, useState } from "react";
import apiContext from "../Context/apiContext";

const IndustriesSignup = () => {
  const { industries, setIndustries } = useContext(apiContext);
  const [selectedIndustries, setSelectedIndustries] = useState(0);
  const [industriesWarning, setIndustriesWarning] = useState(false);

  const industrySelector = (element, subElement) => {
    if (selectedIndustries >= 10) {
      if (industries[element][subElement] === 0) {
        setIndustriesWarning(true);
        return;
      }
      if (industries[element][subElement] === 1) {
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

  return (
    <>
      <>
        <div className="title">
          Select upto 10 Industries in which you want to connect
        </div>
        {industriesWarning && (
          <div className="warning">you can select upto 10 industries</div>
        )}
        <div className="industriesOptions">
          {Object.keys(industries).map((element) => {
            return (
              <span key={element}>
                <div className="categoryTitle">{element}</div>
                <div className="categoryOptions">
                  {Object.keys(industries[element]).map((subElement) => {
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
                  })}
                </div>
              </span>
            );
          })}
        </div>
      </>
    </>
  );
};

export default IndustriesSignup;
