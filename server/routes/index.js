const routes = require('express').Router();
const authRoute = require('./authRouter/auth.route');

routes.use('/auth-api', authRoute);
module.exports = routes;
