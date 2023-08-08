import express from 'express';
import { addTask, deleteTask, editTask, getAllTasks } from '../controllers/TaskController';

const router = express.Router();

router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').delete(deleteTask).patch(editTask)

export {
    router
}