const express = require("express");
const router = express.Router();
const centerController = require("../controllers/centerController");

router.route("/").get(centerController.getAll);

module.exports = router;