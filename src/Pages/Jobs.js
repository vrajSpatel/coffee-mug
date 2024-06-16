import React, { useContext, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import LocationSelect from "../Component/LocationSelect";
import { Link, createSearchParams } from "react-router-dom";
import "./css/Jobs.css";
import apiContext from "../Context/apiContext";

//images Imports
import marketingImg from "../assests/jobs_Marketing.png";
import salesImg from "../assests/jobs_sale.png";
import technologyImg from "../assests/jobs_Technology.png";
import HRImg from "../assests/jobs_Technology.png";
import financeImg from "../assests/jobs_Finance.png";
import itOpImg from "../assests/jobs_Operations.png";
import uiuxImg from "../assests/jobs_ui_ux.png";
import strategyImg from "../assests/jobs_Strategy.png";
import aimlImg from "../assests/jobs_ai_ml.png";
import analyticsImg from "../assests/jobs_analytics.png";
import growthImg from "../assests/jobs_growth.png";
import ecommerceIndustry from "../assests/industry_ecommerce.png";
import b2bIndustry from "../assests/industry_b2b.png";
import internetIndustry from "../assests/industry_Internet.png";
import edutechIndustry from "../assests/industry_edtech.png";
import sustainabilityIndustry from "../assests/industry_Sustainability.png";
import energyIndustry from "../assests/industry_Energy.png";
import brandAmazon from "../assests/brand_amazon-logo.png";
import brandCMS from "../assests/brand_cms.png";
import brandDealshare from "../assests/brand_dealshare-logo.png";
import brandGraphy from "../assests/brand_graphy-logo.png";
import brandHyperTruck from "../assests/brand_hypertrack-logo.png";
import brandIncubate from "../assests/brand_incubatehub.png";
import brandMeesho from "../assests/brand_meesho-logo.png";
import brandOlx from "../assests/brand_olx-logo.png";
import brandPagarBook from "../assests/brand_pagerbook-logo.png";
import brandSapient from "../assests/brand_sapient.png";
import brandShipRocket from "../assests/brand_shiprocket-logo.png";
import brandSwiggy from "../assests/brand_swiggy-logo.png";
import brandTalentBox from "../assests/brand_talentbox.png";
import brandTCom from "../assests/brand_tcm-1.png";
import brandUnchaAi from "../assests/brand_unchaai-logo.png";
import hireTalentImg from "../assests/section_hire_talent.png";
import jobsBottomHIW from "../assests/jobsBottom_hiw.png";

const Jobs = () => {
  const { setRecommendedJobsFilter } = useContext(apiContext);
  const [brands] = useState([
    { keyword: "Amazon", img: brandAmazon },
    { keyword: "CMS", img: brandCMS },
    { keyword: "DealShare", img: brandDealshare },
    { keyword: "Graphy", img: brandGraphy },
    { keyword: "HyperTruck", img: brandHyperTruck },
    { keyword: "Incubate", img: brandIncubate },
    { keyword: "Meesho", img: brandMeesho },
    { keyword: "Olx", img: brandOlx },
    { keyword: "PagarBook", img: brandPagarBook },
    { keyword: "Sapient", img: brandSapient },
    { keyword: "ShipRocket", img: brandShipRocket },
    { keyword: "Swiggy", img: brandSwiggy },
    { keyword: "TalentBox", img: brandTalentBox },
    { keyword: "Tata Communication", img: brandTCom },
    { keyword: "Uncha AI", img: brandUnchaAi },
  ]);

  const [firstRowRoles] = useState([
    {
      value: "Marketing",
      keyword: "Advertising / Marketing",
      img: marketingImg,
    },
    { value: "Sales", keyword: "Sales/Revenue/BD", img: "salesImg" },
    { value: "Technology", keyword: "Technology", img: technologyImg },
    { value: "HR", keyword: "HR", img: HRImg },
    { value: "Finance", keyword: "Finance", img: financeImg },
    { value: "IT Operations", keyword: "IT Operations", img: itOpImg },
  ]);
  const [secondRowRoles] = useState([
    { value: "UI/UX", keyword: "UI / UX", img: uiuxImg },
    { value: "Strategy", keyword: "Strategy", img: strategyImg },
    { value: "AI/ML", keyword: "big data / AI / ML", img: aimlImg },
    { value: "Analytics", keyword: "Analytics / BI", img: analyticsImg },
    { value: "Growth", keyword: "Growth / Digital Marketing", img: growthImg },
  ]);

  const [industries] = useState([
    { value: "E-commerce", keyword: "E-commerce", img: ecommerceIndustry },
    { value: "B2B Tech", keyword: "B2B Tech", img: b2bIndustry },
    { value: "Internet", keyword: "Consumer Internet", img: internetIndustry },
    { value: "Edutech", keyword: "Edutech", img: edutechIndustry },
    {
      value: "Sustainability",
      keyword: "Sustainability",
      img: sustainabilityIndustry,
    },
    { value: "Energy", keyword: "Energy", img: energyIndustry },
  ]);

  const changeJobRoleFilters = (role) => {
    setRecommendedJobsFilter({
      keyword: "",
      Roles: [role],
      Industries: [],
      Seniority: [],
      minExp: "",
      MaxExp: "",
      Location: [],
    });
  };
  const changeJobIndustryFilters = (industry) => {
    setRecommendedJobsFilter({
      keyword: "",
      Roles: [],
      Industries: [industry],
      Seniority: [],
      minExp: "",
      MaxExp: "",
      Location: [],
    });
  };

  const changeJobKeywordFilters = (keyword) => {
    setRecommendedJobsFilter({
      keyword: keyword,
      Roles: [],
      Industries: [],
      Seniority: [],
      minExp: "",
      MaxExp: "",
      Location: [],
    });
  };
  return (
    <>
      <Navbar />
      <div className="jobsCoverMain">
        <div className="jobsTitle">Find Your Dream Job</div>
        <div className="searchBox">
          <div className="whatCover">
            <span>What</span>
            <input
              type="text"
              className="whatInput"
              placeholder="Roles, Skills, Industry"
              name="serachText"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="experienceCover">
            <span>Experience</span>
            <select
              name="minYears"
              className="experienceSelect"
              defaultValue={false}
            >
              <option value={false}>Min Years</option>

              <option value="0">0 Years</option>
              <option value="1">1 Years</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5 Years</option>
            </select>
            <select
              name="maxYears"
              className="experienceSelect"
              defaultValue={false}
            >
              <option value={false}>Max Years</option>
              <option value="0">1 Years</option>
              <option value="1">1 Years</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5 Years</option>
            </select>
          </div>
          <div className="locationCover">
            <span>Location</span>
            <LocationSelect />
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="searchButton">
            <Link
              to="/recommended-jobs"
              onClick={() => {
                console.log("hello world");
              }}
            >
              Search Jobs
            </Link>
          </div>
        </div>
        <div className="topRoles">
          <div className="firstRow">
            {firstRowRoles.map((element) => {
              return (
                <Link
                  to="/recommended-jobs"
                  onClick={() => {
                    changeJobRoleFilters(element.keyword);
                  }}
                  className="marketing"
                >
                  <img src={element.img} alt="" />
                  {element.value}
                  <i className="fa-solid fa-chevron-right"></i>
                </Link>
              );
            })}
          </div>
          <div className="secondRow">
            {secondRowRoles.map((element) => {
              return (
                <Link
                  to="/recommended-jobs"
                  onClick={() => {
                    changeJobRoleFilters(element.keyword);
                  }}
                  className={element.keyword}
                >
                  <img src={element.img} alt="" />
                  {element.value}
                  <i className="fa-solid fa-chevron-right"></i>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="registerNowNotice">
          <Link>Register Now</Link> - It only takes a few seconds
        </div>
        <div className="postAJobNotice">
          <Link>Employers: Post a job</Link> - Your next hire is here
        </div>
        <div className="jobsByIndustriesCover">
          <div className="title">Jobs By Industry</div>
          <div className="industriesCover">
            <div className="industriesMain">
              {industries.map((element) => {
                return (
                  <Link
                    className="industry"
                    to="/recommended-jobs"
                    onClick={() => {
                      changeJobIndustryFilters(element.keyword);
                    }}
                  >
                    <img src={element.img} alt="" />
                    {element.value}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="jobsByBrandsMain">
          <div className="titleCover">
            <div className="title">Jobs from 30,000+ Startups/Brands</div>
            <Link to="/recommended-jobs">View All Jobs</Link>
          </div>
          <div className="companiesGrid">
            {brands.map((element, index) => {
              return index % 2 === 0 ? (
                <Link
                  className="darkBG"
                  key={element.keyword}
                  to="/recommended-jobs"
                  onClick={() => {
                    changeJobKeywordFilters(element.keyword);
                  }}
                >
                  <img src={element.img} alt="" />
                </Link>
              ) : (
                <Link
                  className="lightBG"
                  key={element.keyword}
                  to="/recommended-jobs"
                  onClick={() => {
                    changeJobKeywordFilters(element.keyword);
                  }}
                >
                  <img src={element.img} alt="" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hireTalentMain">
          <img src={hireTalentImg} alt="" />
          <div className="midSection">
            <div className="header">Looking to hire talent?</div>
            <div className="content">
              Find the best talent from over 5,00,000+ Senior Professionals from
              top Companies
            </div>
            <Link to="/post-a-job" className="postJobButton">
              Post a Job FREE <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
          <div className="buttonSection">
            <Link to="/post-a-job">Post a job FREE</Link>
            <div className="comment">It will only take seconds</div>
          </div>
        </div>
        <div className="howItWorksSection">
          <div className="showcaseMain">
            <div className="header">Top Jobs & Top Talent</div>
            <div className="title">How Coffeemug Jobs Works</div>
            <img src={jobsBottomHIW} alt="" />
          </div>
          <Link className="talentMain" to="/post-a-job">
            <span>
              <div className="title">For Hiring Talent:</div>
              <div className="points">
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>Submit a Job Opportunity</span>
                </div>
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>View Relevant Profiles</span>
                </div>
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>Express Interest in relevant profiles</span>
                </div>
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>
                    Receive relevant profiles of members who are interested
                  </span>
                </div>
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>Have a CoffeeMug meeting with the ones you like</span>
                </div>
              </div>
            </span>
            <div className="footer">Post a Job</div>
          </Link>
          <Link className="talentMain" to="/recommended-jobs">
            <span>
              <div className="title">For Career Opportunities:</div>
              <div className="points">
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>Explore Job Opportunities</span>
                </div>
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>Find Relevant Jobs</span>
                </div>
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>Express Interest in jobs of your choice</span>
                </div>
                <div className="point">
                  <i className="fa-solid fa-check"></i>
                  <span>
                    If it's a match, the Job owner will connect for a meeting
                  </span>
                </div>
              </div>
            </span>
            <div className="footer">Find a Job</div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
