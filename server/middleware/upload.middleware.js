const fs = require("fs");
const messages = require("../messages/messages");

module.exports = async function (req, res, next) {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        code: messages.BadCode,
        success: messages.NotSuccess,
        status: messages.BadStatus,
        message: messages.ImageUpload,
      });
    } else {
      const uploadFile = req.files.file;
      console.log(uploadFile);

      if (
        uploadFile.mimetype !== "image/png" &&
        uploadFile.mimetype !== "image/jpeg"
      ) {
        removeTmp(uploadFile.tempFilePath);
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.FileFormat,
        });
      }

      if (uploadFile.size > 1024 * 1024 * 10) {
        removeTmp(uploadFile.tempFilePath);
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ImageSize,
        });
      }
    }
    next();
  } catch (err) {
    return res.status(500).json({
      code: messages.InternalCode,
      success: messages.NotSuccess,
      status: messages.InternalStatus,
      message: err.message,
    });
  }
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
