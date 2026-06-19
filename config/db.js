import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(["1.1.1.1", "1.0.0.1"]);

import dotenv from 'dotenv';

dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dbUri = process.env.MONGO_URI;

mongoose
.connect(dbUri)
.then(() => {
    console.log('Conected to MongoDB');
})
.catch((e) => {
    console.error(e);
});