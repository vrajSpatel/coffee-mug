import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import LocationSelect from "../Component/LocationSelect";
import SelectContainer from "../Component/SelectContainer";
import apiContext from "../Context/apiContext";
import "./css/InvestorList.css";
import { Link } from "react-router-dom";

const InvestorList = () => {
  const { roles, industries, fetchInvestorListApi, profileImageFolderUrl } =
    useContext(apiContext);
  useEffect(() => {
    const func = async () => {
      setInvestorList(await fetchInvestorListApi(investorFilters));
    };
    func();
  }, []);
  const [seniority] = useState({
    seniority: {
      "CXO/C-Suite": 0,
      Director: 0,
      "Mid-Senior Level": 0,
      Manager: 0,
      "Junior-level": 0,
    },
  });
  const [investorFilters, setInvestorFilters] = useState({
    Roles: [],
    Industries: [],
    Seniority: [],
    Location: "",
    // keyword: "",
    // minExp: "",
    // MaxExp: "",
  });

  const [investorList, setInvestorList] = useState([]);
  return (
    <>
      <Navbar />
      <div className="mainTitle recomTitle">Investors & Angels</div>
      <div className="mainInvestorsCover">
        <div className="jobsFilters">
          <div className="filterSectionHeader">
            <div className="text">Showing Results For</div>
            <i className="fa-solid fa-rotate"></i>
          </div>
          {/* <div className="keywordSearch">
            <div className="text">Keyword Search</div>
            <div className="searchText">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                value={investorFilters.keyword}
                onChange={(e) => {
                  setInvestorFilters((data) => {
                    return {
                      ...data,
                      keyword: e.target.value,
                    };
                  });
                }}
              />
            </div>
          </div> */}
          <div className="rolesSelect">
            <div className="text">Roles</div>
            <SelectContainer
              options={roles}
              filters={investorFilters}
              setFilters={setInvestorFilters}
              name="Roles"
            />
          </div>
          <div className="industriesSelect">
            <div className="text">Industries</div>
            <SelectContainer
              options={industries}
              filters={investorFilters}
              setFilters={setInvestorFilters}
              name="Industries"
            />
          </div>
          <div className="senioritySelect">
            <div className="text">seniority</div>
            <SelectContainer
              options={seniority}
              filters={investorFilters}
              setFilters={setInvestorFilters}
              name="Seniority"
            />
          </div>
          {/* <div className="experienceSection">
            <div className="minExp">
              <div className="text">Min Exp</div>
              <select
                name="MinExp"
                defaultValue={investorFilters.minExp}
                onChange={(e) => {
                  setInvestorFilters((data) => {
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
                defaultValue={investorFilters.maxExp}
                onChange={(e) => {
                  setInvestorFilters((data) => {
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
          </div> */}
          <div className="locationSection">
            <div className="text">Location</div>
            <LocationSelect
              value={investorFilters.Location}
              change={(e) => {
                setInvestorFilters((data) => {
                  return {
                    ...data,
                    Location: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="applyFilterButton">
            <button
            //   onClick={() => {
            //     fetchRecommendedJobsAPI(investorFilters);
            //   }}
            >
              Apply Filter
            </button>
          </div>
        </div>
        <div className="mid_feed">
          {investorList?.map((element) => {
            return (
              <div className="card_investor">
                <div className="container_card">
                  <div className="info_person">
                    <div className="cont_person">
                      <div className="head_cont_p">
                        <div className="na_image">
                          <div className="image_na">
                            <Link>
                              <img
                                // src={element?.profileImage}
                                src={`${profileImageFolderUrl.current}${element?.profileImage}`}
                                alt=""
                              />
                            </Link>
                          </div>

                          <div className="na_na">
                            <Link>
                              {element.firstName} {element.lastName}
                            </Link>
                            <Link>Founder</Link>
                          </div>
                        </div>

                        <div className="mt_cont">
                          <div className="mt_item">
                            <img
                              src="https://assets.coffeemug.ai/assets/v2/img/svg/meetings.svg"
                              alt=""
                            />
                            <p>1 Meetings</p>
                          </div>
                          <div className="mt_item">
                            <img
                              src="https://assets.coffeemug.ai/assets/v2/img/svg/handshape.svg"
                              alt=""
                            />
                            <p>10+ Want to meet</p>
                          </div>
                          <div className="mt_item">
                            <img
                              src="https://assets.coffeemug.ai/assets/v2/img/svg/tumbsup.svg"
                              alt=""
                            />
                            <p> Endorsements</p>
                          </div>
                        </div>
                      </div>

                      <div className="bio_post">
                        <p>{element?.description}</p>
                      </div>

                      <div className="gole_container">
                        <p>
                          <img
                            src="https://assets.coffeemug.ai/assets/v2/img/svg/goal.svg"
                            alt=""
                          />
                          Goals
                        </p>
                        <div className="gole_list ">
                          <ul>
                            {element.objectives.map((obj) => {
                              return (
                                <li>
                                  <div className="check_text">
                                    <i
                                      className="fa-solid fa-check"
                                      aria-hidden="true"
                                    ></i>
                                    <p>{obj}</p>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="int_button">
                    <Link>Express Interest</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="endSection">
          <div className="relationManagerMain">
            <div className="profileCover">
              <div className="profileImage">
                <img
                  src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <b className="name">Esha Garodia</b>
                <div className="position">Relationship Manager</div>
              </div>
            </div>
            <h4>
              Hey dharmik! We found some investors you could meet this week! Are
              you in?
            </h4>
            <button className="darkOrange">Yes I'm In</button>
            <button className="orangeBorder">Skip This Week</button>
          </div>
          {/* <div className="matchingMembersMain">
            <h5>Achieve your goals by connecting with right experts</h5>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default InvestorList;
