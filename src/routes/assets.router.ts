import express from 'express';
import { validateAsset } from '../middleware/validation.middleware';
import * as assetsController from '../controllers/assets.controller';

const router = express.Router();

router.route('/:userId')
    .post(validateAsset, (req, res, next) => {
        assetsController.createAsset(req, res, next);
    })

router.route('/:uuid')
    .get((req, res, next) => {
        assetsController.getAsset(req, res, next);
    })
    .delete((req, res, next) => {

    });

export default router;
