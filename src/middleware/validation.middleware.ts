import { assetSchema, userSchema } from '../utils/validationSchema';
import { NextFunction, Request, Response } from "express";

export function validateAsset(req: Request, res: Response, next: NextFunction) {
    const { error } = assetSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }
    next();
}

export function validateUser(req: Request, res: Response, next: NextFunction) {
    const { error } = userSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }
    next();
}
