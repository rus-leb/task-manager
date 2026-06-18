import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(["1.1.1.1", "1.0.0.1"]);

import dotenv from 'dotenv';

dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dbUri = "mongodb+srv://robberyteam7_db_user:test111@cluster0.a1uplna.mongodb.net/?appName=Cluster0"

mongoose
.connect(dbUri)
.then(() => {
    console.log('Conected to MongoDB');
})
.catch((e) => {
    console.error(e);
});