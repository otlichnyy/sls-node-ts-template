import { ErrorRequestHandler } from "express";
import ApiError from "../utils/ApiError";

export const stages = {
    DEV: "developement",
    PROD: "production"
};

const errorConvertor: ErrorRequestHandler = (err: Error, _, __, next) => {
    let error = err;
    if (!(error instanceof ApiError)) {
        const statusCode = 500;
        const message = String("internal server error");
        error = new ApiError(statusCode, message, false, err.stack);
    }
    next(error);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let { statusCode, message } = err as ApiError;

    if (process.env.NODE_ENV === stages.PROD && !err.isOperational) {
        statusCode = 500;
        message = String("internal server error");
    }

    res.locals.errorMessage = err.message;

    const errorResponse = {
        statusCode,
        message,
        path: process.env.NODE_ENV === stages.DEV ? err.stack : ""
    };

    if (process.env.NODE_ENV === stages.DEV) {
        console.error(err);
    }

    res.status(statusCode).send(errorResponse);
};

export { customErrorHandler, errorConvertor };
