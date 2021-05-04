const { schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		user_title: {
			type: 'string',
			required: true,
		},
		user_first_name: {
			type: 'string',
			required: true,
		},
		user_last_name: {
			type: 'string',
			required: true,
		},
		user_gender: {
			type: 'string',
			required: true,
		},
		user_email: {
			type: 'string',
			required: true,
		},
		user_confirm_email: {
			type: 'string',
			required: true,
		},
		user_phone: {
			type: 'string',
			required: true,
		},
		user_attendance_type: {
			type: 'string',
			required: true,
		},
		user_role: {
			type: 'string',
			default: 'guest',
			enum: ['guest', 'admin', 'editor', 'reviewer', 'user'],
		},
		use_name: {
			type: 'string',
			required: true,
		},
		user_password: {
			type: 'string',
			required: true,
		},
	},
	{ timestamp: true }
);

module.exports = model('users', UserSchema);
