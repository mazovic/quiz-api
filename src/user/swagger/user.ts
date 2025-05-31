const userPaths = {
	'/userss': {
		get: {
			tags: ['users'],
			summary: 'Get all users',
			description: 'Get all users',
			responses: {
				'200': {
					description: 'OK',
					content: {
						'application/json': {
							schema: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										id: { type: 'number' },
										firstname: { type: 'string' },
										lastname: { type: 'string' },
										email: { type: 'string' },
										role_id: { type: 'number' },
										profile_status: { type: 'string' },
										is_verified: { type: 'boolean' },
										preferred_language: { type: 'string' },
										preferred_currency: { type: 'string' },
										created_at: { type: 'string' },
										updated_at: { type: 'string' },
										deleted_at: { type: 'string' },
									},
									required: [
										'id',
										'firstname',
										'lastname',
										'email',
										'role_id',
										'profile_status',
										'is_verified',
										'preferred_language',
										'preferred_currency',
										'created_at',
										'updated_at',
										'deleted_at',
									],
									additionalProperties: false,
								},
								example: {
									id: 1,
									firstname: 'John',
									lastname: 'Doe',
									email: 'john.doe@example.com',
									role_id: 1,
									profile_status: 'active',
									is_verified: true,
									preferred_language: 'en',
									preferred_currency: 'USD',
									created_at: '2021-01-01',
									updated_at: '2021-01-01',
									deleted_at: null,
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
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'403': {
					description: 'Forbidden',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'500': {
					description: 'Internal Server Error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
			},
		},
	},
	'/users/{id}': {
		get: {
			tags: ['users'],
			summary: 'Get user by id',
			description: 'Get user by id',
			parameters: [
				{
					name: 'id',
					in: 'path',
					required: true,
					schema: {
						type: 'number',
					},
				},
			],
			responses: {
				'200': {
					msg: 'OK',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									id: { type: 'number' },
									firstname: { type: 'string' },
									lastname: { type: 'string' },
									email: { type: 'string' },
									role_id: { type: 'number' },
									profile_status: { type: 'string' },
									is_verified: { type: 'boolean' },
									preferred_language: { type: 'string' },
									preferred_currency: { type: 'string' },
									created_at: { type: 'string' },
									updated_at: { type: 'string' },
									deleted_at: { type: 'string' },
								},
								required: ['id', 'firstname', 'lastname'],
								additionalProperties: false,
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
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'403': {
					description: 'Forbidden',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'404': {
					description: 'Not Found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'418': {
					description: 'I am a teapot',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'500': {
					description: 'Internal Server Error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
			},
		},
		delete: {
			tags: ['users'],
			summary: 'Delete user by id',
			description: 'Delete user by id',
			parameters: [
				{
					name: 'id',
					in: 'path',
					required: true,
					schema: { type: 'number' },
				},
			],
			responses: {
				'200': {
					msg: 'OK',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									id: { type: 'number' },
									firstname: { type: 'string' },
									lastname: { type: 'string' },
									email: { type: 'string' },
									role_id: { type: 'number' },
									profile_status: { type: 'string' },
									is_verified: { type: 'boolean' },
									preferred_language: { type: 'string' },
									preferred_currency: { type: 'string' },
									created_at: { type: 'string' },
									updated_at: { type: 'string' },
									deleted_at: { type: 'string' },
								},
								required: ['id', 'firstname', 'lastname'],
								additionalProperties: false,
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
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'403': {
					description: 'Forbidden',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'404': {
					description: 'Not Found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'418': {
					description: 'I am a teapot',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'500': {
					description: 'Internal Server Error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
			},
		},
	},
	'/users/{id}/role': {
		put: {
			tags: ['users'],
			summary: 'Update user role by id',
			description: 'Update user role by id',
			parameters: [
				{
					name: 'id',
					in: 'path',
					required: true,
					schema: { type: 'number' },
				},
			],
			requestBody: {
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								role: { type: 'string' },
							},
							required: ['role'],
							additionalProperties: false,
						},
					},
				},
			},

			responses: {
				'200': {
					msg: 'OK',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									id: { type: 'number' },
									firstname: { type: 'string' },
									lastname: { type: 'string' },
									email: { type: 'string' },
									role_id: { type: 'number' },
									profile_status: { type: 'string' },
									is_verified: { type: 'boolean' },
									preferred_language: { type: 'string' },
									preferred_currency: { type: 'string' },
									created_at: { type: 'string' },
									updated_at: { type: 'string' },
									deleted_at: { type: 'string' },
								},
								required: ['id', 'firstname', 'lastname'],
								additionalProperties: false,
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
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'403': {
					description: 'Forbidden',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'404': {
					description: 'Not Found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'418': {
					description: 'I am a teapot',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'500': {
					description: 'Internal Server Error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
			},
		},
	},
	'/users/{id}/ban': {
		post: {
			tags: ['users'],
			summary: 'Ban user by id',
			description: 'Ban user by id',
			parameters: [
				{
					name: 'id',
					in: 'path',
					required: true,
					schema: { type: 'number' },
				},
			],
			responses: {
				'200': {
					msg: 'OK',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									id: { type: 'number' },
									firstname: { type: 'string' },
									lastname: { type: 'string' },
									email: { type: 'string' },
									role_id: { type: 'number' },
									profile_status: { type: 'string' },
									is_verified: { type: 'boolean' },
									preferred_language: { type: 'string' },
									preferred_currency: { type: 'string' },
									created_at: { type: 'string' },
									updated_at: { type: 'string' },
									deleted_at: { type: 'string' },
								},
								required: ['id', 'firstname', 'lastname'],
								additionalProperties: false,
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
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'403': {
					description: 'Forbidden',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'404': {
					description: 'Not Found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'418': {
					description: 'I am a teapot',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'500': {
					description: 'Internal Server Error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
			},
		},
	},
	'/users/{id}/unban': {
		post: {
			tags: ['users'],
			summary: 'Unban user by id',
			description: 'Unban user by id',
			parameters: [
				{
					name: 'id',
					in: 'path',
					required: true,
					schema: { type: 'number' },
				},
			],
			responses: {
				'200': {
					msg: 'OK',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									id: { type: 'number' },
									firstname: { type: 'string' },
									lastname: { type: 'string' },
									email: { type: 'string' },
									role_id: { type: 'number' },
									profile_status: { type: 'string' },
									is_verified: { type: 'boolean' },
									preferred_language: { type: 'string' },
									preferred_currency: { type: 'string' },
									created_at: { type: 'string' },
									updated_at: { type: 'string' },
									deleted_at: { type: 'string' },
								},
								required: ['id', 'firstname', 'lastname'],
								additionalProperties: false,
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
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'403': {
					description: 'Forbidden',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'404': {
					description: 'Not Found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'418': {
					description: 'I am a teapot',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'500': {
					description: 'Internal Server Error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
			},
		},
	},
	'/users/{id}/force-reset-password': {
		post: {
			tags: ['users'],
			summary: 'Force reset password by id',
			description: 'Force reset password by id',
			parameters: [
				{
					name: 'id',
					in: 'path',
					required: true,
					schema: { type: 'number' },
				},
			],
			responses: {
				'200': {
					msg: 'OK',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									id: { type: 'number' },
									firstname: { type: 'string' },
									lastname: { type: 'string' },
									email: { type: 'string' },
									role_id: { type: 'number' },
									profile_status: { type: 'string' },
									is_verified: { type: 'boolean' },
									preferred_language: { type: 'string' },
									preferred_currency: { type: 'string' },
									created_at: { type: 'string' },
									updated_at: { type: 'string' },
									deleted_at: { type: 'string' },
								},
								required: ['id', 'firstname', 'lastname'],
								additionalProperties: false,
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
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'403': {
					description: 'Forbidden',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'404': {
					description: 'Not Found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'418': {
					description: 'I am a teapot',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
				'500': {
					description: 'Internal Server Error',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: { type: 'string' },
								},
								required: ['message'],
								additionalProperties: false,
							},
						},
					},
				},
			},
		},
	},
};

export default userPaths;
