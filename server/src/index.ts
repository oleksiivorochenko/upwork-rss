import "reflect-metadata"
import {createConnection} from "typeorm"
import {Request, Response} from "express"
import express from "express"
import * as bodyParser from "body-parser"
import {AppRoutes} from "./routes"
import dotenv from "dotenv"
import { authMiddleware } from "./middleware/auth"
import { start } from "./feed-service"

dotenv.config()
const UPWORK_RSS_URL = process.env.UPWORK_RSS_URL || ''
const FETCH_INTERVAL = Number.parseInt(process.env.FETCH_INTERVAL_MINUTES || '1')

createConnection().then(async connection => {

    const app: any = express();
    app.use(bodyParser.json());
    app.use(authMiddleware)

    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    start(UPWORK_RSS_URL, FETCH_INTERVAL)

    app.listen(8000);

    console.log("Express application is up and running on port 8000");

}).catch(error => console.log("ORM connection error: ", error));