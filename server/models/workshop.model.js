const mongoose = require("mongoose");

const WorkshpPresenterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please enter your name!"],
    },
    conductorName: {
      type: String,
      trim: true,
      required: [true, "Please enter your name!"],
    },
    file_type: {
      type: String,
      trim: true,
      required: [true, "Please enter your place!"],
    },

    file_url: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/icaf/image/upload/v1621947032/icaf_setup/user_x5zvlx.png",
    },

    presenter_id: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("WorksopDetails", WorkshpPresenterSchema);
