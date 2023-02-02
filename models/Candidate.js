const mongoose = require("mongoose")


const candidateSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {type : String, required : true},
    post: {type : String, required : true},
    votes: {type : Number , default : 0}
});

module.exports = {candidateSchema}