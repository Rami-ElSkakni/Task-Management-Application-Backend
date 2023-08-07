import express from 'express';
import { getAllTasks } from '../controllers/TaskController';

const router = express.Router();

router.get('/', getAllTasks)

export {
    router
}