import { MongoClient } from 'mongodb';

const dbUser = process.env.MONGO_DB_USERNAME;
const dbPsw = process.env.MONGO_DB_PASSWORD;
const dbName = process.env.MONGO_DATABASE_NAME;

const mongoDbUrl = `mongodb://${dbUser}:${dbPsw}@mongo:27017/${dbName}?authMechanism=DEFAULT`;
let mongodb: MongoClient;

async function connect(callback?: () => void) {
  try {
    const client = new MongoClient(mongoDbUrl);
    await client.connect();
    mongodb = client;

    if (callback) return callback();

    return mongodb;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to the database', error);
    return error;
  }
}
async function get() {
  try {
    if (mongodb) return mongodb;
    return await connect();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to the database', error);
    return error;
  }
}

function close() {
  return mongodb.close();
}

function db() {
  return mongodb.db(dbName);
}

export default { connect, get, close, db };
