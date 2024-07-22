import mysql from 'mysql2';

const mysqlUser = process.env.MYSQL_USER;
const mysqlPassword = process.env.MYSQL_PASSWORD;

const con = mysql.createConnection({
  host: 'mysql',
  user: mysqlUser,
  password: mysqlPassword
});

async function connect(callback?: () => void) {
  try {
    const connection = await con.connect();
    // eslint-disable-next-line no-console
    console.log('Mysql Connected!');

    if (callback) return callback();

    return connection;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to the database', error);
    throw error;
  }
}

export default { connect };
