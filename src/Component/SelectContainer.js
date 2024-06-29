import React, { useRef, useState } from "react";
import "./css/SelectContainer.css";
const SelectContainer = ({ options, filters, setFilters, name }) => {
  const searchRef = useRef();
  const [optionVisible, setOptionVisible] = useState(false);
  const changeFilters = (element) => {
    if (filters[name].includes(element)) {
      console.log("hello");
      setFilters((data) => {
        return {
          ...data,
          [name]: filters[name].filter((value) => value !== element),
        };
      });
    } else {
      setFilters((data) => {
        return {
          ...data,
          [name]: [...filters[name], element],
        };
      });
    }
  };
  return (
    options && (
      <div
        className="selectContainerMain"
        onClick={() => {
          if (optionVisible === false) {
            searchRef.current.focus();
          }
          setOptionVisible((value) => {
            return !value;
          });
        }}
      >
        {filters[name].map((element) => {
          return (
            <div key={element} className="displayOption">
              {element}
              <i
                className="fa-solid fa-xmark"
                onClick={(e) => {
                  e.stopPropagation();
                  changeFilters(element);
                }}
              ></i>
            </div>
          );
        })}
        <input className="search" type="text" ref={searchRef} />
        {optionVisible && (
          <div className="optionsContainer">
            {Object.keys(options)?.map((element) => {
              return Object.keys(options[element]).map((subElement) => {
                return filters[name]?.includes(subElement) ? (
                  <div
                    className="selected"
                    key={subElement}
                    onClick={() => {
                      changeFilters(subElement);
                    }}
                  >
                    {subElement}
                  </div>
                ) : (
                  <div
                    key={subElement}
                    onClick={() => {
                      changeFilters(subElement);
                    }}
                  >
                    {subElement}
                  </div>
                );
              });
            })}
          </div>
        )}
      </div>
    )
  );
};

export default SelectContainer;
