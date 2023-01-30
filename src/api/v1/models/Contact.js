const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  isPublished: { type: Boolean, default: false },
  date: Date,
});
module.exports = mongoose.model("Contact", ContactSchema);
