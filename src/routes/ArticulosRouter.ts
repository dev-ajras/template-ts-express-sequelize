import { Router } from 'express';
import { getArticulos } from '../controllers/ArticulosController';

const router = Router();

router.get('/', getArticulos);

export default router; 