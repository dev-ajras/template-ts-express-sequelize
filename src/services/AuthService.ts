import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';


export async function login(username: string, password: string) {
    
    const user = await User.findOne({ where: { username } });

    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET!, { expiresIn: '60d' });
    
    return {
        token,
        user: {
            id: user.id,
            username: user.username
        }
    }
}