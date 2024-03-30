import express from 'express';
import morgan from 'morgan';
import postRouter from './routes/postRoutes.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
  next();
});

export default app;
