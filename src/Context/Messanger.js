import React, { useEffect, useState } from "react";
import apiContext from "./apiContext";


const Messanger = ({ children }) => {
  const url = "http://localhost:5000"

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
  // useEffect(() => {
  //   console.log(recommendedJobsFilter);
  // }, [recommendedJobsFilter]);

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


  const signup = async (roles,industries,objectives,email,password)=>{
    
    const result = await fetch(`${url}/api/auth/createuser`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        roles,industries,objectives,email,password
      })
    })

    console.log(result)

  }

  return (
    <apiContext.Provider
      value={{
        recommendedJobsFilter,
        setRecommendedJobsFilter,
        roles,
        setRoles,
        industries,
        setIndustries,
        skills,
        setSkills,
        signup,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default Messanger;
