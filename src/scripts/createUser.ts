import { UsersService } from '../services/UsersService';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
    const args = process.argv.slice(2);
    if (args.length !== 2) {
        console.error('Uso: ts-node src/scripts/createUser.ts <username> <password>');
        process.exit(1);
    }

    const [username, password] = args;
    const usersService = new UsersService();

    try {
        const user = await usersService.createUser(username, password);
        console.log('Usuario creado exitosamente:', {
            id: user.id,
            username: user.username,
            createdAt: user.createdAt
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
}

main(); 