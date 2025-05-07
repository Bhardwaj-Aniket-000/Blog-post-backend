const Blog = require("../model/blogModel");
const asyncErrorhandle = require("../middleware/AsyncErrorHandle");
const { uploadFile } = require("../config/cloudinary");

const createBlog = asyncErrorhandle(async (req, res) => {
  const { title, content, author } = req.body;
  const file = req.file;

  const { secure_url, public_id } = await uploadFile(file?.path);
  if (!secure_url) {
    res.json({
      success: false,
      message: "profile picture upoaded failed, try again !",
    });
    return;
  }

  const response = await Blog.create({
    title,
    content,
    author,
    profile_url: secure_url,
    public_id,
  });
  if (!response) {
    res
      .status(500)
      .json({ response, success: false, message: "Inetrnal Server Error" });
  }
  response.save();
  res
    .status(201)
    .json({ response, success: true, message: "Blog Create Successfully" });
});

module.exports = createBlog;
