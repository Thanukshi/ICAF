const User = require('../models/User');


const userRegister = async (userDetails, role, res) => {
	//check username available
	let UsernameNotTaken = await checkAvailabilityOfUserName(userDetails);

	if (!UsernameNotTaken) {
		return res.status(400).json({
			success: false,
			message: 'Username is already taken',
		});
	}
	//check user email available
	let UserEmailNotTaken = await checkAvailabilityOfUserEmail(userDetails);

	if (!UserEmailNotTaken) {
		return res.status(400).json({
			success: false,
			message: 'Email is already taken',
		});
	}

	//check user phone available
	let UserPhoneNotTaken = await checkAvailabilityOfUserEmail(userDetails);

	if (!UserPhoneNotTaken) {
		return res.status(400).json({
			success: false,
			message: 'Phone Number is already taken',
		});
	}

	// hashed password
	const hashPassword = await bcrypt().hash();
};

const checkAvailabilityOfUserName = async (use_name) => {
	let user = User.findOne(use_name);
	return user ? false : true;
};

const checkAvailabilityOfUserEmail = async (user_email) => {
	let user = User.findOne(user_email);
	return user ? false : true;
};

const checkAvailabilityOfUserPhone = async (user_phone) => {
	let user = User.findOne(user_phone);
	return user ? false : true;
};
