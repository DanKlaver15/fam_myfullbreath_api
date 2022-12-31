const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");
const bcrypt = require("bcrypt");

const createOne = async (req, res) => {
	const { email, password, userType } = req.body;

	if (!email || !password || !userType)
		return res.status(400).send({ error: "All fields are required" });

	if (userType == 1 || userType == 2) {
		req.body.isActiveResearchFlag = true;
	}

	try {
		const user = await query.findOne(User, { email });

		if (user) return res.status(400).send({ error: "Email already in use" });

		const newUser = await query.createOne(User, req.body);

		if (!newUser)
			return res.status(400).send({ error: "Failed to create new user" });

		const token = await newUser.generateAuthToken();

		return res.status(201).send({ user: newUser, token });
	} catch (err) {
		return res.status(500).send({ error: err });
	}
};

const updateOne = async (req, res, next) => {
	const { id } = req.params;
	const { email, password } = req.body;

	if (email) return res.status(400).send({ error: "Unable to update email" });

	if (password) {
		try {
			const hash = await bcrypt.hash(password, 12);
			req.body.password = hash;
		} catch (err) {
			return next(err);
		}
	}
	try {
		const updatedUser = await query.updateOne(User, id, req.body);

		if (!updatedUser)
			return res.status(400).send({ error: `Failed to update user` });

		res.status(200).send(updatedUser);
	} catch (err) {
		return res.status(500).send({ error: `Error: ${err}` });
	}
};

const removeOne = async (req, res, next) => {
	const { id } = req.params;

	try {
		const user = await query.findOne(User, { _id: id });
		
		//public user
		if (user.userType == 3) {
			try {
				const deletedUser = await query.removeOne(User, id);

				if (deletedUser.deletedCount === 0)
					return res
						.status(400)
						.send({ error: "Unable to delete your account" });

				return res.status(200).send(deletedUser);
			} catch (err) {
				return res.status(500).send({ error: `Error: ${err}` });
			}
		}
		//center or parent user
		else if (user.userType == 1 || user.userType == 2) {
			try {
				const deletedUser = await query.updateOne(User, id, {"isActiveResearchFlag": false});
		
				if (!deletedUser)
					return res.status(400).send({ error: "Unable to delete your account" });
		
				res.status(200).send(deletedUser);
			} catch (err) {
				return res.status(500).send({ error: `Error: ${err}` });
			}
		}

	} catch (err) {
		return res.status(500).send({ error: `Error: ${err}` });
	}
};

module.exports = {
	...crudController(User),
	createOne,
	updateOne,
	removeOne,
};
