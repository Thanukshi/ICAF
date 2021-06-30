const Editor = require("../models/editors.model");
const messages = require("../messages/messages");
const User = require("../models/user.model");
const webToken = require("jsonwebtoken");

const editorsControls = {
  addConferance: async (req, res) => {
    try {
      const { title, conductorName, place, date, editor_id } = req.body;

      // const user = await User.findById(req.user.id).select("-password");

      const token = req.header("Authorization");
      const user = await User.findById(req.user.id).select("-password");

      if (!title || !conductorName || !place || !date) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }

      const conductor_name = await Editor.findOne({ conductorName });
      const date_time = await Editor.findOne({ date });

      if (conductor_name && date_time) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: conductorName + " was have a conferance at " + date,
        });
      }

      const newEditor = new Editor({
        title,
        conductorName,
        place,
        date,
        editor_id,
      });

      console.log("Conferance Details : ", newEditor);
      await newEditor.save();
      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newEditor,
        result: user,
        message: "Conferance details have been uploaded successfully.",
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

  getAllconferanceDetails: async (req, res) => {
    try {
      const conferance = await Editor.find();
      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: conferance,
        message: "Conferance list recieved",
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
  getConferanceDetailsByEditor: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const conferance = await Editor.find({ editor_id: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: conferance,
          message: "Conferance list recieved",
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
};

module.exports = editorsControls;
