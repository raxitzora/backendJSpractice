import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connctionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DBHOST: ${connctionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("MongoDB connection error",error);
        process.exit(1);
        
        
    }
}
export default connectDB;
