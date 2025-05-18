import * as bcrypt from 'bcrypt';

export async function hashPassword(plainTextPassword: string, saltRounds: number = 10): Promise<string> {
	const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
	return hashedPassword;
}

export async function verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
	const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
	return isMatch;
}

export async function compareOldPasswords(hash: string, salt: string, saltedHash: string): Promise<boolean> {
	return bcrypt.compare(hash + salt, saltedHash);
}
