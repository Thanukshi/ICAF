const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
      required: [true, "Please enter your name!"],
    },

    user_email: {
      type: String,
      required: [true, "Please enter your email!"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: String,
      trim: true,
      required: [true, "Please enter your role!"],
    },
    user_role: {
      type: Number,
      default: 0, //0 = user, 1 = admin, 2 = editor, 3 = reviewer
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/icaf/image/upload/v1621947032/icaf_setup/user_x5zvlx.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
