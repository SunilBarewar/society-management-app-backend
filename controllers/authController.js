const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel.js')
const jwt = require('jsonwebtoken')

// register new User

const registerUser = async (req, res) => {
    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;


    const { email } = req.body


    try {

        const oldUser = await UserModel.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ message: "user is already registered" })
        }
        const newUser = new UserModel(req.body)
        const user = await newUser.save();
        const token = await jwt.sign({ user }, process.env.JWT_KEY)
        res.status(200).json({ isUser: true, token: token })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email: email })

        if (user) {
            const token = await jwt.sign({ user }, process.env.JWT_KEY)
            const validity = await bcrypt.compare(password, user.password);

            validity ? res.status(200).json({  user , token }) : res.status(400).json({ message: "Wrong Password", user })

        } else {
            res.status(400).json({ message: "user does not exist", isUser: false });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message, isUser: false })
    }
}
const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        if(id){
            await UserModel.deleteOne({_id : id});
            res.status(200).json({ message: "user deleted successfully" }) 
        }else{
            res.status(400).json({ message : "please provide user _id" })
        }
    } catch (error) {
        res.status(400).json({ message : error.message })
    }
}
module.exports = {
    registerUser,
    loginUser,
    deleteUser
}