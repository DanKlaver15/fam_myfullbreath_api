const mongoose = require("mongoose");
const secretStrings = require("./retrieveSecrets");

const connectDB = async () => {
	const secretString = await secretStrings("MyFullBreath-MongoDB-Connection");
	try {
		await mongoose.connect(secretString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB connected");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
