import express from 'express';
import * as Products from '../controllers/products.controller.js';

const router = express.Router();

router.get('/all', Products.getProducts);
router.post('/create', Products.createProduct);

export default router;
