const express = require("express");
const router = require("express").Router();
const editorControll = require("../../controllers/editors");
const auth_middleware = require("../../middleware/auth");

router.post(
  "/add/conferance-details",
  auth_middleware,
  editorControll.addConferance
);
router.get(
  "/get/conferance-details/:id",
  auth_middleware,
  editorControll.getConferanceDetailsByEditor
);

module.exports = router;
