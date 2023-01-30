const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/Products");
// This is Products router
router.route("/").get(conntroller.Get);

module.exports = router;
