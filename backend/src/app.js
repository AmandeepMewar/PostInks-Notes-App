import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

import ApiError from './utils/ApiError.js';
import globalErrorHandler from './controllers/errorController.js';
import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.enable('trust proxy');

app.use(express.static('public'));

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

app.use(mongoSanitize());

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);
app.get('/api/v1/test', (req, res, next) => {
  const error = new Error('Test Error');
  next(error);
});

app.all('*', (req, res, next) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
