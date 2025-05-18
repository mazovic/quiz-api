import { commonChains, validator } from '../../utils/index';

const signUp = validator.generator({
	schema: {
		firstname: commonChains.namesRequired,
		lastname: commonChains.namesRequired,
		email: commonChains.emailRequired,
		password: commonChains.passwordRequired,
	},
	type: 'body',
});

const signIn = validator.generator({
	schema: {
		email: commonChains.emailRequired,
		password: commonChains.passwordRequired,
	},
	type: 'body',
});

const refreshToken = validator.generator({
	schema: {
		refreshToken: commonChains.stringRequired,
	},
	type: 'body',
});

const verifyEmail = validator.generator({
	schema: {
		verificationCode: commonChains.codeRequired,
	},
	type: 'body',
});

const requestResetPassword = validator.generator({
	schema: {
		email: commonChains.emailRequired,
	},
	type: 'body',
});

const resetPassword = validator.generator({
	schema: {
		email: commonChains.emailRequired,
		newPassword: commonChains.passwordRequired,
		recoveryCode: commonChains.codeRequired,
	},
	type: 'body',
});

export default { signUp, signIn, refreshToken, verifyEmail, requestResetPassword, resetPassword };
