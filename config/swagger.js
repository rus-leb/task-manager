import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const router = express.Router();

const options = {
definition: {
openapi: '3.0.0',
info: {
title: 'Task Manager API',
version: '1.0.0',
description: 'Task Manager API Implementation',
},
servers: [
{
url: 'http://localhost:3000',
description: 'Development server',
},
],
components: {
securitySchemes: {
ApiKeyAuth: {
type: 'apiKey',
in: 'header',
name: 'user-id',
},
},
},
},
apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

router.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;