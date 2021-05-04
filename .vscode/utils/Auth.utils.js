const User = require('../models/User');

const userRegister = async (userDetails, role, res) => {
	//check username available
	let UsernameTaken = await checkAvailabilityOfUserName(userDetails);

	if (!UsernameTaken) {
		return res.status(400).json({
			success: false,
			message: 'Username is already taken',
		});
	}
	//check user email available
	let UserEmailTaken = await checkAvailabilityOfUserEmail(userDetails);

	if (!UserEmailTaken) {
		return res.status(400).json({
			success: false,
			message: 'Email is already taken',
		});
	}
};

// const checkAvailabilityOfUserName = async (username) => {
// 	let user = User.findOne(username);

// 	if (user) {
// 		return {
// 			success: false,
// 			code: 400,
// 		};
// 	} else {
// 		return {
// 			success: true,
// 			code: 200,
// 		};
// 	}
// };

const checkAvailabilityOfUserName = async (username) => {
	let user = User.findOne(username);
	return user ? false : true;
};

const checkAvailabilityOfUserEmail = async (user_email) => {
	let user = User.findOne(user_email);
	return user ? false : true;
};
