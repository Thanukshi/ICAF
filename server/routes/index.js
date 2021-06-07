const routes = require("express").Router();
const userRoutes = require("../routes/userRoutes");
const userAvatarRoutes = require("../routes/uploadRoutes");

routes.use("/users", userRoutes);
routes.use("/user-avatar", userAvatarRoutes);

module.exports = routes;
