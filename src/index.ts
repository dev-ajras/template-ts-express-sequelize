import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { initDatabase } from './utils/databaseService';
import usersRouter from './routes/UsersRouter';
import { setupAssociations } from './models/associations';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/admin', usersRouter);

async function initServer() {
    try {
        await initDatabase();
        setupAssociations();
        app.listen(port, () => {
            console.log(`⚡️[servidor]: Servidor corriendo en http://localhost:${port}`);
        });
    } catch (error) {
        console.error(`⚡️[servidor]: Error al iniciar el servidor: ${error}`);
    }
}

initServer(); 