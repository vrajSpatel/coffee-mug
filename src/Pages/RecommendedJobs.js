import React, { useContext, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import apiContext from "../Context/apiContext";
import { useSearchParams } from "react-router-dom";

const RecommendedJobs = () => {
  var [searchParams] = useSearchParams();
  const {
    recommendedJobsFilter,
    setRecommendedJobsFilter,
    roles,
    setRoles,
    industries,
    setIndustries,
  } = useContext(apiContext);
  useEffect(() => {
    console.log(recommendedJobsFilter);
  }, [recommendedJobsFilter]);

  return (
    <>
      <Navbar />
      <div className="mainTitle">Recommended Jobs</div>
      <div className="mainjobsWindow">
        <div className="jobsFilters">filters</div>
        <div className="jobsPosts">
          <div className="jobsPost">post</div>
          <div className="jobsPost">post</div>
          <div className="jobsPost">post</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecommendedJobs;
