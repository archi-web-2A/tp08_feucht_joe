import express from 'express';
import { getProducts, searchProducts } from '../controllers/productController';
import { verifyToken } from '../middlewares/jwt';

const router = express.Router();

router.get('/products', verifyToken, getProducts);
router.get('/searchProducts', searchProducts);

export default router;
