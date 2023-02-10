const express = require("express");

const eventController = require("../controller/event");

const router = express.Router();

router.post("/add-event", eventController.addEvent);

module.exports = router;