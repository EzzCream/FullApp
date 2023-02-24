import { ProductsModels } from '../model/products.model';

export const getProduct = async (id: string) => {
	const product = await ProductsModels.findOne({ id });
	return product;
};
