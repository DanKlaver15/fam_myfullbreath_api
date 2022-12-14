const User = require("../models/user");
const query = require("../utils/query");
const Token = require("../models/token");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const userController = require("../controllers/userController");

router.route("/").post(async (req, res) => {
	const { email } = req.body;

	if (!email) return res.status(400).send({ error: "Email is required" });

	try {
		const user = await query.findOne(User,{ email: email });
		if (!user) {
			return res.status(400).send("User with given email does not exist");
		}

		let token = await query.findOne(Token,{ userId: user._id });
		if (!token) {
			token = await new Token({
				userId: user._id,
				token: crypto.randomBytes(32).toString("hex"),
			}).save();
		}

		const link = `http://app.famallies.org/resetLink/${user._id}/${token.token}`;
		await sendEmail(user.email, "Password Reset for MyFullBreath", link);

		res.send(`password reset link sent to your email account`);
	} catch (error) {
		res.send("An error occured");
		console.log(error);
	}
});

router.route("/:userId/:token").post(async (req, res) => {
	const { password } = req.body;

	try {
		const user = await query.getOne(User, req.params.userId);
		if (!user)
			return res.status(400).send("Invalid link or request has expired");

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token){
			return res.status(400).send("Invalid link or request has expired");
		}

		userController.updateOne(req, res);
	} catch (error) {
		res.send("An error occured");
		console.log(error);
	}
});

module.exports = router;
