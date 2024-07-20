const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const Authenticate = require("../Models/authentication");
const jwt = require("jsonwebtoken");
const fetchuser = require("../Middleware/fetchuser");
var bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");

const jwt_secret = "hellooo@";

const { body, validationResult } = require("express-validator");

//multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Server/profileImages");
  },
  filename: function (req, file, cb) {
    const randomNumber = Math.floor(Math.random() * 999999) + 1;
    const originalname = file.originalname;
    const extension = originalname.split(".").pop();
    const newFilename = `${randomNumber}_${originalname}`;
    cb(null, newFilename);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
}).single("profileImage");

// route 1 : CREATE  a user using : POST "api/auth/createuser"  (no login required)
router.post("/createUser", async (req, res) => {
  try {
    const { roles, objectives, industries, email } = req.body;

    if (
      roles.length === 0 ||
      objectives.length === 0 ||
      industries.length === 0
    ) {
      res.status(400).json({ error: "plese select preferences" });
      return;
    }

    // we check here that email that user send is exist in database or not
    let auth = await User.findOne({ email: req.body.email });
    if (auth) {
      return res
        .status(400)
        .json({ error: "email you write is already exist" });
    }

    //password encryption
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      //storing data to the database
      email: email,
      roles,
      industries,
      objectives,
    });

    auth = await Authenticate.create({
      email: req.body.email,
      password: secpass,
    });

    const data = {
      email: req.body.email,
    };
    const auth_token = jwt.sign(data, jwt_secret);
    res.json({ auth_token, processProfile: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "some error occure while creating user" });
  }
});

// route 2 : Authenticate the user using : POST "api/auth/login"  (no login required)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let auth = await Authenticate.findOne({ email });
    if (!auth) {
      return res.status(400).json({ error: "user doesnot exist" });
    }

    let passcompare = await bcrypt.compare(password, auth.password);
    if (!passcompare) {
      return res.status(400).json({ error: "password is not correct" });
    }

    const data = {
      email: req.body.email,
    };
    const auth_token = jwt.sign(data, jwt_secret);
    res.json({ auth_token });
  } catch (error) {
    console.error(error.errmsg);
    res.status(500).send("some error occured while login");
  }
});

router.post("/getUserData", fetchuser, async (req, res) => {
  try {
    const useremail = req.user.email;
    const user = await User.find({ email: useremail });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("some error occured from getuser");
  }
});

// route 4 : setup user profile after signup
router.post("/setupProfile", fetchuser, async (req, res) => {
  try {
    const userEmail = await req.user.email;
    const {
      firstName,
      lastName,
      designation,
      company,
      city,
      mobile,
      desciption,
    } = req.body;
    const user1 = await User.updateOne(
      { email: userEmail },
      {
        firstName,
        lastName,
        designation,
        company,
        city,
        mobile,
        desciption,
      }
    );
    if (user1.matchedCount === 1) {
      res.json({ success: "Profile data inserted successfully!" });
    } else {
      res.json({ error: "user not found! please signup again." });
    }
  } catch (error) {
    console.log(error.errmsg);
    res.status(500).send("some error occured from setupProfile");
  }
});
router.post("/updateUserDetails", fetchuser, async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        const profileImage = req.file?.filename;
        const Useremail = req.user.email;
        var {
          firstName,
          lastName,
          description,
          roles,
          industries,
          objectives,
          designation,
          company,
          city,
          email,
          mobile,
        } = req.body;
        roles = roles ? JSON.parse(roles) : null;
        industries = industries ? JSON.parse(industries) : null;
        objectives = objectives ? JSON.parse(objectives) : null;

        const result = await User.updateOne(
          { email: Useremail },
          {
            profileImage: profileImage ? profileImage : undefined,
            description: description ? description : undefined,
            roles: roles ? roles : undefined,
            industries: industries ? industries : undefined,
            objectives: objectives ? objectives : undefined,
            designation: designation ? designation : undefined,
            company: company ? company : undefined,
            city: city ? city : undefined,
            email: email ? email : undefined,
            mobile: mobile ? mobile : undefined,
            firstName: firstName ? firstName : undefined,
            lastName: lastName ? lastName : undefined,
          }
        );
        res.json(result);
        return;
      } catch (error) {
        console.error(error);
        res.status(500).send("some error occured from getuser");
      }
    }
  });
});

module.exports = router;
