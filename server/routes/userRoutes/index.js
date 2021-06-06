const express = require("express");
const router = require("express").Router();
const userControl = require("../../controllers/user");

router.post("/register-user", userControl.register);

router.post("/activate-emai", userControl.activateEmail);

router.post("/login-user", userControl.login);

router.post("/access-token", userControl.getAccessToken);

//router.post("/refresh_token", userCtrl.getAccessToken);

module.exports = router;
