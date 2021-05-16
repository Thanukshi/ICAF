const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, "Please enter your name!"],
		},

		email: {
			type: String,
			required: [true, "Please enter your email!"],
			unique: true,
			lowercase: true,
			
		},
		hashed_password: {
			type: String,
			required: [true, "Please enter your password!"],
		},
		salt: {
			type: String,
		},
		role: {
			type: String,
			default: 'User',
		},
		resetPasswordLink: {
			data: String,
			default: '',
		},
	},
	{ timestamp: true }
);

userSchema
	.virtual('password')
	.set(function (password) {
		this.password = password;
		this.salt = this.makeSalt();
		this.hashed_password = this.encryptPassword(password);
	})
	.get(function () {
		return this.hashed_password;
	});

userSchema.methods = {
	makeSalt: function () {
		return Math.round(new Date().valueOf() * Math.random()) + '';
	},

	encryptPassword: function (password) {
		if (!password) return '';
		try {
			return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
		} catch (e) {
			return '', e.message;
		}
	},

	authenticate: function (plainPassword) {
		return this.encryptPassword(plainPassword) === this.hashed_password;
	},
};

module.exports = mongoose.model('User', userSchema);
