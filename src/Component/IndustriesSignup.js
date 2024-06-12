import React, { useState } from "react";

const IndustriesSignup = () => {
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
