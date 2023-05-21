import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', roleRoutes);

mongoose.connect('mongodb://localhost:27017/ecommdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});