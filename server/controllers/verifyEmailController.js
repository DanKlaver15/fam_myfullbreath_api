const User = require("../models/user");
const query = require("../utils/query");
const sendVerifyEmail = require("../utils/verifyEmail");

const sendVerifyEmail = async (req, res) => {
	const { email } = req.body;

	if (!email) return res.status(400).send({ error: "Email is required" });

	try {
		const user = await query.findOne(User,{ email: email });
		if (!user) {
			return res.status(400).send("User with given email does not exist");
		}

		const link = `http://app.famallies.org/verifyEmail/${user._id}`;
		await sendVerifyEmail(user.email, "Please Verify Your Email For MyFullBreath", link);

		res.send(`Email address verification successfully sent`);
	} catch (error) {
		res.send("An error occured");
		console.log(error);
	}
};

const updateOne = async (req, res) => {
	const { id } = req.params;
	const { email } = req.body;

	if (!email) {
		return res.status(400).send({ error: "Email is required" });
	}

	try {
		const updatedUser = await query.updateOne(User, id, {isEmailVerifiedFlag: true});

		if (!updatedUser)
			return res.status(400).send({ error: `Failed to update user` });

		res.status(200).send({ email: email, verified: true });
	} catch (err) {
		return res.status(500).send({ error: `Error: ${err}` });
	}
};

module.exports = { sendVerifyEmail, updateOne };