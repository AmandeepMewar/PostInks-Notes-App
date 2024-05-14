import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/connectDB.js';

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception!!! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: '../.env' });

connectDB();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Application running at port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhanlded Rejection!!! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
