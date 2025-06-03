import { ResI } from '../../types/res';
import { ResourceLevel, ResourceType } from '../models/Resouces';
import { Resource } from '../models/Resouces';

class ResourceService {
	static async listResources(resourceType: ResourceType, resourceLevel: ResourceLevel): Promise<ResI> {
		const resources = await Resource.listResources(resourceType, resourceLevel);
		return { msg: 'OK', data: resources };
	}
}

export default ResourceService;
