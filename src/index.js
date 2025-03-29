import mongoose from "mongoose"
import { DB_NAME } from "./constants";

;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGORI}/${DB_NAME}`)
    } catch (error) { 
        console.error("ERROR:",error)
        // I really dont know why hitesh sir used "throw err"
        throw error
    }
})()