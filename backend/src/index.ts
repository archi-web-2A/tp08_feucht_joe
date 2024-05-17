import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes'; // Importez les routes de produits
import authRoutes from './routes/authRoutes'; // Importez les routes d'authentification
import 'dotenv/config';

const corsOptions = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Content-Type, Authorization',
  exposedHeaders:'Authorization'
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', productRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
