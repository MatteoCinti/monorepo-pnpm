import { NextFunction, Request, Response } from 'express';

function handleError(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const statusCode = res.statusCode || 500;
  // eslint-disable-next-line no-console
  console.error('Oops something went wrong', err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
}

export default handleError;
