const mongoose = require("mongoose");

const newsFeedSchema = new mongoose.Schema({
  post_title: String,
  post_body: String,
  date: Date,
  time: String,
  posted_by: Object,
  comments: Array
})

module.exports = mongoose.model("Feed", newsFeedSchema)