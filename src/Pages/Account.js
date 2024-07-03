import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "./css/Account.css";
import graphImage from "../assests/graph-question.png";
import LocationSelect from "../Component/LocationSelect";
import { Link } from "react-router-dom";
const Account = () => {
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
  return (
    <>
      <Navbar />
      <div className="mainTitle">Your Profile</div>
      <div className="profileMainCover">
        <div className="leftSection">
          <div className="first">
            <div className="internalDiv">
              <div className="profileImage">
                <img src={firstSection.profileImage} alt="" />
              </div>
              <div className="internalTitle">{firstSection.name}</div>
              <div className="work">
                {firstSection.designation} at {firstSection.company}
              </div>
              <button className="changePassword">Change Password</button>
              <div className="bottomSection">
                <div className="intro">
                  <div className="content">{firstSection.intro}</div>
                  <i className="fa-solid fa-pen"></i>
                </div>
                <div className="objectivesCover">
                  {firstSection.objectives.map((element) => {
                    return <div className="objective">{element}</div>;
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
                {firstSection.roles.map((element) => {
                  return <div className="items">{element}</div>;
                })}
              </div>
            </div>
            <div className="internalDiv">
              <div className="internalTitle">Industries</div>
              <div className="content">
                {firstSection.industries.map((element) => {
                  return <div className="items">{element}</div>;
                })}
              </div>
            </div>
            <div className="buttonSection">
              <button className="Button">Change Preferences</button>
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
                  />
                </div>
                <div className="input">
                  <label htmlFor="accountCompany">Company</label>
                  <input type="text" id="accountCompany" name="company" />
                </div>
                <button className="Button">Update</button>
              </div>

              <div className="inputSection">
                <div className="input">
                  Location <LocationSelect />
                </div>
                <button className="Button">Update</button>
              </div>
            </div>
            <div className="internalDiv">
              <div className="internalTitle">Contact Info</div>
              <div className="inputSection">
                <div className="input">
                  <label htmlFor="accountEmail">Email</label>
                  <input type="text" id="accountEmail" name="email" />
                </div>
                <div className="input">
                  <label htmlFor="accountPhone">Phone</label>
                  <input type="text" id="accountPhone" name="phone" />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
