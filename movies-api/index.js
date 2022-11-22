import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genrerouter from './api/genres';
import './db';
import './seedData'



dotenv.config();

const app = express();

const port = process.env.PORT;


app.use('/api/movies', moviesRouter);
app.use('/api/genres',genrerouter);
app.use(express.json());

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});