const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Int32 = require("mongoose-int32").loadType(mongoose);
const secretStrings = require("./../config/retrieveSecrets");
const { addressSchema } = require("./address");

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			minlength: 5,
			trim: true,
			lowercase: true,
			unique: true,
		},
		password: { type: String, required: true, trim: true },
		userType: { type: Int32, required: true },
		isEmailVerifiedFlag: { type: Boolean, required: true, default: false },
		isActiveResearchFlag : { type: Boolean, required: true, default: false },
		firstName: { type: String, trim: true },
		lastName: { type: String, trim: true },
		dob: { type: Date, trim: true },
		address: { type: addressSchema },
		phone: { type: Number, trim: true },
		isOnboardedFlag: { type: Boolean, default: false },
		createdAt: { type: Date, default: Date.now },
		loginToken: { type: String, default: null },
	});

userSchema.pre("save", async function preSave(next) {
	if (!this.isModified("password")) return next();

	try {
		const hash = await bcrypt.hash(this.password, 12);
		this.password = hash;
		return next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.generateAuthToken = async function () {
	const secretString = await secretStrings("MyFullBreath_authSecret");
	return jwt.sign(
		{ _id: this._id, email: this.email },
		secretString,
	);
};

userSchema.methods.checkPassword = async function checkPassword(candidate) {
	return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
