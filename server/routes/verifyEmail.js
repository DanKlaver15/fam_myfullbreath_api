const express = require("express");
const router = express.Router();
const verifyEmailController = require("../controllers/verifyEmailController");
const { validateUser } = require("../middlewares/validate");

router.route("/").post(validateUser, verifyEmailController.sendVerifyEmail);
router.route("/:userId").post(verifyEmailController.updateOne);

module.exports = router;