import { Router } from 'express';
import * as authController from '../controllers/auth';

const router = Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/me', authController.me);
router.post('/signout', authController.signout);

export default router;
