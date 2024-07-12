// require('dotenv').config('../../../.env');

// use shell command to save env variable to a temporary file, then return the contents.
// source: https://stackoverflow.com/questions/39444467/how-to-pass-environment-variable-to-mongo-script/60192758#60192758
function getEnvVariable(envVar, defaultValue) {
  var command = run(
    'sh',
    '-c',
    `printenv --null ${envVar} >/tmp/${envVar}.txt`
  );
  // note: 'printenv --null' prevents adding line break to value
  if (command != 0) return defaultValue;
  return cat(`/tmp/${envVar}.txt`);
}

var rootUser = getEnvVariable('MONGO_ROOT_USERNAME', 'app_user');
var rootPwd = getEnvVariable('MONGO_ROOT_PASSWORD', 'app_user');
var dbUser = getEnvVariable('MONGO_DB_USERNAME', 'app_user');
var dbPwd = getEnvVariable('MONGO_DB_PASSWORD', 'app_user()');
var dbName = getEnvVariable('MONGO_DATABASE_NAME', 'default');
var collection = getEnvVariable('MONGO_DEFAULT_DATABASE_COLLECTION', 'users');

print(
  'Start #################################################################'
);

db = db.getSiblingDB('admin');

print(`Creating root user: ${rootUser}`);
db.createUser({
  user: rootUser,
  pwd: rootPwd,
  roles: [{ role: 'root', db: 'admin' }]
});

db = db.getSiblingDB(dbName);

db.createUser({
  user: dbUser,
  pwd: dbPwd,
  roles: [
    {
      role: 'readWrite',
      db: dbName
    }
  ]
});
db.createCollection(collection);

print('END #################################################################');
