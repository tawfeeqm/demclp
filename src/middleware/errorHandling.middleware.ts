import { NextFunction, Request, Response } from "express";

class HTTPErrorResponse extends Error {
    errorCode: number;
    errorMsg: string;

    constructor(errorCode: number, errorMsg: string, ...params: any[]) {
        super(...params);
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }
}

export function emitHTTPErrorResponse(errorCode: number, errorMsg: string) {
    throw new HTTPErrorResponse(errorCode, errorMsg);
}

interface HTTPError extends Error {
    errorCode: number;
    errorMsg: string;
}

export function jsonErrorHandler(error: HTTPError, req: Request, res: Response, next: NextFunction) {
    if (("errorCode" in error) && ("errorMsg" in error)) {
        return res.status(error.errorCode).json({ status: error.errorCode, error: error.errorMsg });
    }
    console.log(error);
    res.status(500).json('Internal server error!');
    return;
}
