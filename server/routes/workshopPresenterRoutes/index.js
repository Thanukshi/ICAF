const express = require("express");
const router = require("express").Router();
const workShopControll = require("../../controllers/presenter");
const auth_middleware = require("../../middleware/auth");

router.post(
  "/add/workshop-details",
  auth_middleware,
  workShopControll.addWorkshop
);
// router.get(
//   "/get/conferance-details/:id",
//   auth_middleware,
//   editorControll.getConferanceDetailsByEditor
// );

module.exports = router;
