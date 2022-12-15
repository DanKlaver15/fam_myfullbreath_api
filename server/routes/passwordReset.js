const User = require("../models/user");
const query = require("../utils/query");
const Token = require("../models/token");
const crypto = require("crypto");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const passwordCheck = require("../utils/passwordRegex");

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
		if (!user){
			return res.status(400).send("Invalid link or request has expired");
		}
console.log(user);
		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token){
			return res.status(400).send("Invalid link or request has expired");
		}
console.log(token);
		try {
			const checkedPassword = passwordCheck(password);
			if (!checkedPassword)
				return res
					.status(400)
					.send({ error: "Password does not meet requirements" });
		} catch (err) {
			return res.status(400).send({ error: `Password verification failed` });
		}

		try {
			const hash = await bcrypt.hash(password, 12);
			req.body.password = hash;
		} catch (err) {
			return err;
		}

		await query.updateOne(User, user._id, req.body);
		await token.delete();

		return res.send("Password reset sucessfully!");
	} catch (error) {
		res.send("An error occured");
		console.log(error);
	}
});

module.exports = router;
