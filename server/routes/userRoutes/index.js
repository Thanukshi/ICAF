const express = require("express");
const router = require("express").Router();
const userControl = require("../../controllers/user");
const auth_middleware = require("../../middleware/auth");
const auth_admin_middleware = require("../../middleware/auth.admin");

router.post("/register-user", userControl.register);

router.post("/activate-email", userControl.activateEmail);

router.post("/login-user", userControl.login);

router.post("/refresh_token", userControl.getAccessToken);

router.post("/forgot-password", userControl.forgotPassword);

router.post("/reset-password", auth_middleware, userControl.resetPassword);

router.get("/get-user-details", auth_middleware, userControl.getUserDetails);

router.get(
  "/get-all-user-details",
  auth_middleware,
  auth_admin_middleware,
  userControl.getAllUserDetails
);

//router.post("/refresh_token", userCtrl.getAccessToken);

module.exports = router;
