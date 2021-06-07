const express = require("express");
const router = require("express").Router();
const uploadImageMiddleware = require("../../middleware/upload.middleware");
const uploadImageController = require("../../controllers/upload.image");
const auth_middleware = require("../../middleware/auth");

router.post(
  "/upload-avatar",
  uploadImageMiddleware,
  auth_middleware,
  uploadImageController.uploadAvatar
);

module.exports = router;
