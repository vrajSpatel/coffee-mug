const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true   //to make it unique 
    },
    password: {
        type: String,
        required: true,
    },
})

const auth = mongoose.model('authdata', authSchema);
module.exports = auth;