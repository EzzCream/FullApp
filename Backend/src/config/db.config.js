import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { logger } from '../logs/loggers.logs.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
	try {
		if (err) {
			logger.error(err);
		} else {
			logger.info('Conectados a Mongo ✨');
			logger.info(`----------------------------------------------`);
		}
	} catch (error) {
		logger.error(error);
	}
});

export default mongoose;
