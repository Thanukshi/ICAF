const router = require('express').Router();

//User Registration
router.post('/register-user', async (req, res) => {});

//Admin Registration
router.post('/register-admin', async (req, res) => {});

//Editor Registration
router.post('/register-editor', async (req, res) => {});

//Reviewer Registration
router.post('/register-reviewer', async (req, res) => {});

//User Login
router.post('/login-user', async (req, res) => {});

//Admin Login
router.post('/login-admin', async (req, res) => {});

//Editor Login
router.post('/login-editor', async (req, res) => {});

//Reviewer Login
router.post('/login-reviewer', async (req, res) => {});

//Profile routes
router.get('profile', async (req, res) => {});

router.post('/protected-user', async (req, res) => {});
router.post('/protected-user', async (req, res) => {});
router.post('/protected-user', async (req, res) => {});
router.post('/protected-user', async (req, res) => {});

module.exports = router;
