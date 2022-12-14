const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Int32 = require("mongoose-int32").loadType(mongoose);
const secretStrings = require("./../config/retrieveSecrets");

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
		password: { type: String, required: true, minlength: 10, trim: true },
		userType: { type: Int32, required: true },
		isActiveResearchFlag : { type: Boolean, default: false },
		needsOnboardingFlag : { type: Boolean, default: true },
		createdAt: { type: Date, default: Date.now },
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
