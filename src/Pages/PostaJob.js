import React, { useContext, useState } from "react";
import "./css/PostaJob.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import apiContext from "../Context/apiContext";
import LocationSelect from "../Component/LocationSelect";

const PostaJob = () => {
  const { roles, skills, industries } = useContext(apiContext);
  const [jobData, setJobData] = useState({
    Role: "",
    Seniority: "",
    Name: "",
    Stage: "",
    MinExp: "",
    MaxExp: "",
    PreferredSkills: [],
    PreferredIndustries: [],
    jobDescription: "",
    city: "",
    remoteLocation: false,
    opportunityVisibility: "",
  });

  const changeStringData = (e) => {
    setJobData((data) => {
      return { ...data, [e.target.name]: [e.target.value] };
    });
  };
  const skillsChanger = (element) => {
    if (jobData.PreferredSkills.includes(element)) {
      setJobData((data) => {
        return {
          ...data,
          PreferredSkills: data.PreferredSkills.filter(
            (value) => value !== element
          ),
        };
      });
    } else {
      setJobData((data) => {
        return {
          ...data,
          PreferredSkills: [...data.PreferredSkills, element],
        };
      });
    }
  };

  const industryChanger = (element) => {
    if (jobData.PreferredIndustries.includes(element)) {
      setJobData((data) => {
        return {
          ...data,
          PreferredIndustries: data.PreferredIndustries.filter(
            (value) => value !== element
          ),
        };
      });
    } else {
      setJobData((data) => {
        return {
          ...data,
          PreferredIndustries: [...data.PreferredIndustries, element],
        };
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="postaJobMain">
        <div className="postaJobTitle">Post a Job</div>
        <div className="postaJobForm">
          <div className="jobRoleSection">
            <div className="sectionTitle">Job Role</div>
            <div className="inputCover">
              <div className="inputSection">
                <div className="header">Role</div>
                <select
                  name="Role"
                  defaultValue={jobData.Role}
                  onChange={changeStringData}
                >
                  <option value="">Select Role</option>
                  {Object.keys(roles).map((element) => {
                    return Object.keys(roles[element]).map((subelement) => {
                      return (
                        <option value={subelement} key={subelement}>
                          {subelement}
                        </option>
                      );
                    });
                  })}
                </select>
              </div>
              <div className="inputSection">
                <div className="header">Seniority</div>
                <select
                  name="Seniority"
                  defaultValue={jobData.Seniority}
                  onChange={changeStringData}
                >
                  <option value="">Select Seniority</option>
                  <option value="CXO/C-Suite">CXO/C-Suite</option>
                  <option value="Director">Director</option>
                  <option value="Mid-Senior Level">Mid-Senior Level</option>
                  <option value="Manager">Manager</option>
                  <option value="Junior-level">Junior-level</option>
                </select>
              </div>
            </div>
          </div>
          <div className="organizationSection">
            <div className="sectionTitle">Organization</div>
            <div className="inputCover">
              <div className="inputSection">
                <div className="header">Name</div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={jobData.Name}
                  onChange={changeStringData}
                />
              </div>
              <div className="inputSection">
                <div className="header">Stage</div>
                <select
                  name="Stage"
                  defaultValue={jobData.Stage}
                  onChange={changeStringData}
                >
                  <option value="">Select Stage</option>
                  <option value="Idea Stage Venture (Seed Stage)">
                    Idea Stage Venture (Seed Stage)
                  </option>
                  <option value="Early Stage Venture (Series-A Stage)">
                    Early Stage Venture (Series-A Stage)
                  </option>
                  <option value="Growth Stage Venture (Series-B Stage onwards)">
                    Growth Stage Venture (Series-B Stage onwards)
                  </option>
                  <option value="Late Stage Venture (after Multiple rounds)">
                    Late Stage Venture (after Multiple rounds)
                  </option>
                  <option value="Multinational Organization">
                    Multinational Organization
                  </option>
                  <option value="VC/PE Firm/Investment Banking">
                    VC/PE Firm/Investment Banking
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="experienceRangeSection">
            <div className="sectionTitle">Experience Range</div>
            <div className="inputCover">
              <div className="inputSection">
                <select
                  name="MinExp"
                  defaultValue={jobData.MinExp}
                  onChange={changeStringData}
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
                to
                <select
                  name="MaxExp"
                  defaultValue={jobData.MaxExp}
                  onChange={changeStringData}
                >
                  <option value="">Max Years</option>
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
          </div>
          <div className="preferredSkillsSection">
            <div className="sectionTitle">Preferred Skills</div>
            <div className="selectionBox">
              {Object.keys(skills).map((element) => {
                return jobData.PreferredSkills.includes(element) ? (
                  <div
                    className="option highlighted"
                    key={element}
                    onClick={() => {
                      skillsChanger(element);
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                    {element}
                  </div>
                ) : (
                  <div
                    className="option"
                    key={element}
                    onClick={() => {
                      skillsChanger(element);
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                    {element}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="preferredIndustriesSection">
            <div className="sectionTitle">Preferred Industries</div>
            <div className="selectionBox">
              {Object.keys(industries).map((element) => {
                return Object.keys(industries[element]).map((subElement) => {
                  return jobData.PreferredIndustries.includes(subElement) ? (
                    <div
                      className="option highlighted"
                      key={subElement}
                      onClick={() => {
                        industryChanger(subElement);
                      }}
                    >
                      <i className="fa-solid fa-check"></i>
                      {subElement}
                    </div>
                  ) : (
                    <div
                      className="option"
                      key={subElement}
                      onClick={() => {
                        industryChanger(subElement);
                      }}
                    >
                      <i className="fa-solid fa-check"></i>
                      {subElement}
                    </div>
                  );
                });
              })}
            </div>
          </div>
          <div className="jobDescriptionSection">
            <div className="sectionTitle">Job Description (optional)</div>
            <div className="inputSection">
              <textarea
                name="jobDescription"
                value={jobData.jobDescription}
                rows={8}
                placeholder="Please Add A Brief Job Description"
                onChange={changeStringData}
              />
            </div>
          </div>
          <div className="locationSection">
            <div className="sectionTitle">Location</div>
            <div className="inputCover">
              <div className="inputSection">
                <LocationSelect
                  value={jobData.city}
                  change={changeStringData}
                />
                <div className="checkboxCover">
                  <input
                    type="checkbox"
                    name="remoteLocation"
                    checked={jobData.remoteLocation}
                    onChange={() => {
                      setJobData((data) => {
                        console.log(data.remoteLocation);
                        return {
                          ...data,
                          remoteLocation: !data.remoteLocation,
                        };
                      });
                    }}
                  />
                  Remote Location
                </div>
              </div>
            </div>
          </div>
          <div className="visibilitySection">
            <div className="sectionTitle">Opportunity Visibility</div>
            <div className="inputSection">
              <div className="checkboxCover">
                <input
                  type="checkbox"
                  name="visible"
                  checked={
                    jobData.opportunityVisibility === "visible" ? true : false
                  }
                  onChange={() => {
                    setJobData((data) => {
                      return {
                        ...data,
                        opportunityVisibility: "visible",
                      };
                    });
                  }}
                />
                Visible:
                <span className="description">
                  Visible to all, all relevant professionals can explore & show
                  interest
                </span>
              </div>
              <div className="checkboxCover">
                <input
                  type="checkbox"
                  name="private"
                  checked={
                    jobData.opportunityVisibility === "private" ? true : false
                  }
                  onChange={() => {
                    setJobData((data) => {
                      return {
                        ...data,
                        opportunityVisibility: "private",
                      };
                    });
                  }}
                />
                Private:
                <span className="description">
                  Visible only to professionals I have expressed interest in
                </span>
              </div>
            </div>
          </div>
          <div className="submitButton">
            <button>Submit Job Post</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostaJob;
