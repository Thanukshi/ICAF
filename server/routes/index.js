const routes = require('express').Router();
const userRoutes = require('../routes/userRoutes');

routes.use('/users', userRoutes);

module.exports = routes;
