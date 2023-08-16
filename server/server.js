import { handler } from '../build/handler.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.use(handler);

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});