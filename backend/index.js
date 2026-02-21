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
const cors=require("cors")
const allowedOrigins = [
  "http://localhost:5173",  // Vite
  "https://learnyst-mern.onrender.com" // production
];

app.use(cors(
    {
         origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
        methods:["GET","POST","PATCH","DELETE"],
          credentials: true,    
    }
))





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

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});