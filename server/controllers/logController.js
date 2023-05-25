const Log = require('../models/log');

const addToLog = (req) => {
	const newLog = new Log(req.body);
	newLog.saveAsCSV();
};

module.exports = { addToLog };