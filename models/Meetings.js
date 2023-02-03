const mongoose = require("mongoose")
 

const meetingsSchema = new mongoose.Schema({
    title :  {type : String,required :  true},// purpose of metting
    date : {type : Date, required : true},
    time : {type : String, required : true}
})


const meetingModel = mongoose.model('meetings', meetingsSchema)
module.exports = meetingModel