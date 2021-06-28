const Editor = require("../models/editors.model");
const messages = require("../messages/messages");

const editorsControls = {
  addConferance: async (req, res) => {
    try {
      const { title, conductorName, place, date } = req.body;

      console.log(req.body);

      if (!title || !conductorName || !place || !date) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }

      const conductor_name = await Editor.findOne({ conductorName });
      // const date_time = await Editor.findOne({ dateAndTime });

      if (conductor_name) {
        return res.status(400).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: conductorName + " was have a conferance at",
        });
      }

      const newEditor = new Editor({
        title,
        conductorName,
        place,
        date,
      });

      console.log("Conferance Details : ", newEditor);
      await newEditor.save();
      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newEditor,
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
};

module.exports = editorsControls;
