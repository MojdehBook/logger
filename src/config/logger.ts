import { format } from 'winston';
import ENV from './env';

const base = {
	level: ENV.LOG_LEVEL ?? 'info',
	defaultMeta: { app: `MB_${ENV.NAME}` }, // Add application name to the logs
	exitOnError: false,
	format: format.combine(
		format.timestamp({ format: 'YY-MM-DD HH:mm:ss.SSS' }),
		format.errors({ stack: true }),
		format.json()
	),
};

const transports = {
	allToFile: {
		filename: 'logs/all.log',
	},
	errToFile: {
		level: 'error',
		filename: 'logs/error.log',
		handleExceptions: true,
		handleRejections: true,
	},
	console: {
		format: format.combine(
			format.colorize(), // Colorize the output in the console
			format.timestamp({ format: 'YY-MM-DD HH:mm:ss.SSS' }),
			format.printf(
				({ timestamp, level, message, stack }) =>
					`${timestamp as string} [${level}]: ${
						JSON.stringify(stack) ?? message
					}`
			)
		),
		handleExceptions: true,
		handleRejections: true,
	},
};

export default { base, transports };
