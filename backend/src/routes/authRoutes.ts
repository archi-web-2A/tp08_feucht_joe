import express from 'express';
import { getAllUsers, getCurrentUser, login, register } from '../controllers/authController';

const router = express.Router();

router.post('/login', login);
router.post('/register', register)
router.get('/getAllUsers', getAllUsers)
router.get('/currentUser', getCurrentUser)

export default router;
