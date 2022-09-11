import { logger } from '../logs/loggers.logs.js';
import { ProductsModel } from '../models/products.model.js';

export const getProducts = async (req, res) => {
	try {
		const response = await ProductsModel.find();
		res.status(200).json(response);
	} catch (error) {
		logger.error(error);
	}
};

export const createProduct = async (req, res) => {
	try {
		const { body } = req;
		res.status(200).json(body);
	} catch (error) {
		logger.error(error);
	}
};
