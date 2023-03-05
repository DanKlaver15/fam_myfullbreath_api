const ChildcareCenter = require("../models/center");
const query = require("../utils/query");

const getAll = async (req, res, next) => {
	try {
		const centers = await query.getAll(ChildcareCenter);
		return res.status(200).send({ centers: [centers] });
	}
	catch (err) {
    return res.status(500).send({ error: `Error: ${err}` });
  }
};

module.exports = {
	getAll
};
