const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const getAllBlogs = require("../controller/getAllblogs");
const createBlog = require("../controller/createBlog");
const updateBlog = require("../controller/updateBlog");
const deleteBlog = require("../controller/deleteBlog");

router.route("/getblogs").get(getAllBlogs);
router.route("/createblog").post(upload.single("image"), createBlog);
router.route("/modifyblog/:id").put(upload.single("image"), updateBlog);
router.route("/deleteblog/:id").delete(deleteBlog);

module.exports = router;
