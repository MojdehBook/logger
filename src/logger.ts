import { createLogger, transports } from 'winston';
import Env from '../config/env.config';
import loggerConf from '../config/logger';

const logger = createLogger(loggerConf.base);

logger.add(new transports.File(loggerConf.transports.errToFile));

if (Env.ENV === 'production')
	logger.add(new transports.File(loggerConf.transports.allToFile));
else logger.add(new transports.Console(loggerConf.transports.console));

export default logger;
