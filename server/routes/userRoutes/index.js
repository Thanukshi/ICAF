const router = require('express').Router();
const userControl = require('../../controllers/user');

router.post('/register-user', userControl.register);

module.exports = router;
