const express = require("express");

const eventController = require("../controller/event");

const router = express.Router();

router.post("/add-event", eventController.addEvent);

router.get("/all-events", eventController.getAllEvents);

module.exports = router;