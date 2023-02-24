import { ProductsModels } from '../model/products.model';
import { Product } from './product.interface';

export const getProduct = async (id: string) => {
	const product = await ProductsModels.findOne({ id });
	return product;
};
export const addProduct = async (prod: Product) => {
	await ProductsModels.create(prod);
};
