import express from 'express';
import * as authController from '../controllers/authControllers.js';

const router = express.Router();

/**
* @openapi
* /api/auth/register:
* post:
* tags:
* - Authentication
* summary: Register a new user
* requestBody:
* required: true
* content:
* application/json:
* schema:
* type: object
* required:
* - username
* - email
* - password
* properties:
* username:
* type: string
* default: "JohnWick"
* firstName:
* type: string
* default: "John"
* lastName:
* type: string
* default: "Wick"
* email:
* type: string
* default: "john@example.com"
* password:
* type: string
* default: "12345678"
* role:
* type: string
* enum: [user, admin]
* default: "user"
* responses:
* 201:
* description: Created
* 400:
* description: Bad Request
*/
router.post('/auth/register', authController.register);

/**
* @openapi
* /api/auth/login:
* post:
* tags:
* - Authentication
* summary: User login
* requestBody:
* required: true
* content:
* application/json:
* schema:
* type: object
* required:
* - email
* - password
* properties:
* email:
* type: string
* default: "john@example.com"
* password:
* type: string
* default: "12345678"
* responses:
* 200:
* description: Success
* 401:
* description: Unauthorized
*/
router.post('/auth/login', authController.login);

export default router;