import { Request, Response } from 'express';
import { login } from '../services/AuthService';

export async function loginUser(req: Request, res: Response){

    const { username, password} = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
        }

        try {
            const authResult = await login(username, password);
            res.status(200).json(authResult);
        } catch (error) {
            res.status(401).json({ error: error instanceof Error ? error.message : 'Error al iniciar sesión' });
        }
}
