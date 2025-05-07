const Blog = require("../model/blogModel");
const asyncErrorhandle = require("../middleware/AsyncErrorHandle");
const { cloudinary, uploadFile } = require("../config/cloudinary");

const updateBlog = asyncErrorhandle(async (req, res) => {
  const { title, content, author } = req.body;
  const { id } = req.params;
  const file = req.file;
  const userExist = await Blog.findById(id);

  if (file) {
    await cloudinary.uploader.destroy(
      userExist?.public_id,
      {
        resource_type: "image",
      },
      (err) => {
        if (err) {
          res
            .status(500)
            .json({ message: "Image not deleted, try again", success: false });
        }
        return;
      }
    );
  }
  const { secure_url, public_id } = await uploadFile(file?.path);
  if (!secure_url) {
    res.status(500).json({
      success: false,
      message: "profile picture upoaded failed, try again !",
    });
    return;
  }
  const response = await Blog.findByIdAndUpdate(
    id,
    { title, content, author, profile_url: secure_url, public_id },
    { new: true }
  );
  if (!response) {
    res
      .status(500)
      .json({ response, success: false, message: "Inetrnal Server Error" });
    return;
  }

  res
    .status(201)
    .json({ response, success: true, message: "Blog Updated Successfully" });
});

module.exports = updateBlog;
