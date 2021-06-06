const router = require("express").Router();
const userControl = require("../../controllers/user");

router.post("/register-user", userControl.register);

router.post("/activate-emai", userControl.activateEmail);

router.post("/login-user", userControl.login);

//router.post("/refresh_token", userCtrl.getAccessToken);

module.exports = router;
