import { commonChains, validator } from '../../utils/index';

const createAddress = validator.generator({
	schema: {
		address_line1: commonChains.stringRequired,
		address_line2: commonChains.stringOptional,
		city: commonChains.namesRequired,
		state: commonChains.stringOptional,
		country: commonChains.namesRequired,
		postal_code: commonChains.stringOptional,
		nearby_landmark: commonChains.stringOptional,
	},
	type: 'body',
});

const updateAddress = validator.generator(
	{
		schema: {
			address_line1: commonChains.stringOptional,
			address_line2: commonChains.stringOptional,
			city: commonChains.namesOptional,
			state: commonChains.stringOptional,
			country: commonChains.namesOptional,
			postal_code: commonChains.stringOptional,
			nearby_landmark: commonChains.stringOptional,
		},
		type: 'body',
	},
	{
		schema: {
			id: commonChains.numberRequired,
		},
		type: 'params',
	}
);

const validateParamId = validator.generator({
	schema: {
		id: commonChains.numberRequired,
	},
	type: 'params',
});

export default { createAddress, updateAddress, validateParamId };
