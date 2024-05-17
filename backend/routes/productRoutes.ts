import express from 'express';
import { getProducts } from '../controllers/productController';
import { verifyToken } from '../middlewares/jwt';

const router = express.Router();

router.get('/products', verifyToken, getProducts);

export default router;
