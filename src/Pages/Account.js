import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "./css/Account.css";
import graphImage from "../assests/graph-question.png";
import LocationSelect from "../Component/LocationSelect";
import { Link } from "react-router-dom";
import apiContext from "../Context/apiContext";
const Account = () => {
  const {
    roles,
    industries,
    updateUserDetailsAPI,
    fetchUserDetailsAPI,
    auth_token,
    profileImageFolderUrl,
  } = useContext(apiContext);
  const [updateCover, setUpdateCover] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [updater, setUpdater] = useState(0);

  //userdata states
  const [firstSection, setFirstSection] = useState({
    profileImage: "",
    name: "",
    designation: "",
    company: "",
    description: "",
    objectives: [],
    roles: [],
    industries: [],
    city: "",
    email: "",
    mobile: "",
    newMatch: "",
    AccountStatus: "",
    wappNotification: "",
  });
  const [profileUrl, setProfileUrl] = useState();
  const imageInputRef = useRef();
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    if (auth_token.current !== "") {
      const func = async () => {
        var res = await fetchUserDetailsAPI();
        setFirstSection(res);
      };
      func();
    }
  }, [auth_token]);

  useEffect(() => {
    if (updatedData.profileImage) {
      setProfileUrl(URL.createObjectURL(updatedData.profileImage));
    }
  }, [updatedData.profileImage]);

  const profileUpdater = async () => {
    const result = await updateUserDetailsAPI(updatedData);

    if (result.acknowledged) {
      setFirstSection((data) => {
        return { ...data, ...updatedData };
      });
      setUpdatedData({});
    }
  };

  //animation states

  const industryChanger = (element) => {
    if (updatedData?.industries?.includes(element)) {
      setUpdatedData((data) => {
        return {
          ...data,
          industries: data.industries.filter((value) => value !== element),
        };
      });
    } else {
      setUpdatedData((data) => {
        return {
          ...data,
          industries: [...data.industries, element],
        };
      });
    }
  };
  const skillsChanger = (element) => {
    if (updatedData.roles.includes(element)) {
      setUpdatedData((data) => {
        return {
          ...data,
          roles: data.roles.filter((value) => value !== element),
        };
      });
    } else {
      setUpdatedData((data) => {
        return {
          ...data,
          roles: [...data.roles, element],
        };
      });
    }
  };
  const locationChanger = (e) => {
    setFirstSection((data) => {
      return {
        ...data,
        city: e.target.value,
      };
    });
    setUpdatedData((data) => {
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
                    value={firstSection?.description}
                    onChange={(e) => {
                      setFirstSection((data) => {
                        return { ...data, description: e.target.value };
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
                            return updatedData.industries?.includes(
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
                          return updatedData?.roles?.includes(subElement) ? (
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
      {Object.keys(updatedData).length !== 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            margin: "1rem 0",
            padding: "0 12%",
          }}
        >
          <button className="changePassword" onClick={profileUpdater}>
            Update Profile
          </button>
        </div>
      )}
      {firstSection && (
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
                      setUpdatedData((data) => {
                        return { ...data, profileImage: e.target.files[0] };
                      });
                    }}
                    ref={imageInputRef}
                    style={{ display: "none" }}
                  />
                  {profileUrl ? (
                    <img src={profileUrl} alt="" />
                  ) : (
                    <img
                      src={`${profileImageFolderUrl.current}${firstSection?.profileImage}`}
                      alt=""
                    />
                  )}
                </div>
                <div className="internalTitle">{firstSection?.name}</div>
                <div className="work">
                  {firstSection?.designation} at {firstSection?.company}
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
                    <div className="content">{firstSection?.description}</div>
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
                    {firstSection?.objectives.map((element, index) => {
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
                  {firstSection?.roles.map((element, index) => {
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
                  {firstSection?.industries.map((element, index) => {
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
                      industries: firstSection?.industries,
                      roles: firstSection?.roles,
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
                <div className="internalTitle">
                  Know your Networking Persona
                </div>
                <div className="infoText">
                  Answer 5 simple questions to know your{" "}
                  <b>networking persona</b>, <b>best tips</b> for your
                  <b> persona type, top roles & sectors</b> who share your
                  persona type & more.
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
                      value={firstSection?.designation}
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
                      value={firstSection?.company}
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
                      value={firstSection?.city}
                      change={locationChanger}
                      onChange={locationChanger}
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
                      value={firstSection?.email}
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
                      value={firstSection?.mobile}
                      onChange={(e) => {
                        setFirstSection((data) => {
                          return { ...data, mobile: e.target.value };
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
                      {firstSection?.newMatch}
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
                      {firstSection?.AccountStatus}
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
              <Link
                className="deleteAccount"
                style={{ marginLeft: "10px" }}
                to="/"
                onClick={() => {
                  document.cookie = `auth_token=`;
                  auth_token.current = "";
                }}
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Account;
