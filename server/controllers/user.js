const User = require("../models/user.model");
const messages = require("../messages/messages");
const bcrypt = require("bcrypt");
const webToken = require("jsonwebtoken");
const sendEmail = require("./sendMail");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const fetch = require("node-fetch");

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;
const userControl = {
  register: async (req, res) => {
    try {
      const { user_name, user_email, password, role } = req.body;

      if (!user_name || !user_email || !password || !role) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }
      if (!validateEmail(user_email)) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ValidEmail,
        });
      }

      const user = await User.findOne({ user_email });
      if (user) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.AlreadyExistEmail,
        });
      }

      if (!validatePassword(password)) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.PasswordValidate,
        });
      }

      const passwordHash = await bcrypt.hash(password, 12);
      console.log(passwordHash);

      const newUser = {
        user_name,
        user_email,
        password: passwordHash,
        role,
      };
      console.log("User Details : ", newUser);

      const activate_token = createActivationToken(newUser);
      console.log({ activate_token });

      const url = `${CLIENT_URL}/user/activate/${activate_token}`;
      sendEmail(user_email, url, "Verify your email address");

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        token: activate_token,
        message: messages.ActiveAccount,
      });
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
  activateEmail: async (req, res) => {
    try {
      const { activate_token } = req.body;
      const user = webToken.verify(
        activate_token,
        process.env.ACTIVATION_TOKEN_SECRET
      );

      const { user_name, user_email, password, role } = user;
      const check = await User.findOne({ user_email });
      if (check) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.AlreadyExistEmail,
        });
      }
      const newUser = new User({
        user_name,
        user_email,
        password,
        role,
      });
      await newUser.save();
      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: user,
        token: activate_token,
        message: "Account has been activated successfully.",
      });

      console.log(user);
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { user_email, password } = req.body;
      const user = await User.findOne({ user_email });
      if (!user) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.EmailDoesNotExist,
        });
      } else {
        const isMatchUserPassword = await bcrypt.compare(
          password,
          user.password
        );
        if (!isMatchUserPassword) {
          return res.status(400).json({
            code: messages.BadCode,
            success: messages.NotSuccess,
            status: messages.BadStatus,
            message: messages.PasswordDoesNotMatch + user_email,
          });
        } else {
          const refresh_token = createRefreshToken({ id: User._id });
          res.cookie("refreshtoken", refresh_token, {
            httpOnly: true,
            path: "/user/refresh_token",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            secure: false,
          });

          return res.status(200).json({
            code: messages.SuccessCode,
            success: messages.Success,
            status: messages.SuccessStatus,
            data: user,
            token: refresh_token,
            message: "Login successfully.",
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
  getAccessToken: (req, res) => {
    try {
      const rfToken = req.cookies.refreshtoken;

      if (!rfToken) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.LoginMessage,
        });
      } else {
        webToken.verify(
          rfToken,
          process.env.REFRESH_TOKEN_SECRET,
          (err, user) => {
            if (err) {
              return res.status(400).json({
                code: messages.BadCode,
                success: messages.NotSuccess,
                status: messages.BadStatus,
                message: err.message,
              });
            } else {
              const access_token = createAccessToken({ id: user.id });
              return res.status(200).json({
                code: messages.SuccessCode,
                success: messages.Success,
                status: messages.SuccessStatus,
                data: user,
                token: access_token,
                message: "Login successfully.",
              });
            }
          }
        );
      }
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { user_email } = req.body;
      const user = await User.findOne({ user_email });
      if (!user) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.EmailDoesNotExist,
        });
      } else {
        const access_token = createAccessToken({ id: user._id });
        const url = `${CLIENT_URL}/user/reset/${access_token}`;

        sendEmail(user_email, url, "Reset your password");
        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: user,
          token: access_token,
          message:
            "Re-send the password, please check your email to reset the password",
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
  },
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;

      if (!validatePassword(password)) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.PasswordValidate,
        });
      } else {
        const passwordHash = await bcrypt.hash(password, 12);
        console.log(req.user);
        await User.findOneAndUpdate(
          { _id: req.user.id },
          {
            password: passwordHash,
          }
        );
        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          message: messages.ResetPassword,
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
  },
  getUserDetails: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
}

const createActivationToken = (payload) => {
  return webToken.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "10m",
  });
};

const createAccessToken = (payload) => {
  return webToken.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20m",
  });
};

const createRefreshToken = (payload) => {
  return webToken.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = userControl;
