const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'Please enter your name!'],
		},

		email: {
			type: String,
			required: [true, 'Please enter your email!'],
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter your password!'],
		},
		role: {
			type: Number,
			default: 0,
		},
		avatar: {
			type: String,
			default: 'https://res.cloudinary.com/icaf/image/upload/v1621947032/icaf_setup/user_x5zvlx.png',
		},
	},
	{ timestamp: true }
);

module.exports = mongoose.model('Users', userSchema);
