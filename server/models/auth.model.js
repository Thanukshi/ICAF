const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true,
		},
		name: {
			type: String,
			trim: true,
			required: true,
		},
		hashed_password: {
			type: String,
			required: true,
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
		return this._password;
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
};
