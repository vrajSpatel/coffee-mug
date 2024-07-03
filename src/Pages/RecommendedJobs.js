import React, { useContext, useEffect, useState } from "react";
import "./css/RecommendedJobs.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import apiContext from "../Context/apiContext";
import SelectContainer from "../Component/SelectContainer";
import LocationSelect from "../Component/LocationSelect";
import { Link } from "react-router-dom";

const RecommendedJobs = () => {
  const {
    recommendedJobsFilter,
    setRecommendedJobsFilter,
    roles,
    industries,
    jobs,
    setJobs,
  } = useContext(apiContext);
  const [seniority] = useState({
    seniority: {
      "CXO/C-Suite": 0,
      Director: 0,
      "Mid-Senior Level": 0,
      Manager: 0,
      "Junior-level": 0,
    },
  });

  return (
    <>
      <Navbar />
      <div className="mainTitle">Recommended Jobs</div>

      <div className="mainjobsWindow">
        <div className="jobsFilters">
          <div className="filterSectionHeader">
            <div className="text">Showing Results For</div>
            <i className="fa-solid fa-rotate"></i>
          </div>
          <div className="keywordSearch">
            <div className="text">Keyword Search</div>
            <div className="searchText">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                value={recommendedJobsFilter.keyword}
                onChange={(e) => {
                  setRecommendedJobsFilter((data) => {
                    return {
                      ...data,
                      keyword: e.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
          <div className="rolesSelect">
            <div className="text">Roles</div>
            <SelectContainer
              options={roles}
              filters={recommendedJobsFilter}
              setFilters={setRecommendedJobsFilter}
              name="Roles"
            />
          </div>
          <div className="industriesSelect">
            <div className="text">Industries</div>
            <SelectContainer
              options={industries}
              filters={recommendedJobsFilter}
              setFilters={setRecommendedJobsFilter}
              name="Industries"
            />
          </div>
          <div className="senioritySelect">
            <div className="text">seniority</div>
            <SelectContainer
              options={seniority}
              filters={recommendedJobsFilter}
              setFilters={setRecommendedJobsFilter}
              name="Seniority"
            />
          </div>
          <div className="experienceSection">
            <div className="minExp">
              <div className="text">Min Exp</div>
              <select
                name="MinExp"
                defaultValue={recommendedJobsFilter.minExp}
                onChange={(e) => {
                  setRecommendedJobsFilter((data) => {
                    return {
                      ...data,
                      minExp: e.target.value,
                    };
                  });
                }}
              >
                <option value="">Min Years</option>
                <option value="0">0 years</option>
                <option value="1">1 years</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="7">7 years</option>
                <option value="10">10 years</option>
                <option value="15">15 years</option>
                <option value="30">30 years</option>
              </select>
            </div>
            to
            <div className="maxExp">
              <div className="text">max Exp</div>
              <select
                name="MinExp"
                defaultValue={recommendedJobsFilter.maxExp}
                onChange={(e) => {
                  setRecommendedJobsFilter((data) => {
                    return {
                      ...data,
                      maxExp: e.target.value,
                    };
                  });
                }}
              >
                <option value="">Min Years</option>
                <option value="0">0 years</option>
                <option value="1">1 years</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="7">7 years</option>
                <option value="10">10 years</option>
                <option value="15">15 years</option>
                <option value="30">30 years</option>
              </select>
            </div>
          </div>
          <div className="locationSection">
            <div className="text">Location</div>
            <LocationSelect
              value={recommendedJobsFilter.Location}
              change={(e) => {
                setRecommendedJobsFilter((data) => {
                  return {
                    ...data,
                    Location: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="applyFilterButton">
            <button>Apply Filter</button>
          </div>
        </div>
        <div className="jobsPosts">
          {jobs.length !== 0 ? (
            jobs?.map((element, index) => {
              return (
                <div key={index} className="jobsPost">
                  <div className="header">
                    <div className="firstSection">
                      <div className="highlightOrange">
                        <div className="seniority">{element.Seniority}</div>
                        <div className="roles">{element.Role}</div> -
                      </div>
                      <div className="industryName">{element.Name}</div>
                    </div>
                    <div className="secondSection">{element.time}</div>
                  </div>
                  <div className="midContainer">
                    <div className="internalContainer">
                      <div className="title">Experience Range</div>
                      <div className="content">
                        {element.MinExp} - {element.MaxExp} Years
                      </div>
                    </div>
                    <div className="internalContainer">
                      <div className="title">Location</div>
                      <div className="content">
                        {element.remoteLocation ? (
                          <div>Remote Location</div>
                        ) : (
                          <div>{element.city}</div>
                        )}
                      </div>
                    </div>
                    <div className="internalContainer">
                      <div className="title">Founding Year</div>
                      <div className="content">{element.FoundingYear}</div>
                    </div>
                    <div className="internalContainer">
                      <div className="title">Industry</div>
                      <div className="content">
                        {element.PreferredIndustries.map((industry, index) => {
                          return index ===
                            element.PreferredIndustries.length - 1
                            ? `${industry}`
                            : `${industry},`;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="userDetails">
                    <div className="headerTitle">Job Posted:</div>
                    <div className="userContainer">
                      <div className="profileImage">
                        <img src={element.profileImage} alt="profileImage" />
                      </div>
                      <div className="userDetails">
                        <div className="profileName">{element.profileName}</div>
                        <div className="profileDesignation">
                          {element.profileDesignation}
                        </div>
                        <div className="profileCompany">
                          {element.profileCompany}
                        </div>
                      </div>
                      <div className="moreDetails">
                        <Link to="/job-details">{"Details >"}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Matching Job Posts</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecommendedJobs;
