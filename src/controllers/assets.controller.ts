import { Request, Response, NextFunction } from 'express';
import * as assetsService from '../services/assets.services';

export async function createAsset(req: Request, res: Response, next: NextFunction) {
    assetsService.createAssetInServices(req.body, req.params.userId)
        .then(response => {
            res.status(201).json({
                response
            })
        })
        .catch(error => {
            next(error);
        })
}

export async function getAsset(req: Request, res: Response, next: NextFunction) {
    const { uuid } = req.params;
    assetsService.getAssetInServices(uuid)
        .then(response => {
            res.status(200).json({
                response
            })
        })
        .catch(error => {
            next(error);
        })
}
