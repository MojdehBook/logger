import { createLogger, transports } from 'winston';
import Env from './config/env';
import loggerConf from './config/logger';

const logger = createLogger(loggerConf.base);

logger.add(new transports.File(loggerConf.transports.errToFile));
logger.add(new transports.Console(loggerConf.transports.console));

if (Env.NODE_ENV === 'production')
	logger.add(new transports.File(loggerConf.transports.allToFile));

export default logger;
