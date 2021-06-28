const mongoose = require("mongoose");

const EditorsWorkSchema = new mongoose.Schema(
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
    place: {
      type: String,
      trim: true,
      required: [true, "Please enter your place!"],
    },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ConferanceDetails", EditorsWorkSchema);
