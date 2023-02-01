const mongoose = require("mongoose")


const candidateSchema = new mongoose.Schema({
    name : {type: String, required : true},
    post : {type: String , required : true},
}, {
    timestamps: true
})


const candidateModel = mongoose.model("Candidate", candidateSchema)


