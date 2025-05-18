const authPaths = {
	'/auth/public/sign-up': {
		post: {
			summary: 'Register a new user',
			description: 'Creates a new user account with provided credentials',
			tags: ['Authentication'],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['firstname', 'lastname', 'email', 'password'],
							properties: {
								firstname: {
									type: 'string',
									description: "User's first name",
									example: 'John',
								},
								lastname: {
									type: 'string',
									description: "User's last name",
									example: 'doe',
								},
								email: {
									type: 'string',
									format: 'email',
									description: "User's email address",
									example: 'user@example.com',
								},
								password: {
									type: 'string',
									format: 'password',
									description: "User's password",
									example: 'password123',
								},
							},
						},
					},
				},
			},
			responses: {
				'200': {
					description: 'User successfully registered',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'OK',
									},
									date: {
										type: 'object',
										properties: {
											profile_status: {
												type: 'string',
												description: 'Status of user profile',
												example: 'normal',
											},
											is_verified: {
												type: 'boolean',
												description: 'Email verification status',
												example: false,
											},
											preferred_language: {
												type: 'string',
												description: "User's preferred language",
												example: 'en',
											},
											preferred_currency: {
												type: 'string',
												description: "User's preferred currency",
												example: 'USD',
											},
											id: {
												type: 'integer',
												description: "User's unique identifier",
												example: 6,
											},
											firstname: {
												type: 'string',
												description: "User's first name",
												example: 'John',
											},
											lastname: {
												type: 'string',
												description: "User's last name",
												example: 'doe',
											},
											email: {
												type: 'string',
												format: 'email',
												description: "User's email address",
												example: 'user@example.com',
											},
											role_id: {
												type: 'integer',
												description: "User's role ID",
												example: 1,
											},
											updatedAt: {
												type: 'string',
												format: 'date-time',
												description: 'Last update timestamp',
												example: '2025-05-07T13:21:03.910Z',
											},
											createdAt: {
												type: 'string',
												format: 'date-time',
												description: 'Account creation timestamp',
												example: '2025-05-07T13:21:03.910Z',
											},
										},
									},
									token: {
										type: 'object',
										properties: {
											accessToken: {
												type: 'string',
												description: 'JWT access token',
												example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
											},
											refreshToken: {
												type: 'string',
												description: 'JWT refresh token',
												example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
											},
										},
									},
								},
							},
						},
					},
				},
				'400': {
					description: 'Bad request',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
									},
									error: {
										type: 'string',
										description: 'Error details',
									},
								},
							},
						},
					},
				},
				'409': {
					description: 'User already exists',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Email already in use',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'User with this email already exists',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
									},
									error: {
										type: 'string',
										description: 'Error details',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/public/sign-in': {
		post: {
			summary: 'User login',
			description: 'Authenticates a user with email and password credentials',
			tags: ['Authentication'],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['email', 'password'],
							properties: {
								email: {
									type: 'string',
									format: 'email',
									description: "User's email address",
									example: 'user@example.com',
								},
								password: {
									type: 'string',
									format: 'password',
									description: "User's password",
									example: 'password123',
								},
							},
						},
					},
				},
			},
			responses: {
				'200': {
					description: 'User successfully authenticated',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'OK',
									},
									token: {
										type: 'object',
										properties: {
											accessToken: {
												type: 'string',
												description: 'JWT access token',
												example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
											},
											refreshToken: {
												type: 'string',
												description: 'JWT refresh token',
												example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
											},
										},
									},
								},
							},
						},
					},
				},
				'400': {
					description: 'Bad request',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Invalid credentials',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Email or password is incorrect',
									},
								},
							},
						},
					},
				},
				'401': {
					description: 'Unauthorized',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Authentication failed',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Invalid email or password',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'User not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'User not found',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'No user exists with the provided email',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/me': {
		get: {
			summary: 'Verify access token and return user',
			description: "Verifies the validity of a user's access token",
			tags: ['Authentication'],
			security: [{ BearerAuth: [] }],
			parameters: [
				{
					in: 'header',
					name: 'Authorization',
					required: true,
					schema: {
						type: 'string',
					},
					description: 'Bearer token for authentication',
					example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
				},
			],
			responses: {
				'200': {
					description: 'Token successfully verified',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'OK',
									},
									date: {
										type: 'object',
										description: 'User data from decoded token',
										properties: {
											email: {
												type: 'string',
												format: 'email',
												description: "User's email address",
												example: 'user@example.com',
											},
											firstname: {
												type: 'string',
												description: "User's first name",
												example: 'John',
											},
											lastname: {
												type: 'string',
												description: "User's last name",
												example: 'doe',
											},
											id: {
												type: 'integer',
												description: "User's unique identifier",
												example: 6,
											},
											role_id: {
												type: 'integer',
												description: "User's role ID",
												example: 1,
											},
											is_verified: {
												type: 'boolean',
												description: 'Email verification status',
												example: false,
											},
											preferred_currency: {
												type: 'string',
												description: "User's preferred currency",
												example: 'USD',
											},
											preferred_language: {
												type: 'string',
												description: "User's preferred language",
												example: 'en',
											},
											profile_status: {
												type: 'string',
												description: 'Status of user profile',
												example: 'normal',
											},
											createdAt: {
												type: 'string',
												format: 'date-time',
												description: 'Account creation timestamp',
												example: '2025-05-07T13:21:03.000Z',
											},
											updatedAt: {
												type: 'string',
												format: 'date-time',
												description: 'Last update timestamp',
												example: '2025-05-07T13:21:03.000Z',
											},
											log_out_at: {
												type: 'string',
												format: 'date-time',
												description: 'Last logout timestamp',
												example: '2025-05-07T15:30:45.000Z',
											},
											iat: {
												type: 'integer',
												description: 'Token issued at timestamp',
												example: 1746628677,
											},
											exp: {
												type: 'integer',
												description: 'Token expiration timestamp',
												example: 1746632277,
											},
										},
									},
								},
							},
						},
					},
				},
				'401': {
					description: 'Unauthorized',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Unauthorized',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'expiration time',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/log-out': {
		post: {
			summary: 'User logout',
			description: 'Logs out the currently authenticated session',
			tags: ['Authentication'],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['refreshToken'],
							properties: {
								refreshToken: {
									type: 'string',
									description: 'The refresh token to user session',
									example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
								},
							},
						},
					},
				},
			},
			security: [{ BearerAuth: [] }],
			responses: {
				'200': {
					description: 'User successfully logged out',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'Logout successful',
									},
								},
							},
						},
					},
				},
				'401': {
					description: 'Unauthorized',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Unauthorized',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Authentication token is missing or invalid',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/log-out-all': {
		post: {
			summary: 'User logout',
			description: 'Logs out from all user sessions',
			tags: ['Authentication'],
			security: [{ BearerAuth: [] }],
			responses: {
				'200': {
					description: 'User successfully logged out',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'Logout successful',
									},
								},
							},
						},
					},
				},
				'401': {
					description: 'Unauthorized',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Unauthorized',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Authentication token is missing or invalid',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/public/refresh-token': {
		post: {
			summary: 'Refresh authentication tokens',
			description: 'Generates new access and refresh tokens using a valid refresh token',
			tags: ['Authentication'],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['refreshToken'],
							properties: {
								refreshToken: {
									type: 'string',
									description: 'The refresh token to use for token renewal',
									example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
								},
							},
						},
					},
				},
			},
			responses: {
				'200': {
					description: 'Tokens successfully refreshed',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'OK',
									},
									token: {
										type: 'object',
										properties: {
											accessToken: {
												type: 'string',
												description: 'New JWT access token',
												example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
											},
											refreshToken: {
												type: 'string',
												description: 'New JWT refresh token',
												example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
											},
										},
									},
								},
							},
						},
					},
				},
				'400': {
					description: 'Bad request',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Missing refresh token',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Refresh token is required',
									},
								},
							},
						},
					},
				},
				'401': {
					description: 'Unauthorized',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'UNAUTHORIZED token',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Invalid or expired refresh token',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'User not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'User not exist',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'User associated with token no longer exists',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/send-verification-code': {
		post: {
			summary: 'Send email verification code',
			description: "Sends a verification code to the authenticated user's email address",
			tags: ['Authentication'],
			security: [{ BearerAuth: [] }],
			parameters: [
				{
					in: 'header',
					name: 'Authorization',
					required: true,
					schema: {
						type: 'string',
					},
					description: 'Bearer token for authentication',
					example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
				},
			],
			responses: {
				'200': {
					description: 'Verification code successfully sent',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'OK',
									},
								},
							},
						},
					},
				},
				'401': {
					description: 'Unauthorized',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Unauthorized',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Authentication token is missing or invalid',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'User not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'User not found',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'No user found with the provided credentials',
									},
								},
							},
						},
					},
				},
				'503': {
					description: 'Service unavailable',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Service Unavailable',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Unable to send email at this time',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/verify-email': {
		post: {
			summary: 'Verify user email address',
			description: "Verifies a user's email address using the verification code sent to their email",
			tags: ['Authentication'],
			security: [{ BearerAuth: [] }],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['verificationCode'],
							properties: {
								verificationCode: {
									type: 'string',
									description: "6-digit verification code sent to user's email",
									pattern: '^[0-9]{6}$',
									example: '123456',
								},
							},
						},
					},
				},
			},
			responses: {
				'200': {
					description: 'Email successfully verified',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'Email successfully verified.',
									},
								},
							},
						},
					},
				},
				'400': {
					description: 'Bad request or invalid verification code',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Invalid verification code. Please check the code and try again.',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Invalid verification code. Please check the code and try again.',
									},
								},
							},
						},
					},
				},
				'401': {
					description: 'Unauthorized',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Unauthorized',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Authentication token is missing or invalid',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'User not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'User not found',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'No user found with the provided credentials',
									},
								},
							},
						},
					},
				},
				'409': {
					description: 'Conflict',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Verification token is missing or user is verified.',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Verification token is missing or user is verified.',
									},
								},
							},
						},
					},
				},
				'410': {
					description: 'Gone',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Verification token has expired. Please request a new one.',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Verification token has expired. Please request a new one.',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/public/request-password-reset': {
		post: {
			summary: 'Request password reset',
			description: "Sends a password recovery code to the user's email address",
			tags: ['Authentication'],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['email'],
							properties: {
								email: {
									type: 'string',
									format: 'email',
									description: "User's email address",
									example: 'user@example.com',
								},
							},
						},
					},
				},
			},
			responses: {
				'200': {
					description: 'Password recovery code sent',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'Password recovery token sent to email.',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'User not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'User not found',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'User not found',
									},
								},
							},
						},
					},
				},
				'503': {
					description: 'Service unavailable',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Service Unavailable',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Unable to send email at this time',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/auth/public/reset-password': {
		post: {
			summary: 'Reset password',
			description: "Resets the user's password using a recovery code",
			tags: ['Authentication'],
			requestBody: {
				required: true,
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['email', 'newPassword', 'recoveryCode'],
							properties: {
								email: {
									type: 'string',
									format: 'email',
									description: "User's email address",
									example: 'user@example.com',
								},
								newPassword: {
									type: 'string',
									format: 'password',
									description: "User's new password",
									example: 'newPassword123',
								},
								recoveryCode: {
									type: 'string',
									description: "Recovery code sent to user's email",
									example: '123456',
								},
							},
						},
					},
				},
			},
			responses: {
				'200': {
					description: 'Password successfully changed',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Response message',
										example: 'Password successfully changed.',
									},
								},
							},
						},
					},
				},
				'400': {
					description: 'Bad request or invalid recovery code',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Invalid verification code. Please check the code and try again.',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Invalid verification code. Please check the code and try again.',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'User not found or recovery not requested',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'User not found',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'User not found',
									},
								},
							},
						},
					},
				},
				'410': {
					description: 'Recovery code expired',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Recovery code has expired. Please request a new one.',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Recovery code has expired. Please request a new one.',
									},
								},
							},
						},
					},
				},
				'500': {
					description: 'Internal server error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Internal server error occurred',
									},
								},
							},
						},
					},
				},
			},
		},
	},
};

// Export the auth paths to be used in the main swagger configuration
export default authPaths;
