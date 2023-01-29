const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  item: {},
  createdAt: Date,
  updateAt: Date,
});
module.exports = mongoose.model("Order", Schema);
