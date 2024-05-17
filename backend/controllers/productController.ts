// productController.js
import { Request, Response } from 'express';
import { getAllProducts, searchProducts as searchProductsService } from '../services/productsServices';

export const getProducts = (req: Request, res: Response) => {
    try {
        const products = getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Récupération des produits impossible" });
    }
};

export const searchProducts = (req: Request, res: Response) => {
    try {
        const searchQuery = req.query.q;
        if (!searchQuery) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const products = searchProductsService(searchQuery);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Product search failed" });
    }
};
