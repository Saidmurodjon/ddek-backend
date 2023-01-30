const Model = require("./../models/Order");
const UserModel = require("../models/User");
// This is medicine controller
module.exports = {
  Get: async function (req, res) {
    try {
      const value = await Model.find().populate("author");
      return res.status(200).send(value);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  //Order is created
  Post: async function (req, res) {
    const { author, isOrdered, type } = req.body;
    // const authorId = req.query?.authorId;
    console.log(req.body);
    try {
      const user = await UserModel.findById({ _id: author });
      if (!user) {
        return res.status(401).send("Sizga ruhsat berilmagan");
      }
      if (!isOrdered) {
        return res.status(401).send("Xatolik yuz berdi, qayta urinib ko'ring");
      }
      const newOrder = {
        author,
        isOrdered: JSON.stringify(isOrdered),
        type,
      };
      const value = await Model.create(newOrder);
      console.log(value);
      return res.status(201).send(value);
    } catch (err) {
      res.status(401).send("Yaratishda hatolik yuz berdi");
      console.log(err);
    }
  },
};
