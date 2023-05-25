const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");

router.route("/").put(logController.addToLog);

module.exports = router;