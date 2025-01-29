import dotenv from 'dotenv';

dotenv.config();
const env = process.env;

export default {
	ENV: env.ENV,
	LOG_LEVEL: env.LOG_LEVEL,
	NAME: env.NAME,
};
