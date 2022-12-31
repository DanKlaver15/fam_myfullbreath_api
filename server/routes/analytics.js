const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");
const auth = require("../middlewares/auth");

router.route("/").get(auth, analyticsController.getOne);

module.exports = router;