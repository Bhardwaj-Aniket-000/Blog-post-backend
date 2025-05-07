const mongoose = require("mongoose");
// const asyncErrorhandle = require("../utils/asyncErrorhandle");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    profile_url: { type: String },
    public_id: { type: String },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
