const express = require("express");
const router = require("express").Router();
const editorControll = require("../../controllers/editors");

router.post("/add/conferance-details", editorControll.addConferance);
router.get("/get/conferance-details", editorControll.getAllconferanceDetails);

module.exports = router;
