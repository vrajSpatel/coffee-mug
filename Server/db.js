const mongoose = require('mongoose');
const mongouri = 'mongodb://localhost:27017/coffeemug'

const connecttoMongo = async() =>{
    await mongoose.connect(mongouri)
    console.log("mongo-connected")
}

module.exports = connecttoMongo;