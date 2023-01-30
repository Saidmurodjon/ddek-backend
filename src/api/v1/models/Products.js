const mongoose = require("mongoose");
// This is Products model
const Schema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    photo: { type: String, require: true },
    type: { type: String, required: false },
    url: { type: String, require: false },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Products", Schema);
