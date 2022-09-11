import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './config/db.config.js';
import { logger } from './logs/loggers.logs.js';
import Products from './routes/products.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/products', Products);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
	logger.info(`----------------------------------------------`);
	logger.info(`Server started on http://localhost:${PORT} ✨`);
	logger.info(`----------------------------------------------`);
});
server.on('error', (err) => logger.error(err));
