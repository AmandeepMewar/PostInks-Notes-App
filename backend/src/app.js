import express from 'express';
import morgan from 'morgan';
import postRouter from './routes/postRoutes.js';
import ErrorHelper from './utils/errorHelper.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
  next(new ErrorHelper(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
