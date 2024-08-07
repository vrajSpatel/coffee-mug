import React, { useContext, useState } from "react";
import apiContext from "../Context/apiContext";

const Goals = () => {
  const { goals, setGoals } = useContext(apiContext);
  const [warning, setWarning] = useState(false);
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
  return (
    <>
      <>
        <div className="title">
          Select goal(s) for which you want to connect
        </div>
        {warning && <div className="warning">you can select only 3 goals</div>}

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
    </>
  );
};

export default Goals;
