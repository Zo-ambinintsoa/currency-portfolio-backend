import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import config from "../config";

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    mongoose.connect(config.connexionString).then(()=>{
        app.listen(4000, ()=>{
            console.log("listening on port 4000")
        })
    }).catch(error => {
        console.log(error)
    });
