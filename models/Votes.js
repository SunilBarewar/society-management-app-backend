const mongoose = require("mongoose")


const votesSchema = new mongoose.Schema({
    member_id : {type : String,required : true},
    poll_id : {type : String,required : true},
    candidate_id :  {type : String , required : true}
},
{
    timestamps: true
})

const votesModel = mongoose.model("votes", votesSchema);

module.exports = votesModel

