const UserAdmin = require("../models/user.model");
const messages = require("../messages/messages");

const authAdmin = async (req, res, next) => {
  try {
    const user = await UserAdmin.findOne({ _id: req.user.id });
    if (user.user_role !== 1) {
      return res.status(400).json({
        code: messages.BadCode,
        success: messages.NotSuccess,
        status: messages.BadStatus,
        message: "Addmin resources access denided.",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      code: messages.InternalCode,
      success: messages.NotSuccess,
      status: messages.InternalStatus,
      message: err.message,
    });
  }
};

module.exports = authAdmin;
