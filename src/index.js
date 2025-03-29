// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv"
import connectDB from "./db/db.js"

dotenv.config({
    path:"./env"
})

connectDB()







/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error Caused by express listener:", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT} `);
    });
  } catch (error) {
    console.error("ERROR:", error);
    // I really dont know why hitesh sir used "throw err"
    throw error;
  }
})();
*/