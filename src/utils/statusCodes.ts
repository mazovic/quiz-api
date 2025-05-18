/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/**
 * HTTP and application-specific status codes
 */
export const enum StatusCodes {
	OK = 200, // Normal
	CREATED = 201, // Create new entity
	UPDATED = 200, // PUT/PATCH Requests
	DELETED = 204, // DELETE requests

	BAD_REQUEST = 400, // A bad request
	UNAUTHORIZED = 401, // JWT Invalid or Refresh token invalid
	FORBIDDEN = 403, // No permission access
	NOT_FOUND = 404, // Endpoint not found
	CONFLICT = 409, // Resource conflict(User already exist)
	GONE = 410, //Verification token has expired.

	DUPLICATED_ENTRY = 412, // Duplication in input (record/value)
	VALIDATION_ERROR = 418, // Input validation error (body/query/params)
	INVALID_OPERATION = 419, // Operation not valid for current state
	ITEM_NOT_FOUND = 477, // Resource not found, even if endpoint exists

	INTERNAL_SERVER_ERROR = 500, // Server error
	SERVICE_UNAVAILABLE = 503, // Request can't be served right now
}
