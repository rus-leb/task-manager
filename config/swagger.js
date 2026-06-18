import swaggerUi from 'swagger-ui-express';
import express from 'express';

const router = express.Router();

const swaggerDocument = {
openapi: '3.0.0',
info: { title: 'Task Manager API', version: '1.0.0' },
paths: {
'/api/auth/register': { post: { tags: ['Auth'], summary: 'Register' } },
'/api/auth/login': { post: { tags: ['Auth'], summary: 'Login' } },
'/api/task': {
post: { tags: ['Task'], summary: 'Create task' },
get: { tags: ['Task'], summary: 'Get tasks' }
}
}
};