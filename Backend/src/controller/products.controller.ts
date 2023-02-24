import * as ProductService from '../service/products.service';

export const getProduct = async (req: any, res: any) => {
	const { id } = req.params;
	const product = await ProductService.getProduct(id);
	res.status(200).send(product);
};
export const addProduct = async (req: any, res: any) => {
	const prod = req.body;
	await ProductService.addProduct(prod);
	res.status(200).send('Product added');
};
