import express from 'express';
import { validateUser } from '../middleware/validation.middleware';
import * as userController from '../controllers/users.controller';

const router = express.Router();

router.route('/signup')
    .post(validateUser, (req, res, next) => {
        userController.signUp(req, res, next);
    });

router.route('/login')
    .post((req, res, next) => {
        userController.login(req, res, next);
    });

export default router;
