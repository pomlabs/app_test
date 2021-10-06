require('dotenv').config();

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_INITDB_DATABASE,
  MONGO_INITDB_USER_USERNAME,
  MONGO_INITDB_USER_PASSWORD
} = process.env;

export const MONGO_ENV = {
  host: MONGO_HOST,
  port: MONGO_PORT,
  db: MONGO_INITDB_DATABASE,
  username: MONGO_INITDB_USER_USERNAME,
  password: MONGO_INITDB_USER_PASSWORD
};
