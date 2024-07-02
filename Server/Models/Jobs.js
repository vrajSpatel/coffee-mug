const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    email : {
        type:String,
        required : true
    },
    Role: {
        type: String,
        required : true
    },
    Seniority:{
        type:String,
        required : true
    },
    Name :{
        type:String,
        required : true
    },
    Stage :{
        type:String,
        required : true
    },
    MinExp:{
        type:Number,
        required : true
    },
    MaxExp:{
        type:Number,
        required : true
    },
    PreferredSkills :{
        type:[String],
        required : true
    },
    PreferredIndustries:{
        type:[String],
        required : true
    },
    jobDescription:{
        type:String,
        // required : true
    },
    city :{
        type:String,
        // required : true
    },
    remoteLocation:{
        type: Boolean,
    },
    opportunityVisibility:{
        type:Boolean,
    },

})

const Jobs = mongoose.model('jobpostdetail',JobSchema);

module.exports = Jobs;