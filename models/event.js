const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventId: {
      type: String,
      required: true,
      unique: true,
    },
    eName: {
      type: String,
      required: true,
    },
    ePoster: {
        type: String,
        required: true,
    },
    eTags: {
        type: String,
        required: true,
    },
    eCategory: {
        type: String,
        required: true,
    },
    eDescription: {
        type: String,
        required: true,
    },
    eLocation: {
        type: String,
        required: true,
    },
    eWhoCanJoin: {
        type: String,
        required: true,
    },
    eLimit: {
        type: String,
        required: true,
    },
    eContact: {
        type: String,
        required: true,
    },
  });
  
  module.exports = mongoose.model("Event", eventSchema);