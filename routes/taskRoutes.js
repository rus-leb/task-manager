import express from 'express';
import * as taskController from '../controllers/taskControllers.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

router.post('/task', checkAuth, taskController.createTask);
router.get('/task', checkAuth, taskController.getTasksByUserId);
router.get('/task/all', checkAuth, checkAdmin, taskController.getAllTasks);
router.get('/task/:id', checkAuth, taskController.getTask);
router.put('/task/:id', checkAuth, taskController.updateTask);
router.delete('/task/:id', checkAuth, taskController.deleteTask);

export default router;