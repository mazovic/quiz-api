module.exports = {
	apps: [
		{
			name: 'ossloop-admin-back',
			script: './server.js',
			instances: 1,
			autorestart: true,
			watch: false,
		},
	],
};
