import express from 'express';
import assetsRouter from './assets.router';
import usersRouter from './users.router';

const router = express.Router();

router.use('/assets', assetsRouter);
router.use('/users', usersRouter);

export default router;
