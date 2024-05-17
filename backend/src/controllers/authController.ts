import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';
import { UserService } from '../services/authService';

const userService = new UserService();

export const generateAccessToken = (user: any) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
}

export const login = (req: Request, res: Response) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    if (!userService.isValidLogin(user.email, user.password)) {
        res.status(400).send({ error: 'Wrong login information' });
        return;
    }

    const loggedInUser = userService.getUserByEmail(user.email);

    if (!loggedInUser) {
        res.status(404).send({ error: 'This user doesn\'t exist' });
        return;
    }

    const accessToken =  generateAccessToken(user);
    res.setHeader('Authorization', 'Bearer ' + accessToken);
    res.send({ accessToken });
};

export const register = (req: Request, res: Response) => {
    const { firstName, lastName, email, phoneNumber, gender, birthDate, location, city, postalCode, password } = req.body;
    const user = new User(firstName, lastName, email, phoneNumber, gender, birthDate, location, city, postalCode, password);
    
    if (!userService.isValidRegistration(user)) {
        res.status(400).send({ error: 'All fields are required for registration' });
        return;
    }

    if (userService.getUserByEmail(user.email)) {
        res.status(409).send({ error: 'User already exists' });
        return;
    }

    userService.addUser(user);
    userService.setCurrentUser(user);

    login(req, res);
}

export const getAllUsers = (req: Request, res: Response) => {
    res.json(userService.getAllUsers());
};

export const getCurrentUser = (req: Request, res: Response) => {
    const user = userService.getCurrentUser();
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  };