const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: String,
   username: String,
   matric_no: String,
   password: String,
   email: String,
   gender: String,
   level: String,
   image:{
     type:String,
     default: "img/user.svg"
   },
   address: String,
   friends: Array,
   status: {
     type:String,
     default:""
   },
   groups:Array,
   notifications: {
    type:Number,
    default: 0
   },
   
   requests: {
    type:Number,
    default: 0
   },

   feeds_count : {
     type: Number,
    default: 0
   },

   messages:{
    type:Number,
    default: 0
   },
   

})

module.exports = mongoose.model('User', userSchema);