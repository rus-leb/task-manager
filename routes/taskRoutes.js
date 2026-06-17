import express from 'express';
import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

/**
* @openapi
* /api/task:
* post:
* tags:
* - Task
* summary: Create a new task
* security:
* - ApiKeyAuth: []
* requestBody:
* required: true
* content:
* application/json:
* schema:
* type: object
* required:
* - description
* properties:
* description:
* type: string
* default: "Buy milk"
* responses:
* 201:
* description: Created
* 401:
* description: Unauthorized
*/
router.post('/task', checkAuth, taskController.createTask);

/**
* @openapi
* /api/task:
* get:
* tags:
* - Task
* summary: Get tasks for current user
* security:
* - ApiKeyAuth: []
* responses:
* 200:
* description: Success
*/
router.get('/task', checkAuth, taskController.getTasksByUserId);

/**
* @openapi
* /api/task/all:
* get:
* tags:
* - Task
* summary: Get all tasks (Admin only)
* security:
* - ApiKeyAuth: []
* responses:
* 200:
* description: Success
* 403:
* description: Forbidden
*/
router.get('/task/all', checkAuth, checkAdmin, taskController.getAllTasks);

/**
* @openapi
* /api/task/{id}:
* get:
* tags:
* - Task
* summary: Get task by ID
* security:
* - ApiKeyAuth: []
* parameters:
* - name: id
* in: path
* required: true
* schema:
* type: string
* responses:
* 200:
* description: Success
*/
router.get('/task/:id', checkAuth, taskController.getTask);

/**
* @openapi
* /api/task/{id}:
* put:
* tags:
* - Task
* summary: Update task by ID
* security:
* - ApiKeyAuth: []
* parameters:
* - name: id
* in: path
* required: true
* schema:
* type: string
* requestBody:
* content:
* application/json:
* schema:
* type: object
* properties:
* description:
* type: string
* completed:
* type: boolean
* default: true
* responses:
* 200:
* description: Success
*/
router.put('/task/:id', checkAuth, taskController.updateTask);

/**
* @openapi
* /api/task/{id}:
* delete:
* tags:
* - Task
* summary: Delete task by ID
* security:
* - ApiKeyAuth: []
* parameters:
* - name: id
* in: path
* required: true
* schema:
* type: string
* responses:
* 200:
* description: Success
*/
router.delete('/task/:id', checkAuth, taskController.deleteTask);

export default router;
