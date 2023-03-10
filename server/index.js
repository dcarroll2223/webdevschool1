import express from 'express';
import path from 'path';
import cors from 'cors';
import { config } from 'dotenv';
import studentRouter from './src/routes/studentRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
config();

app.use('/api', studentRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
);

app.use((req, res, next) => {
  res.status(404).send({ message: 'endpoint not found' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server connected at http://localhost:${port}`);
});
