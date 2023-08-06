import "source-map-support/register";

import serverless from "serverless-http";
import express from "express";

const app = express();

app.get("/status", (req, res) => {
    res.status(200).send({ status: "OK" });
});

app.get("/env", (req, res) => {
    res.send({ myEnv: process.env.DB_URL || "unable to find" });
});

app.get("/error", (req, res) => {
    throw new Error("MEh!");
    res.status(200).send({ status: "OK" });
});

// TODO add global error handler

// Exporting application and handler
export const application = app;
export const handler = serverless(app);
