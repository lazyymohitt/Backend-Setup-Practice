import mongoose  from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async ()=>{
 try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log("")
 } catch (error) {
    console.log("MonogoDb connection ERROR",error)
    process.exit(1)
 }
}