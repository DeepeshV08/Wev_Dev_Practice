const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

const userSchema = mongoose.Schema({
    image : String, 
    email : String,
    name : String
})
const userModel = mongoose.model('user', userSchema)

module.exports = userModel