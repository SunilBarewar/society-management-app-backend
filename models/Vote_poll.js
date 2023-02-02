const mongoose = require("mongoose")
const {candidateSchema} = require("./Candidate.js")

const vote_pollSchema = new mongoose.Schema({
    title: {type : String,required : true},
    startTime : {type : Date,required : true},
    endTime : {type : Date , required : true},
    candidates: [candidateSchema]
}, {
    timestamps: true
})

    const vote_pollModel = mongoose.model("vote_poll",vote_pollSchema)
    module.exports = vote_pollModel;