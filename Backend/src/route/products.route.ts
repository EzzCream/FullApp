import * as Products from '../controller/products.controller';
import express from 'express';

const router = express.Router();

router.get('/:id', Products.getProduct);

router.post('/add', Products.addProduct);

export default router;
