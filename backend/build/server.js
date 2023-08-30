import v1Router from './api/v1/routes/router';
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
const PORT = process.env.PORT || '3000';
const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/v1/', v1Router);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));