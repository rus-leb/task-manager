import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import swaggerRoutes from './config/swagger.js';

const app = express();
const port = 3000;

app.use(express.static('publick'))

app.use(bodyParser.json());

app.use(swaggerRoutes);
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.listen(port, () => {
console.log(`Server listening on port ${port}`);
console.log(`Swagger documentation available at http://localhost:${port}/docs`);
});
