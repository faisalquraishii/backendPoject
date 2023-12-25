import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))  //'use' is used for middlewares and configuration

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static("public")) //static is used to store files such as images and pdfs into a public folder that can be accessed by everyone on our server
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js";  //we can name the import as we want only when the export is default

//routes declaration
app.use("/api/v1/users", userRouter) //middleware --> control will be transferred to userRoutes once the user hits on '/users'
//our http will be--> http://localhost:8000/api/v1/users/register
//--> The app uses the userRoutes for any URL starting with '/users', and listens on port 8000.
export { app }


