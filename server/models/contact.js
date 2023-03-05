const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
	email: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phone: { type: Number, trim: true }
});

module.exports = {contactSchema};
