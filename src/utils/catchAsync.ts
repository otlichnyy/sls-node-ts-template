/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const catchAsync = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

export default catchAsync;
