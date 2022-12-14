const passwordCheck = (password) => {
	if (password === null || password === undefined) return false;

	const uppercaseLetter = new RegExp(/[A-Z]/);
	const lowercaseLetter = new RegExp(/[a-z]/);
	const number = new RegExp(/[0-9]/);
	const specialCharacter = new RegExp(/[!@#.$%^&*]/);

	if (
		uppercaseLetter.test(password) &&
		lowercaseLetter.test(password) &&
		number.test(password) &&
		specialCharacter.test(password) &&
		password.length >= 8
	) {
		return true;
	} else {
		return false;
	}
};

module.exports = passwordCheck;
