import express from "express";

import cors  from "cors"
import cookieParser from "cookie-parser"


const app= express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))

app.use(cookieParser())



// importing Routesss 

import userRouter from "./routes/user.route.js";

// Routes Declaration

// app.use("/users",userRouter)
app.use("/api/v1/users",userRouter)

// the url will looked as  http://localhost:8000/api/v1/user/register(register because the router will hitt the route to Register route and at that route register user method will call)



export {app}