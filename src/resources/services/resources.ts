import { ResI } from '../../types/res';
import { Exception, StatusCodes } from '../../utils';
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

	static async createResource(resource: Partial<Resource>): Promise<ResI> {
		const newResource = await Resource.createResource(resource);

		return { msg: 'OK', data: newResource };
	}

	static async updateResource(id: number, resourceData: Partial<Resource>): Promise<ResI> {
		const resource = await Resource.getResourceById(id);

		if (!resource) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Resource not found');
		}

		const updatedResource = await Resource.updateResource(resource, resourceData);
		return { msg: 'OK', data: updatedResource };
	}

	static async deleteResource(id: number): Promise<void> {
		const resource = await Resource.getResourceById(id);

		if (!resource) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Resource not found');
		}

		await Resource.deleteResource(resource);
	}
}

export default ResourceService;
