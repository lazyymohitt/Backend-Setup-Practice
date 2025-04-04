import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
 try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`\n MonngoDB connected!!  DB Host :: ${connectionInstance.connection.host} `)
    
 } catch (error) {
    console.log("MonogoDb connection ERROR",error)
    process.exit(1)
 }
}

export default connectDB