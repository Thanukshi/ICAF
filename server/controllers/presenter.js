const Presenter = require("../models/workshop.model");
const messages = require("../messages/messages");

const presenterControls = {
  addWorkshop: async (req, res) => {
    try {
      const { title, conductorName, file_type, file_url, presenter_id } =
        req.body;

      if (!title || !conductorName || !file_type) {
        return res.status(200).json({
          code: messages.BadCode,
          success: messages.NotSuccess,
          status: messages.BadStatus,
          message: messages.ContentEmpty,
        });
      }

      // conductor_name = await Presenter.findOne({ conductorName });
      //const date_time = await Presenter.findOne({ date });

      //   if (conductor_name && date_time) {
      //     return res.status(200).json({
      //       code: messages.BadCode,
      //       success: messages.NotSuccess,
      //       status: messages.BadStatus,
      //       message: conductorName + " was have a conferance at " + date,
      //     });
      //   }

      const newPresenter = new Presenter({
        title,
        conductorName,
        file_type,
        file_url,
        presenter_id,
      });

      console.log("Workshop Details : ", newPresenter);
      await newPresenter.save();
      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newPresenter,
        message: "Workshop details have been uploaded successfully.",
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

module.exports = presenterControls;
