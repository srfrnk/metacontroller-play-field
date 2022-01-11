import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler'

import test from './test';

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server running on port 3000.`);
});

app.get('/', asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json({ status: 'ok' });
}));

app.post('/tests-sync', asyncHandler(test.sync));
app.post('/tests-customize', asyncHandler(test.customize));
app.post('/tests-finalize', asyncHandler(test.finalize));

app.use((err, req, res, next) => {
  console.error("Unhandled Exception:", err);
  res.status(500).send(err);
});
