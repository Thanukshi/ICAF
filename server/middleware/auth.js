const webToken = require("jsonwebtoken");
const messages = require("../messages/messages");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(400).json({
        code: messages.BadCode,
        success: messages.NotSuccess,
        status: messages.BadStatus,
        message: messages.RouteError,
      });
    } else {
      webToken.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(500).json({
            code: messages.InternalCode,
            success: messages.NotSuccess,
            status: messages.InternalStatus,
            message: messages.RouteError + "Error :" + err.message,
          });
        } else {
          req.user = user;
          console.log(user);
          next();
        }
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: messages.InternalCode,
      success: messages.NotSuccess,
      status: messages.InternalStatus,
      message: err.message,
    });
  }
};

module.exports = auth;
