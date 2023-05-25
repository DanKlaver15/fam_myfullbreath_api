const Log = require('../models/log');

const addToLog = (req, res) => {
	try {
		const newLog = new Log(req.body);
		console.log(newLog);
		newLog.saveAsCSV();
		return res.status(200).send('Log saved');
	} catch (err) {
		return res.status(500).send(err);
	}
	
};

module.exports = { addToLog };