const mongoose = require("mongoose");
const ordered = mongoose.Schema({
  Pochta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pochta",
  },
  Hosting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hosting",
  },
  Custom: { type: Object },
});
const Schema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    message: String,
    isOrdered: ordered,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", Schema);
