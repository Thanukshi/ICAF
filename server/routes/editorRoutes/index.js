const express = require("express");
const router = require("express").Router();
const editorControll = require("../../controllers/editors");
const auth_middleware = require("../../middleware/auth");
const authAdmin = require("../../middleware/auth.admin");
const auth_admin_middleware = require("../../middleware/auth.admin");

router.post(
  "/add/conferance-details",
  auth_middleware,
  editorControll.addConferance
);
router.get(
  "/get/all-conferance-details",
  editorControll.getAllconferanceDetails
);

router.get(
  "/get/all-conferance-details/:id",
  auth_middleware,
  editorControll.getConferanceDetailsByEditor
);

router.get(
  "/get/all-conferance-details-admin",
  auth_middleware,
  auth_admin_middleware,
  editorControll.getAllconferanceDetails
);

router.delete(
  "/delete-conferance/:id",
  auth_middleware,
  auth_admin_middleware,
  editorControll.deleteConferance
);

router.delete(
  "/delete-conferance/:id",
  auth_middleware,
  editorControll.deleteConferance
);

module.exports = router;
