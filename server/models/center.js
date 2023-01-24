const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const centerSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	}
});

const ChildcareCenter = mongoose.model("Childcare_Center", centerSchema);

module.exports = ChildcareCenter;
