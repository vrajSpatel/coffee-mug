import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "./css/Account.css";
import graphImage from "../assests/graph-question.png";
import LocationSelect from "../Component/LocationSelect";
import { Link } from "react-router-dom";
import apiContext from "../Context/apiContext";
const Account = () => {
  const { roles, industries, updateUserDetailsAPI } = useContext(apiContext);
  const [firstSection, setFirstSection] = useState({
    profileImage:
      "https://th.bing.com/th/id/OIP.i-6Q6jGPpFFvD5aC6pojrwHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    name: "dharmik patel",
    designation: "a",
    company: "b",
    intro: "hello world",
    objectives: ["Raise Funding"],
    roles: ["Founder"],
    industries: ["Edutech"],
    location: "",
    email: "dharmik7458@gmail.com",
    phone: "9723361679",
    newMatch: "Every Week",
    AccountStatus: "Active",
    wappNotification: "",
  });
  const [updateCover, setUpdateCover] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [updater, setUpdater] = useState(0);

  const [profileData, setProfileData] = useState({ profileImage: undefined });
  const [profileUrl, setProfileUrl] = useState();
  const imageInputRef = useRef();
  useEffect(() => {
    setUpdatedData({
      PreferredIndustries: firstSection.industries,
      PreferredSkills: firstSection?.roles,
      
    });
  }, []);
  const [updatedData, setUpdatedData] = useState({});
  useEffect(() => {
    if (profileData.profileImage) {
      setProfileUrl(URL.createObjectURL(profileData.profileImage));
    }
  }, [profileData.profileImage]);

  const industryChanger = (element) => {
    if (updatedData?.PreferredIndustries?.includes(element)) {
      setUpdatedData((data) => {
        return {
          ...data,
          industries: data.PreferredIndustries.filter(
            (value) => value !== element
          ),
        };
      });
    } else {
      setUpdatedData((data) => {
        return {
          ...data,
          industries: [...data?.PreferredIndustries, element],
        };
      });
    }
  };
  const skillsChanger = (element) => {
    if (updatedData.PreferredSkills.includes(element)) {
      setUpdatedData((data) => {
        return {
          ...data,
          roles: data.PreferredSkills.filter((value) => value !== element),
        };
      });
    } else {
      setUpdatedData((data) => {
        return {
          ...data,
          roles: [...data.PreferredSkills, element],
        };
      });
    }
  };
  const locationChanger = (e) => {
    setFirstSection((data) => {
      return {
        ...data,
        location: e.target.value,
      };
    });
    setUpdatedData((data) => {
      console.log(e.target.value);
      return { ...data, city: e.target.value };
    });
  };
  return (
    <>
      {updateCover === 1 && (
        <div
          className="positionCover"
          style={{
            display: updateCover === 1 ? "grid" : "none",
          }}
        >
          <div
            className="updateCover"
            style={{
              "--opacity": opacity,
            }}
          >
            <div className="updateContainer">
              <i
                className="closeButton fa-solid fa-xmark"
                onClick={() => {
                  setOpacity(0);
                  setUpdater(0);
                  setTimeout(() => {
                    setUpdateCover(0);
                  }, [200]);
                }}
              ></i>
              {updater === 1 && (
                <>
                  <h3 className="updaterTitle">Change Password</h3>
                  <div className="inputContainer">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      placeholder=" **********"
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder=" **********"
                    />
                  </div>
                  <button className="submitButton">Submit</button>
                </>
              )}
              {updater === 2 && (
                <>
                  <h3 className="updaterTitle">Change Intro</h3>
                  <textarea
                    name="changeIntro"
                    id=""
                    cols="60"
                    rows="6"
                    value={firstSection.intro}
                    onChange={(e) => {
                      setFirstSection((data) => {
                        return { ...data, intro: e.target.value };
                      });
                      setUpdatedData((data) => {
                        return { ...data, description: e.target.value };
                      });
                    }}
                  ></textarea>
                  <button className="submitButton">Submit</button>
                </>
              )}
              {updater === 3 && (
                <>
                  <div className="overflowContainer">
                    <h3 className="updaterTitle">I would like to meet</h3>
                    <h5>
                      Let us know the kind of members you would be interested to
                      meet
                    </h5>
                    <h4>Members from which industry?</h4>
                    <div className="selectionBox">
                      {Object.keys(industries).map((element) => {
                        return Object.keys(industries[element]).map(
                          (subElement) => {
                            return updatedData.PreferredIndustries?.includes(
                              subElement
                            ) ? (
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
                          }
                        );
                      })}
                    </div>
                    <h4>Members from which skills?</h4>
                    <div className="selectionBox">
                      {Object.keys(roles).map((element) => {
                        return Object.keys(roles[element]).map((subElement) => {
                          return updatedData?.PreferredSkills?.includes(
                            subElement
                          ) ? (
                            <div
                              className="option highlighted"
                              key={subElement}
                              onClick={() => {
                                skillsChanger(subElement);
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
                                skillsChanger(subElement);
                              }}
                            >
                              <i className="fa-solid fa-check"></i>
                              {subElement}
                            </div>
                          );
                        });
                      })}
                    </div>
                    <button className="submitButton">Submit</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <div className="mainTitle">Your Profile</div>
      <div className="profileMainCover">
        <div className="leftSection">
          <div className="first">
            <div className="internalDiv">
              <div
                className="profileImage"
                onClick={() => {
                  imageInputRef.current.click();
                }}
              >
                <i className="fa-solid fa-pen"></i>
                <input
                  type="file"
                  name="profileImage"
                  onChange={(e) => {
                    console.log(e.target.files);
                    setProfileData((data) => {
                      return { ...data, profileImage: e.target.files[0] };
                    });
                  }}
                  ref={imageInputRef}
                  style={{ display: "none" }}
                />
                {profileUrl ? (
                  <img src={profileUrl} alt="" />
                ) : (
                  <img src={firstSection.profileImage} alt="" />
                )}
              </div>
              <div className="internalTitle">{firstSection.name}</div>
              <div className="work">
                {firstSection.designation} at {firstSection.company}
              </div>
              <button
                className="changePassword"
                onClick={() => {
                  setUpdateCover(1);
                  setTimeout(() => {
                    setOpacity(1);
                    setUpdater(1);
                  });
                }}
              >
                Change Password
              </button>
              <div className="bottomSection">
                <div className="intro">
                  <div className="content">{firstSection.intro}</div>
                  <i
                    className="fa-solid fa-pen"
                    onClick={() => {
                      setUpdateCover(1);
                      setTimeout(() => {
                        setOpacity(1);
                        setUpdater(2);
                      });
                    }}
                  ></i>
                </div>
                <div className="objectivesCover">
                  {firstSection.objectives.map((element, index) => {
                    return (
                      <div key={index} className="objective">
                        {element}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="header">
              <i className="fa-solid fa-clock-rotate-left"></i>I would like to
              meet
            </div>
            <div className="internalDiv">
              <div className="internalTitle">Roles</div>
              <div className="content">
                {firstSection.roles.map((element, index) => {
                  return (
                    <div key={index} className="items">
                      {element}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="internalDiv">
              <div className="internalTitle">Industries</div>
              <div className="content">
                {firstSection.industries.map((element, index) => {
                  return (
                    <div key={index} className="items">
                      {element}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="buttonSection">
              <button
                className="Button"
                onClick={() => {
                  setUpdateCover(1);
                  setUpdatedData({
                    industries: firstSection.industries,
                    roles: firstSection.roles,
                  });
                  setTimeout(() => {
                    setOpacity(1);
                    setUpdater(3);
                  });
                }}
              >
                Change Preferences
              </button>
            </div>
          </div>
          <div className="third">
            <div className="internalDiv">
              <div className="internalTitle">Know your Networking Persona</div>
              <div className="infoText">
                Answer 5 simple questions to know your <b>networking persona</b>
                , <b>best tips</b> for your
                <b> persona type, top roles & sectors</b> who share your persona
                type & more.
              </div>
              <div className="Button">Know your Persona Type</div>
              <img src={graphImage} alt="" />
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="rightInternal">
            <div className="internalDiv">
              <div className="internalTitle">Profile Info</div>
              <div className="inputSection">
                <div className="input">
                  <label htmlFor="accountDesignation">Designation</label>
                  <input
                    type="text"
                    id="accountDesignation"
                    name="designation"
                    value={firstSection.designation}
                    onChange={(e) => {
                      setFirstSection((data) => {
                        return { ...data, designation: e.target.value };
                      });
                      setUpdatedData((data) => {
                        return { ...data, designation: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="input">
                  <label htmlFor="accountCompany">Company</label>
                  <input
                    type="text"
                    id="accountCompany"
                    name="company"
                    value={firstSection.company}
                    onChange={(e) => {
                      setFirstSection((data) => {
                        return { ...data, company: e.target.value };
                      });
                      setUpdatedData((data) => {
                        return { ...data, company: e.target.value };
                      });
                    }}
                  />
                </div>
                <button className="Button">Update</button>
              </div>

              <div className="inputSection">
                <div className="input">
                  Location{" "}
                  <LocationSelect
                    value={firstSection.location}
                    change={locationChanger}
                  />
                </div>
                <button className="Button">Update</button>
              </div>
            </div>
            <div className="internalDiv">
              <div className="internalTitle">Contact Info</div>
              <div className="inputSection">
                <div className="input">
                  <label htmlFor="accountEmail">Email</label>
                  <input
                    type="text"
                    id="accountEmail"
                    name="email"
                    value={firstSection.email}
                    onChange={(e) => {
                      setFirstSection((data) => {
                        return { ...data, email: e.target.value };
                      });
                      setUpdatedData((data) => {
                        return { ...data, email: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="input">
                  <label htmlFor="accountPhone">Phone</label>
                  <input
                    type="number"
                    id="accountPhone"
                    name="phone"
                    value={firstSection.phone}
                    onChange={(e) => {
                      setFirstSection((data) => {
                        return { ...data, phone: e.target.value };
                      });
                      setUpdatedData((data) => {
                        return { ...data, mobile: e.target.value };
                      });
                    }}
                  />
                </div>
                <button className="Button">Update</button>
              </div>
            </div>
            <div className="internalDiv">
              <div className="internalTitle">
                <div className="inlineContainer">
                  New Match :
                  <div className="highlighteOrange">
                    {firstSection.newMatch}
                  </div>
                  <button className="Button">Change</button>
                </div>
              </div>
            </div>
            <div className="internalDiv">
              <div className="internalTitle">
                <div className="inlineContainer">
                  Account Status :
                  <div className="highlighteOrange">
                    {firstSection.AccountStatus}
                  </div>
                </div>
                <div className="grayBoldFont">
                  our account is active and you will receive weekly matches.
                </div>
                <div className="grayNormalFont">
                  Too busy to connect this week? Snooze account to disable new
                  introductions.
                </div>
                <button className="snoozeButton">Snooze</button>
              </div>
            </div>
            <Link className="deleteAccount">delete Account</Link>
            <Link className="deleteAccount" style={{ marginLeft: "10px" }}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
