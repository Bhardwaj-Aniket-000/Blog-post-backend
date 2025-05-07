const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

const uploadFile = async (filePath) => {
  try {
    const response = await cloudinary.uploader.upload(filePath);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  uploadFile,
  cloudinary,
};
