import { Table, Column, Model, DataType } from 'sequelize-typescript';

export enum ResourceType {
	BOOK = 'book',
	VIDEO = 'video',
	LINK = 'link',
}

export enum ResourceLevel {
	BEGINNER = 'beginner',
	INTERMEDIATE = 'intermediate',
	ADVANCED = 'advanced',
}

@Table({
	tableName: 'resources',
	timestamps: true,
	underscored: true,
})
export class Resource extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id!: number;

	@Column({
		type: DataType.ENUM(...Object.values(ResourceType)),
		allowNull: false,
	})
	resource_type!: ResourceType;

	@Column({
		type: DataType.ENUM(...Object.values(ResourceLevel)),
		allowNull: false,
	})
	resource_level!: ResourceLevel;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	resource_name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	resource_url!: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	resource_description?: string;

	static async listResourcesByLevel(resourceLevel: ResourceLevel): Promise<Resource[]> {
		return await Resource.findAll({
			where: {
				resource_level: resourceLevel,
			},
		});
	}

	static async listResources(): Promise<Resource[]> {
		return await Resource.findAll();
	}
}
