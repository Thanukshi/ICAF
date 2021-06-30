const express = require("express");
const router = require("express").Router();
const userControl = require("../../controllers/user");
const auth_middleware = require("../../middleware/auth");
const auth_admin_middleware = require("../../middleware/auth.admin");

router.post("/register-user", userControl.register);

router.post("/other-register-user", userControl.otherUserRegister);

router.post("/activate-email", userControl.activateEmail);

router.post("/login-user", userControl.login);

router.post("/forgot-password", userControl.forgotPassword);

router.post("/reset-password", auth_middleware, userControl.resetPassword);

router.get("/get-user-details", auth_middleware, userControl.getUserDetails);

router.get(
  "/get-all-user-details",
  auth_middleware,
  auth_admin_middleware,
  userControl.getAllUserDetails
);

router.get("/logout", userControl.logoutUser);

router.patch("/update-user", auth_middleware, userControl.updateUser);

router.delete("/delete-user/:id", auth_middleware, userControl.deleteUser);

router.delete(
  "/delete-user/:id",
  auth_middleware,
  auth_admin_middleware,
  userControl.deleteUser
);

module.exports = router;
