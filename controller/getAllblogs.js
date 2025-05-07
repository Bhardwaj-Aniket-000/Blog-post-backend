const Blog = require("../model/blogModel");
const asyncErrorhandle = require("../middleware/AsyncErrorHandle");

const getAllBlogs = asyncErrorhandle(async (req, res) => {
  const response = await Blog.find().sort({ createdAt: -1 });
  if (!response.length) {
    res
      .status(204)
      .json({ success: false, message: "no blogs found", response });
    return;
  }
  res
    .status(200)
    .json({ response, success: true, message: "all blogs are fethced" });
});

module.exports = getAllBlogs;
