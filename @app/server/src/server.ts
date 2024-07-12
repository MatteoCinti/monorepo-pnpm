import 'dotenv/config';

import cors from 'cors';
import express, { Express } from 'express';

import handleError from './error-handler';
import mongoDb from './providers/mongo';

const app: Express = express();
const port = Number(process.env.PORT ?? 4000);

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', async (_req, res) => {
  res.json({ message: 'welcome' });
});

app.get('/serverTime', async (_req, res) => {
  try {
    const localTime = new Date().toLocaleString();

    res.json({
      serverTime: localTime,
      dbConnection: !!mongoDb.get()
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// Error handler middleware
app.use(handleError);

mongoDb.connect(() => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  });
});
