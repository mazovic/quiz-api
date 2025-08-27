import { ResI } from '../../types/res';
import { ResourceLevel } from '../models/Resouces';
import { Resource } from '../models/Resouces';

class ResourceService {
	static async listResourcesByLevel(resourceLevel: ResourceLevel): Promise<ResI> {
		const resources = await Resource.listResourcesByLevel(resourceLevel);
		return { msg: 'OK', data: resources };
	}

	static async listResources(): Promise<ResI> {
		const resources = await Resource.listResources();
		return { msg: 'OK', data: resources };
	}
}

export default ResourceService;
