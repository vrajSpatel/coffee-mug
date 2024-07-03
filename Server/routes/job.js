const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Jobs = require("../Models/Jobs");

//fetchuser
const fetchuser = require("../Middleware/fetchuser");

//signature for json web token
const jwt_secret = "hellooo@";

// express validator
const { body, validationResult } = require("express-validator");

//bcrypt
var bcrypt = require("bcryptjs");

router.post("/postjob", fetchuser, async (req, res) => {
  try {
    const {
      Role,
      Seniority,
      Name,
      Stage,
      MinExp,
      MaxExp,
      PreferredSkills,
      PreferredIndustries,
      jobDescription,
      city,
      remoteLocation,
      opportunityVisibility,
    } = req.body;

    const email = req.user.email;
    console.log(email);
    const job = await Jobs.create({
      //send data to database
      email,
      Role,
      Seniority,
      Name,
      Stage,
      MinExp,
      MaxExp,
      PreferredSkills,
      PreferredIndustries,
      jobDescription,
      city,
      remoteLocation,
      opportunityVisibility,
    });
    res.send(job);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

// fileter jobs
router.post("/recommendedjobs", async (req, res) => {
  try {
    const { Roles, Industries, Seniority, minExp, MaxExp, Location } = req.body;

    const finded = await Jobs.aggregate([
      {
       $match :{
        $or: [
          { Role: { $in: Roles } },
          { PreferredIndustries: { $in: Industries } },
          { Seniority: { $in: Seniority } },
          { city: Location },
          { MinExp: { $lt: minExp } },
          { MaxExp: { $gt: MaxExp } },
        ]
       }
      },

      {
        $lookup: {
          from: "userdatas",
          localField: "email",
          foreignField: "email",
          as: "profiledetails",
        },
      }

    ]);
    res.json(finded);
    // [{email},{email2},{}]
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

// get all post
router.post("/userjobpost", fetchuser, async (req, res) => {
  try {
    const email = req.user.email;

    const allPost = await Jobs.find({ email });
    res.json(allPost);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

module.exports = router;
