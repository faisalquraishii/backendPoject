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

export { app }