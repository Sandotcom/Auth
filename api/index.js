import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import user from './routes/user.js';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use('/user', user);

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 3001

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message))