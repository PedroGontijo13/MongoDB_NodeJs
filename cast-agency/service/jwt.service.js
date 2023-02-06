import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

let jwtToken = {};

const createToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

jwtToken.createToken = createToken;
jwtToken.verifyToken = verifyToken;

export default jwtToken;