import bodyparser from "body-parser";
import express, { Request, Response } from "express";
import root from './routes/root';

const app = express();

app.use("/", root);

export default app;