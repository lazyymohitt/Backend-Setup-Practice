import dotenv from "dotenv"
dotenv.config({
  path:'./env'
})
// import {DB_NAME} from "./constants.js";

import mongoose from "mongoose"
import express from "express"
import connectDB from "./db/db.js";

const app = express()

connectDB()

