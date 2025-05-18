import { randomInt } from 'crypto';

export function generateVerificationCode(): string {
	const code = randomInt(100000, 1000000);
	return code.toString();
}
