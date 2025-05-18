const addressPaths = {
	'/address': {
		post: {
			summary: 'Create new address',
			description: 'Creates a new address for the user',
			tags: ['Address'],
			security: [{ BearerAuth: [] }],
			requestBody: {
				content: {
					'application/json': {
						schema: {
							type: 'object',
							required: ['address_line1', 'city', 'country'],
							properties: {
								address_line1: {
									type: 'string',
									description: 'First line of the address',
									example: '123 Main St',
								},
								address_line2: {
									type: 'string',
									description: 'Second line of the address (optional)',
									example: 'Apt 4B',
								},
								city: {
									type: 'string',
									description: 'City name',
									example: 'New York',
								},
								state: {
									type: 'string',
									description: 'State or province (optional)',
									example: 'NY',
								},
								country: {
									type: 'string',
									description: 'Country name',
									example: 'USA',
								},
								postal_code: {
									type: 'string',
									description: 'Postal or ZIP code (optional)',
									example: '10001',
								},
								nearby_landmark: {
									type: 'string',
									description: 'Nearby landmark for easier location (optional)',
									example: 'Next to Central Park',
								},
							},
						},
					},
				},
				required: true,
			},
			responses: {
				'201': {
					description: 'Address created',
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
									data: {
										type: 'array',
										description: 'List of user addresses after creation',
										items: {
											type: 'object',
											properties: {
												id: {
													type: 'integer',
													description: 'Unique identifier for the address',
													example: 1,
												},
												address_line1: {
													type: 'string',
													description: 'First line of the address',
													example: '123 Main St',
												},
												address_line2: {
													type: 'string',
													nullable: true,
													description: 'Second line of the address',
												},
												city: {
													type: 'string',
													description: 'City name',
													example: 'New York',
												},
												state: {
													type: 'string',
													nullable: true,
													description: 'State or province',
												},
												country: {
													type: 'string',
													description: 'Country name',
													example: 'USA',
												},
												postal_code: {
													type: 'string',
													nullable: true,
													description: 'Postal or ZIP code',
												},
												nearby_landmark: {
													type: 'string',
													nullable: true,
													description: 'Nearby landmark for easier location',
												},
												is_default: {
													type: 'boolean',
													description: 'Indicates if this is the default address',
													example: true,
												},
												user_id: {
													type: 'integer',
													description: 'ID of the user who owns this address',
													example: 1,
												},
												createdAt: {
													type: 'string',
													format: 'date-time',
													description: 'The date when the address was created',
													example: '2025-05-14T10:33:52.000Z',
												},
												updatedAt: {
													type: 'string',
													format: 'date-time',
													description: 'The date when the address was last updated',
													example: '2025-05-14T10:33:52.000Z',
												},
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
										example: 'No body provided',
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
										example: 'Authentication required',
									},
								},
							},
						},
					},
				},
				'418': {
					description: "I'm a teapot",
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Whimsical error message',
										example: "I'm a teapot, I cannot brew coffee",
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
										example: 'Internal server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Database connection failed',
									},
								},
							},
						},
					},
				},
			},
		},
		get: {
			summary: 'Get user addresses',
			description: 'Retrieves all addresses for the authenticated user',
			tags: ['Address'],
			security: [{ BearerAuth: [] }],
			responses: {
				'200': {
					description: 'Addresses retrieved successfully',
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
									data: {
										type: 'array',
										description: 'List of user addresses',
										items: {
											type: 'object',
											properties: {
												id: {
													type: 'integer',
													description: 'Unique identifier for the address',
													example: 1,
												},
												address_line1: {
													type: 'string',
													description: 'First line of the address',
													example: '123 Main St',
												},
												address_line2: {
													type: 'string',
													nullable: true,
													description: 'Second line of the address',
												},
												city: {
													type: 'string',
													description: 'City name',
													example: 'New York',
												},
												state: {
													type: 'string',
													nullable: true,
													description: 'State or province',
												},
												country: {
													type: 'string',
													description: 'Country name',
													example: 'USA',
												},
												postal_code: {
													type: 'string',
													nullable: true,
													description: 'Postal or ZIP code',
												},
												nearby_landmark: {
													type: 'string',
													nullable: true,
													description: 'Nearby landmark for easier location',
												},
												is_default: {
													type: 'boolean',
													description: 'Indicates if this is the default address',
													example: true,
												},
												user_id: {
													type: 'integer',
													description: 'ID of the user who owns this address',
													example: 1,
												},
												createdAt: {
													type: 'string',
													format: 'date-time',
													description: 'The date when the address was created',
													example: '2025-05-14T10:33:52.000Z',
												},
												updatedAt: {
													type: 'string',
													format: 'date-time',
													description: 'The date when the address was last updated',
													example: '2025-05-14T10:33:52.000Z',
												},
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
										example: 'Authentication required',
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
										example: 'Internal server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Database connection failed',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/address/{id}': {
		parameters: [
			{
				name: 'id',
				in: 'path',
				required: true,
				description: 'ID of the address to operate on',
				schema: {
					type: 'integer',
				},
			},
		],
		get: {
			summary: 'Get address by ID',
			description: 'Retrieves a specific address by its ID',
			tags: ['Address'],
			security: [{ BearerAuth: [] }],
			responses: {
				'200': {
					description: 'Address retrieved successfully',
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
									data: {
										type: 'object',
										properties: {
											id: {
												type: 'integer',
												description: 'Unique identifier for the address',
												example: 1,
											},
											address_line1: {
												type: 'string',
												description: 'First line of the address',
												example: '123 Main St',
											},
											address_line2: {
												type: 'string',
												nullable: true,
												description: 'Second line of the address',
											},
											city: {
												type: 'string',
												description: 'City name',
												example: 'New York',
											},
											state: {
												type: 'string',
												nullable: true,
												description: 'State or province',
											},
											country: {
												type: 'string',
												description: 'Country name',
												example: 'USA',
											},
											postal_code: {
												type: 'string',
												nullable: true,
												description: 'Postal or ZIP code',
											},
											nearby_landmark: {
												type: 'string',
												nullable: true,
												description: 'Nearby landmark for easier location',
											},
											is_default: {
												type: 'boolean',
												description: 'Indicates if this is the default address',
												example: true,
											},
											user_id: {
												type: 'integer',
												description: 'ID of the user who owns this address',
												example: 1,
											},
											createdAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was created',
												example: '2025-05-14T10:33:52.000Z',
											},
											updatedAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was last updated',
												example: '2025-05-14T10:33:52.000Z',
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
										example: 'Authentication required',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'Address not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Address not found',
									},
								},
							},
						},
					},
				},
				'418': {
					description: "I'm a teapot",
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Whimsical error message',
										example: 'Param validation',
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
										example: 'Internal server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Database connection failed',
									},
								},
							},
						},
					},
				},
			},
		},
		put: {
			summary: 'Update address',
			description: 'Updates an existing address by its ID',
			tags: ['Address'],
			security: [{ BearerAuth: [] }],
			requestBody: {
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								address_line1: {
									type: 'string',
									description: 'First line of the address',
									example: '123 Main St',
								},
								address_line2: {
									type: 'string',
									description: 'Second line of the address (optional)',
									example: 'Apt 4B',
								},
								city: {
									type: 'string',
									description: 'City name',
									example: 'New York',
								},
								state: {
									type: 'string',
									description: 'State or province (optional)',
									example: 'NY',
								},
								country: {
									type: 'string',
									description: 'Country name',
									example: 'USA',
								},
								postal_code: {
									type: 'string',
									description: 'Postal or ZIP code (optional)',
									example: '10001',
								},
								nearby_landmark: {
									type: 'string',
									description: 'Nearby landmark for easier location (optional)',
									example: 'Next to Central Park',
								},
								is_default: {
									type: 'boolean',
									description: 'Set as default address',
									example: true,
								},
							},
						},
					},
				},
				required: true,
			},
			responses: {
				'200': {
					description: 'Address updated successfully',
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
									data: {
										type: 'object',
										properties: {
											id: {
												type: 'integer',
												description: 'Unique identifier for the address',
												example: 1,
											},
											address_line1: {
												type: 'string',
												description: 'First line of the address',
												example: '123 Main St',
											},
											address_line2: {
												type: 'string',
												nullable: true,
												description: 'Second line of the address',
											},
											city: {
												type: 'string',
												description: 'City name',
												example: 'New York',
											},
											state: {
												type: 'string',
												nullable: true,
												description: 'State or province',
											},
											country: {
												type: 'string',
												description: 'Country name',
												example: 'USA',
											},
											postal_code: {
												type: 'string',
												nullable: true,
												description: 'Postal or ZIP code',
											},
											nearby_landmark: {
												type: 'string',
												nullable: true,
												description: 'Nearby landmark for easier location',
											},
											is_default: {
												type: 'boolean',
												description: 'Indicates if this is the default address',
												example: true,
											},
											user_id: {
												type: 'integer',
												description: 'ID of the user who owns this address',
												example: 1,
											},
											createdAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was created',
												example: '2025-05-14T10:33:52.000Z',
											},
											updatedAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was last updated',
												example: '2025-05-14T10:34:52.000Z',
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
										example: 'No body provided',
									},
								},
							},
						},
					},
				},
				'418': {
					description: "I'm a teapot",
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Whimsical error message',
										example: "I'm a teapot, I cannot brew coffee",
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
										example: 'Authentication required',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'Address not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Address not found',
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
										example: 'Internal server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Database connection failed',
									},
								},
							},
						},
					},
				},
			},
		},
		delete: {
			summary: 'Delete address',
			description: 'Deletes an address by its ID',
			tags: ['Address'],
			security: [{ BearerAuth: [] }],
			responses: {
				'204': {
					description: 'Address deleted successfully (no content)',
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
										example: 'Authentication required',
									},
								},
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
									msg: {
										type: 'string',
										description: 'Error message',
										example:
											'Cannot delete default address. Please set another address as default first.',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'Address not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Address not found',
									},
								},
							},
						},
					},
				},
				'418': {
					description: "I'm a teapot",
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Whimsical error message',
										example: 'Param validation',
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
										example: 'Internal server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Database connection failed',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/address/{id}/default': {
		parameters: [
			{
				name: 'id',
				in: 'path',
				required: true,
				description: 'ID of the address to set as default',
				schema: {
					type: 'integer',
				},
			},
		],
		patch: {
			summary: 'Set address as default',
			description: 'Sets the specified address as the default address for the authenticated user',
			tags: ['Address'],
			security: [{ BearerAuth: [] }],
			responses: {
				'200': {
					description: 'Address set as default successfully',
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
									data: {
										type: 'object',
										properties: {
											id: {
												type: 'integer',
												description: 'Unique identifier for the address',
												example: 1,
											},
											address_line1: {
												type: 'string',
												description: 'First line of the address',
												example: '123 Main St',
											},
											address_line2: {
												type: 'string',
												nullable: true,
												description: 'Second line of the address',
											},
											city: {
												type: 'string',
												description: 'City name',
												example: 'New York',
											},
											state: {
												type: 'string',
												nullable: true,
												description: 'State or province',
											},
											country: {
												type: 'string',
												description: 'Country name',
												example: 'USA',
											},
											postal_code: {
												type: 'string',
												nullable: true,
												description: 'Postal or ZIP code',
											},
											nearby_landmark: {
												type: 'string',
												nullable: true,
												description: 'Nearby landmark for easier location',
											},
											is_default: {
												type: 'boolean',
												description: 'Indicates if this is the default address',
												example: true,
											},
											user_id: {
												type: 'integer',
												description: 'ID of the user who owns this address',
												example: 1,
											},
											createdAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was created',
												example: '2025-05-14T10:33:52.000Z',
											},
											updatedAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was last updated',
												example: '2025-05-14T10:33:52.000Z',
											},
										},
									},
								},
							},
						},
					},
				},
				'400': {
					description: ' Bad Request',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example:
											'Cannot set the same address as default. The selected address is already set as default.',
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
										example: 'Authentication required',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'Address not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'Address not found',
									},
								},
							},
						},
					},
				},
				'418': {
					description: "I'm a teapot",
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Whimsical error message',
										example: 'Param validation',
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
										example: 'Internal server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Database connection failed',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	'/address/default': {
		get: {
			summary: 'Get default address',
			description: 'Retrieves the default address for the authenticated user',
			tags: ['Address'],
			security: [{ BearerAuth: [] }],
			responses: {
				'200': {
					description: 'Default address retrieved successfully',
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
									data: {
										type: 'object',
										properties: {
											id: {
												type: 'integer',
												description: 'Unique identifier for the address',
												example: 1,
											},
											address_line1: {
												type: 'string',
												description: 'First line of the address',
												example: '123 Main St',
											},
											address_line2: {
												type: 'string',
												nullable: true,
												description: 'Second line of the address',
											},
											city: {
												type: 'string',
												description: 'City name',
												example: 'New York',
											},
											state: {
												type: 'string',
												nullable: true,
												description: 'State or province',
											},
											country: {
												type: 'string',
												description: 'Country name',
												example: 'USA',
											},
											postal_code: {
												type: 'string',
												nullable: true,
												description: 'Postal or ZIP code',
											},
											nearby_landmark: {
												type: 'string',
												nullable: true,
												description: 'Nearby landmark for easier location',
											},
											is_default: {
												type: 'boolean',
												description: 'Indicates if this is the default address',
												example: true,
											},
											user_id: {
												type: 'integer',
												description: 'ID of the user who owns this address',
												example: 1,
											},
											createdAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was created',
												example: '2025-05-14T10:33:52.000Z',
											},
											updatedAt: {
												type: 'string',
												format: 'date-time',
												description: 'The date when the address was last updated',
												example: '2025-05-14T10:33:52.000Z',
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
										example: 'Authentication required',
									},
								},
							},
						},
					},
				},
				'404': {
					description: 'Default address not found',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									msg: {
										type: 'string',
										description: 'Error message',
										example: 'No default address found',
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
										example: 'Internal server error',
									},
									error: {
										type: 'string',
										description: 'Error details',
										example: 'Database connection failed',
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

export default addressPaths;
