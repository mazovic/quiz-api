export interface CreateAddressI {
	address_line1: string;
	address_line2?: string;
	city: string;
	state?: string;
	country: string;
	postal_code?: string;
	nearby_landmark?: string;
}

export interface UpdateAddressI {
	address_line1?: string;
	address_line2?: string;
	city?: string;
	state?: string;
	country?: string;
	postal_code?: string;
	nearby_landmark?: string;
}
