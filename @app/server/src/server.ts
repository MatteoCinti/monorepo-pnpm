import cors from 'cors';
import express, { Express } from 'express';

import handleError from './error-handler';

const app: Express = express();
const port = Number(process.env.PORT ?? 4000);

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'welcome wefw sa' });
});

app.get('/serverTime', (_req, res) => {
  const localTime = new Date().toLocaleString();
  res.json({ message: localTime });
});

// Error handler middleware
app.use(handleError);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port.toString()}`);
});
