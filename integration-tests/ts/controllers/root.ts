import { RequestHandler, Request, Response } from 'express'
import pjson = require("../../package.json");
import externalSDK from '../lib/externalSDK';

export const hb: RequestHandler = async (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        version: pjson.version
    })
}

export const vacances: RequestHandler = async (req: Request, res: Response) => {
    const response = await externalSDK.ask();
    res.send(JSON.stringify(response));
}