const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    user_type: {
        type: String,
        required: true,
        lowercase : true,
        // user can be a society member or a admin(secretary) or a security gaurd
        enum : ["member","admin","gaurd"],
        default : 'member'
    },
    password: { type: String, required: true },
    phone_no : {type : String , required : true},
    address : {type : String,required : true}
})

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel