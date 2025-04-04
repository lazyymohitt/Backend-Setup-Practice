import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
// import {DB_NAME} from "./constants.js";

import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/db.js";

const app = express();

connectDB()
  .then(() => {
    app.on("Listener Error", (eventerror) => {
      console.log("this error is seen in OnEvent In Then()", eventerror);
      throw eventerror;
    });
    app.listen(process.env.PORT || 8000 ,()=>{
      console.log( `the app is Running at ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("This error is usully occured by the DB connection ", err);
  });
