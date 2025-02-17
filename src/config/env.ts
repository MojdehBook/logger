import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

const vars = {
  ENV: env.ENV,
  LOG_LEVEL: env.LOG_LEVEL,
  NAME: env.NAME,
};

const emptyKeys = Object.entries(vars)
  .filter(([_, value]) => !value)
  .map(([key, _]) => `"${key}"`)
  .join(', ');

if (emptyKeys.length)
  throw Error(`Logger: Following Env is required: ${emptyKeys}`);

export default vars;
