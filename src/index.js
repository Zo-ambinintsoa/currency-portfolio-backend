import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import config from "../config";
import {routes} from "./routes";

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    routes(app);
    mongoose.connect(config.connexionString).then(()=>{
        app.listen(4000, ()=>{
            console.log("listening on port 4000")
        })
    }).catch(error => {
        console.log(error)
    });
