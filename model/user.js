 // User Model Config
  
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type:String, required:true},
    email: {type: String, required:true },
    password: { type:String, required:true},
    date:{ type:String, default:Date.now},
    image:String
});
module.exports = mongoose.model("User", userSchema);
