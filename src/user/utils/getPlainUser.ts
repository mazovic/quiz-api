import { User } from '../models/User';
import { UserI } from '../types/user';

export const getUserPlain = (user: User): UserI => {
	const userPlain = user.get({ plain: true });
	delete userPlain.password_hash;
	delete userPlain.salt;
	delete userPlain.refresh_token_hash;
	delete userPlain.password_recovery_code_hash;
	delete userPlain.password_recovery_code_expiry;
	delete userPlain.email_verification_token;
	delete userPlain.verification_token_expiry;

	return userPlain as UserI;
};
