const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },

    user_email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
      sparse: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      trim: true,
      default: "User",
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
