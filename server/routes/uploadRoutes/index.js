const express = require("express");
const router = require("express").Router();
const uploadImageMiddleware = require("../../middleware/upload.middleware");
const uploadImageController = require("../../controllers/upload.image");

router.post(
  "/upload-avatar",
  uploadImageMiddleware,
  uploadImageController.uploadAvatar
);

module.exports = router;
