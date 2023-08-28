import express from 'express';
import * as dotenv from 'dotenv';
import { getAll, getSingle } from '../mentorShip/controllers/userController';
dotenv.config();
const router = express.Router();
router.get('/getAll', getAll);
router.get('/getUser', getSingle);
export default router;
