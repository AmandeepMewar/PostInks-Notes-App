import express from 'express';
import morgan from 'morgan';
import postRouter from './routes/postRoutes.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/posts', postRouter);

export default app;
