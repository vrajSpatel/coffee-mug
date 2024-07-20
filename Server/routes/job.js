const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Jobs = require("../Models/Jobs");
const User = require("../Models/User");

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
        $match: {
          $or: [
            { Role: { $in: Roles } },
            { PreferredIndustries: { $in: Industries } },
            { Seniority: { $in: Seniority } },
            { city: Location },
            { MinExp: { $lt: minExp } },
            { MaxExp: { $gt: MaxExp } },
          ],
        },
      },

      {
        $lookup: {
          from: "userdatas",
          localField: "email",
          foreignField: "email",
          as: "profiledetails",
        },
      },
      {
        $addFields: {
          profiledetails: {
            $arrayElemAt: ["$profiledetails", 0],
          },
        },
      },
      {
        $project: {
          email: 1,
          Role: 1,
          Seniority: 1,
          Name: 1,
          Stage: 1,
          MinExp: 1,
          MaxExp: 1,
          PreferredSkills: 1,
          PreferredIndustries: 1,
          jobDescription: 1,
          city: 1,
          remoteLocation: 1,
          opportunityVisibility: 1,

          "profiledetails.firstName": 1,
          "profiledetails.lastName": 1,
          "profiledetails.email": 1,
          "profiledetails.profileImage": 1,
          "profiledetails.designation": 1,
          "profiledetails.company": 1,
        },
      },
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

router.post("/fetchfeed", fetchuser, async (req, res) => {
  try {
    const email = req.user.email;

    var result = await User.findOne({ email });
    console.log(result);

    var result2 = await User.aggregate([
      {
        $match: {
          $and: [
            { objectives: { $in: result.objectives } },
            { email: { $ne: email } },
          ],
        },
      },
    ]);

    res.send(result2);
  } catch (error) {
    res.send(error);
  }
});
router.post("/investorlist", async (req, res) => {
  try {
    const { Roles, Industries, Seniority, Location } = req.body;

    var finded;
    if (
      Roles.length === 0 &&
      Industries.length === 0 &&
      Seniority.length === 0 &&
      Location === ""
    ) {
      finded = await User.find();
    } else {
      finded = await User.aggregate([
        {
          $match: {
            $or: [
              { roles: { $in: Roles } },
              { industries: { $in: Industries } },
              { seniority: Seniority },
              { city: Location },
            ],
          },
        },
      ]);
    }
    res.json(finded);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

module.exports = router;
