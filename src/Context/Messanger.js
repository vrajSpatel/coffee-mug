import React, { useEffect, useRef, useState } from "react";
import apiContext from "./apiContext";

const Messanger = ({ children, auth_token }) => {
  const url = "http://localhost:5000";

  const cookieSetter = (name, value) => {
    document.cookie = `${name}=${value};max-age=${3600 * 24 * 10}`;
  };
  const cookieFetcher = (name) => {
    var cookies = document.cookie.split(";");
    var cookieValue = "";
    cookies.map((element) => {
      element = element.split("=");
      if (element[0].slice(1) === name) {
        cookieValue = element[1];
      }
      return true;
    });
    return cookieValue;
  };

  useEffect(() => {
    auth_token.current = cookieFetcher("auth_token");
  }, []);

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  const [goals, setGoals] = useState({
    "Fundraising for my Startup": 0,
    "Invest in Startups": 0,
    "Find a Job": 0,
    "Hire Talent": 0,
    "Brainstorm Ideas": 0,
    "I don't have a specific Goal": 0,
  });
  const [roles, setRoles] = useState({
    Popular: {
      Founder: 0,
      "Investor / VC  ": 0,
      "Angel Investor": 0,
      "COO, CBO, CEO": 0,
      Technology: 0,
      "Growth / Digital Marketing": 0,
      Mentor: 0,
      Recruitment: 0,
      "big data / AI / ML": 0,
      "Sales / Revenue / BD": 0,
      Strategy: 0,
      HR: 0,
      "Advertising / Marketing": 0,
      "Supply chain": 0,
      Finance: 0,
      "Business operations": 0,
      "Investment Banker": 0,
      "Merchant banker": 0,
      "Leadership / Executive Coach": 0,
      "Mergers & Acquisition": 0,
    },
    "Business Functions": {
      "Advertising / Marketing": 0,
      "big data / AI / ML": 0,
      "Business operations": 0,
      "COO, CBO, CEO": 0,
      Finance: 0,
      "Growth / Digital Marketing": 0,
      HR: 0,
      "Human Resources": 0,
      International: 0,
      "Mergers & Acquisition": 0,
      Product: 0,
      Recruitment: 0,
      Research: 0,
      "Sales / Revenue / BD": 0,
      Strategy: 0,
      "Supply chain": 0,
      Technology: 0,
    },
    Design: {
      "Fashion Designer": 0,
      "Interior Designer / Decorator": 0,
    },
    Technology: {
      "big data / AI / ML": 0,
      Algorithms: 0,
      "Augmented Reality": 0,
      Cybersecurity: 0,
      "Dev Ops": 0,
      Drones: 0,
      "Game Development": 0,
      Hardware: 0,
      Innovator: 0,
      "IT Operations": 0,
      "Mobile Applications": 0,
      NLP: 0,
      QA: 0,
      Robotics: 0,
      "UI / UX": 0,
    },
    Finance: {
      Admin: 0,
      Audit: 0,
      Banking: 0,
      "Customer Service": 0,
      "Financial markets": 0,
      legal: 0,
      "Merchandising / Buying / Planning": 0,
      Outsourcing: 0,
      "Risk Management": 0,
      "Sourcing / Procurement": 0,
      Tax: 0,
      Training: 0,
      "Vendor Management": 0,
    },
    Investors: {
      "Angel Investor": 0,
      Founder: 0,
      "Investment Banker": 0,
      "Investor / VC": 0,
    },
    Marketing: {
      "Advertising / Marketing": 0,
      "Growth / Digital Marketing": 0,
      "Analytics / BI": 0,
      Content: 0,
      Events: 0,
      "Market Research": 0,
      "Media Professional": 0,
      PR: 0,
      SEO: 0,
      "Social Media": 0,
    },
    Mentorship: {
      "counsellors / therapists": 0,
      "fitness / spiritual / coach / nutritionist": 0,
      "Leadership / Executive Coach": 0,
      Mentor: 0,
    },
    Manufacturing: {
      "Civil Engineer / Architect": 0,
      "Manufacturing Engineer": 0,
    },
    Others: {
      "Actor / Creative Arts": 0,
      "Biologist / Zoologist / oceanographers": 0,
      Consultant: 0,
      "doctor / specialist": 0,
      "Editor / Director / Producer": 0,
      Entertainment: 0,
      "Govt. Policy": 0,
      "Journalist / News Anchor": 0,
      Pharmaceuticals: 0,
    },
  });
  const [industries, setIndustries] = useState({
    "Popular Industries": {
      "Consumer Internet": 0,
      "Investor/VC": 0,
      "Big data/AI/IOT/ Robotics": 0,
      Fintech: 0,
      "B2B Tech": 0,
      Recruitment: 0,
      Healthtech: 0,
      "E-commerce": 0,
      Edutech: 0,
      Adtech: 0,
    },
    "All Industries": {
      "Advertising/Digital Marketing": 0,
      Agritech: 0,
      Automotive: 0,
      "B2B Services": 0,
      Construction: 0,
      Consulting: 0,
      "Consumer Goods/CPG": 0,
      "Content Production": 0,
      Education: 0,
      Electronics: 0,
      Energy: 0,
      Entertainment: 0,
      "F&B": 0,
      FMCG: 0,
      "Fashion & Beauty": 0,
      "Financial Services": 0,
      Gaming: 0,
      "Healthcare/Pharma": 0,
      "Hospitality/Travel": 0,
      "Legal Services": 0,
      "Matrimony/Dating": 0,
      Media: 0,
      "Real estate": 0,
      Retail: 0,
      "Social Impact": 0,
      "Software Development": 0,
      Sports: 0,
      "Supply Chain/Logistics": 0,
      Sustainability: 0,
      Telecom: 0,
    },
  });
  const [recommendedJobsFilter, setRecommendedJobsFilter] = useState({
    keyword: "",
    Roles: [],
    Industries: [],
    Seniority: [],
    minExp: "",
    MaxExp: "",
    Location: "",
  });

  const [skills, setSkills] = useState({
    "Database Triggers": 0,
    "Salesforce.com Administration": 0,
    "Web Chat": 0,
    Architects: 0,
    Quotas: 0,
    Email: 0,
    "Global Business Management": 0,
    "US Healthcare": 0,
    Attrition: 0,
    "Direct Search": 0,
    "Client Services": 0,
    "Android Testing": 0,
    SOQL: 0,
    "Customer Management": 0,
    "Custom Objects": 0,
    "Credit Rating": 0,
    Zoho: 0,
    "Database Management System (DBMS)": 0,
    "Apex Programming": 0,
    "Customer Service Management": 0,
  });

  const [jobs, setJobs] = useState([
    {
      Role: "ai/ml",
      Seniority: "mid",
      Name: "dk",
      Stage: "none",
      MinExp: "1",
      MaxExp: "5",
      time: "100d ago",
      PreferredSkills: ["muthi"],
      PreferredIndustries: ["phub", "hello"],
      jobDescription: "nothing",
      city: "vadodara",
      remoteLocation: true,
      FoundingYear: "1998",
      profiledetails: {
        profileImage:
          "https://th.bing.com/th/id/OIP.PYipJ_hSncugM2SwnZitvgHaEK?w =284&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        email: "DP4@gmail.com",
        company: "b",
        designation: "aaaa  ",
        firstName: "dharmik",
        lastName: "patel",
      },
    },
  ]);
  const selector1degree = (obj) => {
    var arr = [];
    Object.keys(obj).map((element) => {
      if (obj[element] === 1) {
        arr.push(element);
      } else {
        return true;
      }
      return true;
    });
    return arr;
  };
  const selector2degree = (obj) => {
    var arr = [];
    Object.keys(obj).map((element) => {
      Object.keys(obj[element]).map((subElement) => {
        if (obj[element][subElement] === 1) {
          arr.push(subElement);
        } else {
          return true;
        }
        return true;
      });
      return true;
    });
    return arr;
  };
  
  const signupAPI = async (objectives, roles, industries, signupData) => {
    console.log(objectives);
    roles = selector2degree(roles);
    industries = selector2degree(industries);
    objectives = selector1degree(objectives);
    console.log(roles, industries, objectives);
    var result = await fetch(`${url}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roles,
        industries,
        objectives,
        ...signupData,
      }),
    });
    result = await result.json();
    auth_token.current = result.auth_token;
    cookieSetter("auth_token", result.auth_token);
    return result;
  };

  const signinAPI = async (email, password) => {
    var result = await fetch(`${url}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    result = await result.json();
    auth_token.current = result.auth_token;
    cookieSetter("auth_token", result.auth_token);
    return result;
  };

  const postJobAPI = async (jobData) => {
    var result = await fetch(`${url}/api/jobs/postjob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth_token: auth_token.current,
      },
      body: JSON.stringify({
        Role: jobData.Role,
        Seniority: jobData.Seniority,
        Name: jobData.Name,
        Stage: jobData.Stage,
        MinExp: Number(jobData.MinExp),
        MaxExp: Number(jobData.MaxExp),
        PreferredSkills: jobData.PreferredSkills,
        PreferredIndustries: jobData.PreferredIndustries,
        jobDescription: jobData.jobDescription,
        city: jobData.city,
        remoteLocation: jobData.remoteLocation,
        opportunityVisibility: jobData.opportunityVisibility,
      }),
    });
    result = await result.json();
    console.log(result);
    return result;
  };

  const fetchRecommendedJobsAPI = async (recommendedJobsFilter) => {
    var result = await fetch(`${url}/api/jobs/recommendedjobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recommendedJobsFilter),
    });
    result = await result.json();
    console.log(result);
    setJobs(result);
  };

  return (
    <apiContext.Provider
      value={{
        auth_token,
        cookieFetcher,
        signupData,
        setSignupData,
        goals,
        setGoals,
        roles,
        setRoles,
        industries,
        setIndustries,
        recommendedJobsFilter,
        setRecommendedJobsFilter,
        skills,
        setSkills,
        jobs,
        setJobs,
        signupAPI,
        signinAPI,
        fetchRecommendedJobsAPI,
        postJobAPI,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default Messanger;
