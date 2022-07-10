const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Quest = mongoose.model("Quest", QuestSchema);

module.exports = Quest;
