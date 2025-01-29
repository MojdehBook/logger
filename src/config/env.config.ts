import dotenv from 'dotenv';

dotenv.config();
const env = process.env;

export default {
	NAME: env.NAME,
	VERSION: env.VERSION,
	ENV: env.NODE_ENV,
	HOST: env.HOST,
	PORT: env.PORT,
	LOG_LEVEL: env.LOG_LEVEL,

	DB_USER: env.DB_USER,
	DB_PASS: env.DB_PASS,
	DB_NAME: env.DB_NAME,
	DB_HOST: env.DB_HOST,
	DB_PORT: env.DB_PORT,

	SMSIR_ACCESS_KEY: env.SMSIR_ACCESS_KEY,
	SMSIR_LINE_NUMBER: env.SMSIR_LINE_NUMBER,

	JWT_SECRET: env.JWT_SECRET,
	JWT_REFRESH_SECRET: env.JWT_REFRESH_SECRET,

	FRONT_URL: env.FRONT_URL,
};
