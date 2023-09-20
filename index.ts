'use strict'
import express, { Express } from 'express'
import cors from 'cors'
import pool from './getDbClient'
import router from './src/routes/index.router';
import { jsonErrorHandler } from './src/middleware/errorHandling.middleware';
import createSchema from './initSchema';

const app: Express = express()
const PORT: number = parseInt(process.env.PORT || '3000');
const HOST = '0.0.0.0'
const DB_NAME = process.env.DB_NAME;

if (!PORT) {
  console.log(`PORT must be set!`);
  process.exit(1);
}


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
  res.json({ info: 'App is running!' })
})

pool.query('SELECT 1', (err) => {
  if (err) {
    console.error('Failed to connect to the database!', err);
    process.exit(1);
  } else {
    pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\'', (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Tables in the database:', result.rows.map(row => row.table_name));
    });
    app.listen(PORT, HOST, () => {
      console.log(`Running on http://${HOST}:${PORT}`);
      console.log(`Connected to database "${DB_NAME}"`);
    });
  }
});

app.use(jsonErrorHandler)
