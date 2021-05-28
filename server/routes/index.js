const routes = require('express').Router();
const userRoutes = require('../routes/userRoutes');

routes.use('/user', userRoutes);

module.exports = routes;
