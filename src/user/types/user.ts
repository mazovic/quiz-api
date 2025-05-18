import { Currency, PreferredLanguage, ProfileStatus } from '../enums/user.enums';

export interface UserI {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
	role_id: number;
	role?: {
		id: number;
		name: string;
	};
	profile_status: ProfileStatus;
	is_verified: boolean;
	preferred_language: PreferredLanguage;
	preferred_currency: Currency;
	phone_number?: string | null;
	createdAt: Date;
	updatedAt: Date;
	log_out_at?: Date;
}
