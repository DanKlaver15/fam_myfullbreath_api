const secretStrings = require("../config/retrieveSecrets");
const query = require("../utils/query");
const crudController = require("../utils/crud");
const crypto = require('crypto');

const getOne = async (res, next) => {
	try {
		const android = await secretStrings("flurry_android");
		const ios = await secretStrings("flurry_ios");

		if (!android || !ios) {
			return res.status(500).send({ error: "Unable to retrieve secrets for analytics" });
		}

		return res.status(200).send({ android, ios });
	} catch (err) {
		return next(err);
	}
};

module.exports = {
	getOne,
};
