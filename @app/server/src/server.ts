import express, { Express } from 'express';

import handleError from './errorHandler';

const app: Express = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'ok' });
});

/* Error handler middleware */
app.use(handleError);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});