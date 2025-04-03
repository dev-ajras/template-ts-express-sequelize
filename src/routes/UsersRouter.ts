import { Router } from 'express';
import {
    loginUser
} from '../controllers/UsersController';

const router = Router();

router.post('/', loginUser);


export default router; 