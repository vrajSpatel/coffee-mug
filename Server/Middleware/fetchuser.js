const jwt = require('jsonwebtoken')
const jwt_secret = 'hellooo@'

const fetchuser = async (req, res, next) => {
    // get the user from the jwt token and add id to request object
    const token = req.header('auth_token')
    if (!token) {
        res.status(401).send({ error: "please authenticate with valid token" })
    }
    try {
        const data = await jwt.verify(token, jwt_secret)
        // console.log(data)
        req.user = data;
        next();//must
        
    } catch (error) {
        res.status(401).send({ error: "please authenticate with valid token" })
    }
}

module.exports = fetchuser;