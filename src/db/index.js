import mongoose from "mongoose" //mogoose is the one that connects us with the database
/*Two things to note regarding db: 1. Errors might be encountered while connecting with db--> use try catch  
or promises to handle errors. 2. Database is always on another continent i.e. it takes time to access --> async await
*/ 
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  //mongoose gives a returned object
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB