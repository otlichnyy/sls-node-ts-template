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

//--------------
//--------------

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import ApiError from "./utils/ApiError";
import { customErrorHandler, errorConvertor } from "./middleware/Error";

const client = new DynamoDBClient({
    region: "localhost",
    endpoint: "http://0.0.0.0:8000"
});
const docClient = DynamoDBDocumentClient.from(client);

app.get("/db", async (req, res) => {
    const command = new GetCommand({
        TableName: "demotable",
        Key: {
            PK: "PROJECT#1",
            SK: "PROJECT#1"
        }
    });

    const response = await docClient.send(command);
    console.log(response);
    res.json(JSON.stringify(response.Item));
});

app.get("/error", (req, res) => {
    throw new Error("MEh!");
    res.status(200).send({ status: "OK" });
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(404, "Not found"));
});

// convert any other Error type to APIError
app.use(errorConvertor);

// handle error
app.use(customErrorHandler);

// Exporting application and handler
export const application = app;
export const handler = serverless(app);
