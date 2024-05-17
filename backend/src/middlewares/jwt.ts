import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware function to verify JWT token
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the authorization header
  const token = req.headers.authorization?.split(' ')[1];

  // If no token is provided, return an error
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token with the provided secret key
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
    
    // Attach the decoded payload to the request object
    req.user = decoded;
    
    // Proceed to the next middleware
    next();
  } catch (error) {
    // If token is invalid or expired, return an error
    return res.status(403).json({ message: 'Unauthorized' });
  }
};
