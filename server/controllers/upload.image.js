const cloudinary = require("cloudinary");
const fs = require("fs");
const messages = require("../messages/messages");
const User = require("../models/user.model");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadImageController = {
  uploadAvatar: async (req, res) => {
    try {
      const uploadFile = req.files.file;
      cloudinary.v2.uploader.upload(
        uploadFile.tempFilePath,
        {
          folder: "icaf_avatar",
          width: 150,
          height: 150,
          crop: "fill",
        },
        async (err, result) => {
          if (err) throw err;

          removeTmp(uploadFile.tempFilePath);

          const user = await User.findById(req.user.id).select("-password");
          return res.status(200).json({
            code: messages.SuccessCode,
            success: messages.Success,
            status: messages.SuccessStatus,
            data: user,
            result: result,
            message: "Image uploaded successfully.",
          });
        }
      );
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = uploadImageController;
