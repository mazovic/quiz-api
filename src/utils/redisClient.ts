import Redis from 'ioredis';
import { logger } from './logger';

export interface RedisConfig {
	host?: string;
	port?: number;
	password?: string;
	db?: number;
	tls?: boolean;
}

const defaultConfig: RedisConfig = {
	host: process.env.REDIS_HOST || 'localhost',
	port: Number(process.env.REDIS_PORT) || 6379,
	password: process.env.REDIS_PASSWORD || undefined,
	db: Number(process.env.REDIS_DB) || 0,
	tls: process.env.REDIS_TLS === 'true' || false,
};

export class RedisClient {
	private static instance: Redis | null = null;

	public static getInstance(config: RedisConfig = defaultConfig): Redis {
		if (!RedisClient.instance) {
			RedisClient.instance = new Redis({
				host: config.host,
				port: config.port,
				password: config.password,
				db: config.db,
				tls: config.tls ? {} : undefined,
			});

			RedisClient.instance.on('connect', () => {
				logger.info('Connected to Redis server');
			});

			RedisClient.instance.on('error', (err) => {
				logger.error('Redis connection error:', err);
			});
		}

		return RedisClient.instance;
	}

	public static async close(): Promise<void> {
		if (RedisClient.instance) {
			await RedisClient.instance.quit();
			RedisClient.instance = null;
			logger.info('Redis connection closed');
		}
	}
}

export default RedisClient.getInstance();
