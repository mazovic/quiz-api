// import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
// import { EmailAddress } from '../types/mailer';
// import dotenv from 'dotenv';
// import { logger } from './logger';

// dotenv.config();

// const apiKey = process.env.API_KEY || '';

// const mailerSend = new MailerSend({
// 	apiKey,
// });

// const sentFrom = new Sender('no-reply@quiz.com', 'Quiz.com');

// export const sendEmail = async (
// 	recipientsAddresses: EmailAddress[],
// 	htmlContent: string,
// 	subject: string
// ): Promise<unknown> => {
// 	const recipients: Recipient[] = recipientsAddresses.map(
// 		(recipientAddress) => new Recipient(recipientAddress.email, recipientAddress.name)
// 	);

// 	const emailParams = new EmailParams().setFrom(sentFrom).setTo(recipients).setSubject(subject).setHtml(htmlContent);

// 	try {
// 		return await mailerSend.email.send(emailParams);
// 	} catch (err) {
// 		logger.error('Email not sent', err);
// 		return null;
// 	}
// };
