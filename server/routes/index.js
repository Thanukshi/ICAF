const routes = require("express").Router();
const userRoutes = require("../routes/userRoutes");
const userAvatarRoutes = require("../routes/uploadRoutes");
const editorRoutes = require("../routes/editorRoutes");

routes.use("/users", userRoutes);
routes.use("/user-avatar", userAvatarRoutes);
routes.use("/editor", editorRoutes);

module.exports = routes;
