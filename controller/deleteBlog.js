const Blog = require("../model/blogModel");
const asyncErrorhandle = require("../middleware/AsyncErrorHandle");
const { cloudinary } = require("../config/cloudinary");

const deleteBlog = asyncErrorhandle(async (req, res) => {
  const { id } = req.params;
  const response = await Blog.findOne();
  const deleteResponse = await Blog.findByIdAndDelete(id);
  await cloudinary.uploader.destroy(deleteResponse.profile_url);
  if (!deleteResponse) {
    res
      .status(500)
      .json({ response, success: false, message: "Inetrnal Server Error" });
    return;
  }
  res
    .status(201)
    .json({ response, success: true, message: "Blog Deleted Successfully" });
});

module.exports = deleteBlog;
