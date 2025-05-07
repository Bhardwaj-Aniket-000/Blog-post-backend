const Blog = require("../model/blogModel");
const asyncErrorhandle = require("../middleware/AsyncErrorHandle");
const { uploadFile } = require("../config/cloudinary");

const createBlog = asyncErrorhandle(async (req, res) => {
  const { title, content, author } = req.body;
  const file = req.file;
  let uploadedData;
  if (file) {
    uploadedData = await uploadFile(file?.path).catch((err) => {
      res.status(500).json({
        success: false,
        message: "profile picture upoaded failed, try again !",
      });
      return;
    });
  }

  const response = await Blog.create({
    title,
    content,
    author,
    profile_url: uploadedData?.secure_url || "",
    public_id: uploadedData?.public_id || "",
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
