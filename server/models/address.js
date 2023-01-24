const mongoose = require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);

const addressSchema = new mongoose.Schema(
	{
		address1: { type: String, required: true, trim: true },
		address2: { type: String, trim: true },
		city: { type: String, required: true, trim: true },
		state: { type: String, required: true, trim: true },
		zip: { type: Number, required: true, trim: true },
	});

const Address = mongoose.model("Address", addressSchema);

module.exports = { addressSchema, Address };