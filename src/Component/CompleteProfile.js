import React, { useState } from "react";
import LocationSelect from "./LocationSelect";

const CompleteProfile = ({ profileData, setProfileData }) => {
  

  const changeProfileData = (e) => {
    setProfileData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <div className="title">
        Complete your profile to view and connect with matches
      </div>
      {false && <div className="warning">you can select upto 10 Roles</div>}
      <div className="profileInfoMain">
        <div className="fullName">
          <div className="smallTitle">Full Name *</div>
          <div className="inputs">
            <input
              type="text"
              name="firstName"
              className="firstName"
              placeholder="First Name"
              value={profileData.firstName}
              onChange={changeProfileData}
            />
            <input
              type="text"
              name="lastName"
              className="lastName"
              placeholder="Last Name"
              value={profileData.lastName}
              onChange={changeProfileData}
            />
          </div>
        </div>
        <div className="workDetails">
          <div className="smallTitle">Work Details *</div>
          <div className="inputs">
            <input
              type="text"
              name="designation"
              className="designation"
              placeholder="designation"
              value={profileData.designation}
              onChange={changeProfileData}
            />
            <input
              type="text"
              name="company"
              className="company"
              placeholder="Company"
              value={profileData.company}
              onChange={changeProfileData}
            />
          </div>
        </div>
        <div className="cityDetails">
          <div className="smappTitle">City *</div>
          <div className="inputs">
            <LocationSelect
              value={profileData.city}
              change={changeProfileData}
            />
          </div>
        </div>
        <div className="mobileDetails">
          <div className="smallTitle">
            Mobile No. * (For asistance via Whatsapp)
          </div>
          <div className="inputs">
            <input
              type="number"
              name="mobile"
              className="mobile"
              placeholder="Mobile Number"
              value={profileData.mobile}
              onChange={changeProfileData}
            />
          </div>
        </div>
        <div className="descDetails">
          <div className="smallTitle">
            How would you describe yourself to other members?
          </div>
          <div className="inputs">
            <input
              type="text"
              name="description"
              className="description"
              placeholder="I am a..."
              value={profileData.description}
              onChange={changeProfileData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
