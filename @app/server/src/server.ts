import './init-dotenv';

import cors from 'cors';
import express, { Express } from 'express';

import handleError from './error-handler';
import mongoDb from './providers/mongo';
import mysql from './providers/mysql';

const app: Express = express();
const port = Number(process.env.PORT ?? 4000);

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', async (_req, res) => {
  res.json({ message: 'Welcome' });
});

app.get('/checkConnections', async (_req, res) => {
  try {
    const localTime = new Date().toLocaleString();

    res.json({
      serverTime: localTime,
      mongodbConnection: !!mongoDb.get()
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// Error handler middleware
app.use(handleError);

async function init() {
  try {
    await mysql.connect();
    await mongoDb.connect();
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      "Error connecting to the database, can't initialise server",
      error
    );
    process.exit(1);
  }
}

init();
