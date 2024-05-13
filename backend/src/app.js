import express from 'express';
import morgan from 'morgan';
import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRoutes.js';
import ErrorHelper from './utils/errorHelper.js';
import globalErrorHandler from './controllers/errorController.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new ErrorHelper(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
