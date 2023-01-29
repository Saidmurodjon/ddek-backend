const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/Pochta");
// This is Pochta router
router.route("/").get(conntroller.Get);
router.route("/").post(conntroller.Post);
router.route("/search").post(conntroller.Search);
module.exports = router;
