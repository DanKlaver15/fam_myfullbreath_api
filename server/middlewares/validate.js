const Joi = require("joi");

/**
* **Password requirements:** \
* At least 8 characters and at most 30 characters \
* At least one digit \
* At least one upper case letter \
* At least one lower case letter \
* At least one special character which includes !#$%&* \
* Doesn’t contain any white space
*/

const validateUser = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email(),
		password: Joi.string().regex(
			/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#$%&*]*[!#$%&*])[A-Za-z0-9!#$%&*]{8,30}$/
		),
		userType: Joi.number().min(1).required(),
	});

	console.log(req.body);
	if (schema.validate(req.body)) {
		next();
	} else {
		res.status(400).send({ error: "One of the fields in your requested did not meet the requirements" }).end();
	}
};

module.exports = { validateUser };
