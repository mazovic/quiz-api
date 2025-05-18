import { StatusCodes } from './';

// Interface for optional error extension
interface ErrorExtension {
	[key: string]: any;
}

class Exception extends Error {
	public httpStatusCode: number;

	constructor(status: StatusCodes, msg?: string, err?: ErrorExtension) {
		if (!msg) {
			switch (status) {
				case StatusCodes.BAD_REQUEST:
					msg = 'Bad Request';
					break;
				case StatusCodes.CREATED:
					msg = 'Created';
					break;
				case StatusCodes.DELETED:
					msg = 'Deleted';
					break;
				case StatusCodes.DUPLICATED_ENTRY:
					msg = 'Duplicated Entry';
					break;
				case StatusCodes.FORBIDDEN:
					msg = 'Access Denied';
					break;
				case StatusCodes.INTERNAL_SERVER_ERROR:
					msg = 'Internal Server Error';
					break;
				case StatusCodes.INVALID_OPERATION:
					msg = 'Invalid Operation';
					break;
				case StatusCodes.ITEM_NOT_FOUND:
					msg = 'Item not Found';
					break;
				case StatusCodes.NOT_FOUND:
					msg = 'Not Found';
					break;
				case StatusCodes.OK:
					msg = 'OK';
					break;
				case StatusCodes.UNAUTHORIZED:
					msg = 'Unauthorized';
					break;
				case StatusCodes.UPDATED:
					msg = 'Updated';
					break;
				case StatusCodes.VALIDATION_ERROR:
					msg = 'Validation Error';
					break;
				default:
					msg = 'Unknown Error';
			}
		}

		super(msg);
		this.name = 'Exception';
		this.httpStatusCode = status;

		if (err && typeof err === 'object') {
			Object.assign(this, err);
		}

		// Maintain proper stack trace
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, Exception);
		}
	}
}

export { Exception };
