import { ResI } from '../../types/res';
import { ResourceLevel } from '../models/Resouces';
import { Resource } from '../models/Resouces';

class ResourceService {
	static async listResources(resourceLevel: ResourceLevel): Promise<ResI> {
		const resources = await Resource.listResources(resourceLevel);
		return { msg: 'OK', data: resources };
	}
}

export default ResourceService;
