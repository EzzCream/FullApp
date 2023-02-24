import * as ProductService from '../service/products.service';

export const getProduct = async (req: any, res: any) => {
	const { id } = req.params;
	const product = await ProductService.getProduct(id);
	console.log(product);
	res.status(200).send(product);
};
