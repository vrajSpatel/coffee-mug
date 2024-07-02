const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const Authenticate = require('../Models/authentication');
const jwt = require('jsonwebtoken')

//fetchuser
const fetchuser = require('../Middleware/fetchuser');

//signature for json web token
const jwt_secret = 'hellooo@';

// express validator
const { body, validationResult } = require('express-validator');

//bcrypt
var bcrypt = require('bcryptjs');

// route 1 : CREATE  a user using : POST "api/auth/createuser"  (no login required)
router.post('/createUser', async (req, res) => {

    console.log(req.body) // user data

    try {
        const { roles, objectives, industries, email } = req.body;

        if (roles.length === 0 || objectives.length === 0 || industries.length === 0) {
            res.status(400).json({ error: "plese select preferences" })
            return
        }

        // we check here that email that user send is exist in database or not
        let auth = await User.findOne({ email: req.body.email })
        if (auth) {
            return res.status(400).json({ error: "email you write is already exist" })
        }

        //use bcrypt here
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt); //join salt automaticaly in bcrypt

        const user = await User.create({  //send data to database
            email: email,
            roles,
            industries,
            objectives,
        })

        auth = await Authenticate.create({
            email: req.body.email,
            password: secpass
        })
        // res.json(auth)

        const data = {
            email: req.body.email
        }
        const auth_token = jwt.sign(data, jwt_secret)
        // console.log(jwt_data)

        // res.send(user)
        res.json({ auth_token })

    }
    catch (error) {
        console.error(error.errmsg)
        res.status(500).send('some error occure while creating user')
    }
})

// route 2 : Authenticate the user using : POST "api/auth/login"  (no login required)
router.post('/login', async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;

    try {

        let auth = await Authenticate.findOne({ email })
        if (!auth) {
            return res.status(400).json({ error: "user doesnot exist" })
        }

        let passcompare = await bcrypt.compare(password, auth.password);
        if (!passcompare) {
            return res.status(400).json({ error: "password is not correct" })
        }

        const data = {
            email: req.body.email
        }
        console.log(data)
        const auth_token = jwt.sign(data, jwt_secret)
        res.json({ auth_token })

    } catch (error) {
        console.error(error.errmsg)
        res.status(500).send('some error occured while login')
    }
})


// route 3 : get logged in user's detail using POST "api/auth/getuser"  (login required)
router.post('/getUser', fetchuser, async (req, res) => {

    try {
        const useremail = req.user.email;
        const user = await User.findById(useremail).select("-password")  // it means it will get all data excepts password
        res.send(user);

    } catch (error) {
        console.error(error.errmsg)
        res.status(500).send('some error occured from getuser')
    }

})

// route 4 : setup user profile after signup
router.post('/setupProfile', fetchuser, async (req, res) => {
    try {
        const userEmail = await req.user.email;
        const { firstName, lastName, designation, company, city, mobile, desciption } = req.body;
        const user1 = await User.updateOne({ email: userEmail }, {
            firstName, lastName, designation, company, city, mobile, desciption
        })
        console.log(req.user)
        res.json(user1)

    } catch (error) {
        console.log(error.errmsg)
        res.status(500).send('some error occured from setupProfile')
    }
})

module.exports = router;