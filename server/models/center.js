const mongoose = require("mongoose");
const { addressSchema } = require("./address");
const { contactSchema } = require("./contact");
const Schema = mongoose.Schema;

const centerSchema = new Schema({
	address: {
		type: addressSchema,
		required: true,
	},
	contact: {
		type: contactSchema,
		required: true,
	},
	licenseType: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	youngstarRating: {
		type: Number,
		required: true,
		default: 0,
	},
});

const ChildcareCenter = mongoose.model("Childcare_Center", centerSchema);

module.exports = ChildcareCenter;
