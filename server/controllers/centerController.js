const ChildcareCenter = require("../models/center");
const query = require("../utils/query");

const getAll = async (res) => {
	try {
		const centers = await query.getAll(ChildcareCenter);
		res.status(200).send(centers);
	}
	catch (err) {
    return res.status(500).send({ error: `Error: ${err}` });
  }
};

module.exports = {
	getAll
};
