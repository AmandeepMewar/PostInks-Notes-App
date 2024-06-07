import mongoose from 'mongoose';

const connectDB = () => {
  const DB_URL = process.env.MONGODB_URL.replace(
    '<PASSWORD>',
    process.env.MONGODB_PASSWORD
  );

  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log('DB Connection Successful!!!');
    })
    .catch(() => {
      console.log('DB Connection Failed!!! Shutting down...');
      process.exit(1);
    });
};

export default connectDB;
