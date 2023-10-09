
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("MongoDB  Connected");
        })
        connection.on("error",(er)=>{
            console.log("Error connecting db - ",er);
            process.exit(0);
        })

    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
        
    }
}