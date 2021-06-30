const express = require("express");
const router = require("express").Router();
const workShopControll = require("../../controllers/presenter");
const auth_middleware = require("../../middleware/auth");
const auth_admin_middleware = require("../../middleware/auth.admin");

router.post(
  "/add/workshop-details",
  auth_middleware,
  workShopControll.addWorkshop
);

router.get(
  "/get/workshop-details/:id",
  auth_middleware,
  workShopControll.getAllWorkshopDetailsByEditor
);

router.get(
  "/get/workshop-details",
  workShopControll.getAllWorkshopDetails
);

router.get(
  "/get/workshop-details-admin",
  auth_middleware,
  auth_admin_middleware,
  workShopControll.getAllWorkshopDetails
);

router.delete(
  "/delete-workshop-admin/:id",
  auth_middleware,
  auth_admin_middleware,
  workShopControll.deleteWorkshopByAdmin
);
module.exports = router;
