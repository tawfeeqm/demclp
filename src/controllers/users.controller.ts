import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.services';

export async function signUp(req: Request, res: Response, next: NextFunction) {
    userService.signUpUser(req.body)
        .then(response => {
            res.status(201).json({
                response
            })
        })
        .catch(error => {
            next(error);
        })
}

export async function login(req: Request, res: Response, next: NextFunction) {
    userService.loginUser(req.body)
        .then(response => {
            res.status(201).json({
                response
            })
        })
        .catch(error => {
            next(error);
        })
}
