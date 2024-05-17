import { Request, Response } from 'express';
import { getAllProducts } from '../services/productsServices';

export const getProducts = (req: Request, res: Response) => {
    try {
        const products = getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Récupération des produits impossible" });
    }
};
