require('dotenv').config()
const express=require("express")
const app=express()

const mysql=require("mysql2/promise")
const cookieParser = require("cookie-parser")
const path=require("path")
const { router } = require("./routes/userRouter")
const { GenerateAccessToken, VerifyRefresh } = require('./auth/auth')
app.use(cookieParser())
app.use(express.json())


app.use("/uploads",express.static("./uploads"))



app.use("/user",router)

app.get("/refresh",(req,res)=>{
    // console.log("refreshed");


    const isValid=req.cookies["refresh"]

// console.log("isValid",isValid);

const Verified=VerifyRefresh(isValid)

    if(!Verified){
        res.status(201).send({msg:"No refresh Token"})
    }

    const NewAccessToken=GenerateAccessToken(isValid)

    res.cookie("Access",NewAccessToken)
    res.send({msg:"Refreshed"})
    
})

app.listen(8000,()=>{
    console.log("server is listening ...")
})